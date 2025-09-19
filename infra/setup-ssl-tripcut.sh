#!/bin/bash

# tripcut.co.kr 전용 Let's Encrypt SSL 인증서 설정 스크립트

DOMAIN="tripcut.co.kr"
EMAIL="devcms21@gmail.com"  # 이메일을 인자로 받거나 기본값 사용

echo "======================================"
echo "Let's Encrypt SSL 인증서 설정"
echo "도메인: $DOMAIN"
echo "이메일: $EMAIL"
echo "======================================"
echo ""

# 1. DNS 확인
echo "1. DNS 설정 확인중..."
echo "   A 레코드 확인:"
nslookup tripcut.co.kr
echo ""
echo "   www 서브도메인 확인:"
nslookup www.tripcut.co.kr
echo ""

read -p "DNS 설정이 올바른가요? (y/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "DNS 설정을 먼저 완료해주세요."
    echo "tripcut.co.kr과 www.tripcut.co.kr이 서버 IP를 가리켜야 합니다."
    exit 1
fi

# 2. Certbot 설치 확인
echo ""
echo "2. Certbot 설치 확인중..."
if ! command -v certbot &> /dev/null; then
    echo "Certbot이 설치되지 않았습니다."
    
    # macOS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "macOS에서 실행 중입니다. 서버에서 실행해주세요."
        echo "또는 서버에서 다음 명령어를 실행하세요:"
        echo "  Ubuntu/Debian: sudo apt-get install certbot"
        echo "  CentOS/RHEL: sudo yum install certbot"
        exit 1
    fi
    
    # Ubuntu/Debian
    if [ -f /etc/debian_version ]; then
        sudo apt-get update
        sudo apt-get install -y certbot
    # CentOS/RHEL
    elif [ -f /etc/redhat-release ]; then
        sudo yum install -y epel-release
        sudo yum install -y certbot
    fi
fi

# 3. 기존 컨테이너 중지
echo ""
echo "3. 기존 Docker 컨테이너 중지..."
cd TourAPI_FrontEnd/infra
docker-compose down

# 4. 인증서 발급
echo ""
echo "4. Let's Encrypt 인증서 발급 시작..."
echo "   ⚠️  포트 80과 443이 사용 가능해야 합니다."

sudo certbot certonly \
    --standalone \
    -d tripcut.co.kr \
    -d www.tripcut.co.kr \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ 인증서 발급 실패!"
    echo "다음 사항을 확인해주세요:"
    echo "1. DNS가 올바르게 설정되었는지"
    echo "2. 포트 80, 443이 열려있는지"
    echo "3. 방화벽 설정"
    exit 1
fi

# 5. Nginx 설정 파일 백업 및 교체
echo ""
echo "5. Nginx 설정 파일 교체..."
if [ -f nginx/default.conf ]; then
    cp nginx/default.conf nginx/default-http.conf.bak
    echo "기존 설정을 nginx/default-http.conf.bak으로 백업했습니다."
fi
cp nginx/default-ssl.conf nginx/default.conf
echo "SSL 설정 파일을 활성화했습니다."

# 6. Docker 컨테이너 시작
echo ""
echo "6. Docker 컨테이너 시작..."
docker-compose -f docker-compose-ssl.yml up -d

echo ""
echo "======================================"
echo "✅ SSL 설정 완료!"
echo "======================================"
echo ""
echo "🌐 다음 주소로 접속 가능합니다:"
echo "   https://tripcut.co.kr"
echo "   https://www.tripcut.co.kr"
echo ""
echo "🔒 SSL 인증서 정보:"
sudo certbot certificates | grep -A 3 "tripcut.co.kr"
echo ""
echo "🔄 인증서 자동 갱신 설정:"
echo "   다음 명령어로 crontab을 편집하세요:"
echo "   crontab -e"
echo ""
echo "   그리고 다음 라인을 추가하세요:"
echo "   0 2 * * * certbot renew --quiet --pre-hook 'cd TourAPI_FrontEnd/infra && docker-compose -f docker-compose-ssl.yml stop nginx' --post-hook 'cd /Users/cms/ureka/TourAPI_FrontEnd/infra && docker-compose -f docker-compose-ssl.yml start nginx'"
echo ""
echo "======================================"
