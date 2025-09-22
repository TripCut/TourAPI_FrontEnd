#!/bin/bash

# tripcut.co.kr 배포: ALB(HTTPS 종료) + ACM 인증서 환경용 설정 스크립트

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DOMAIN="tripcut.co.kr"

if command -v docker-compose >/dev/null 2>&1; then
  DCMD="docker-compose"
elif docker compose version >/dev/null 2>&1; then
  DCMD="docker compose"
else
  echo "docker-compose 또는 docker compose가 필요합니다. 설치 후 다시 시도하세요."
  exit 1
fi

echo "======================================"
echo "Tripcut 배포 (ALB/ACM 모드)"
echo "도메인: $DOMAIN"
echo "======================================"
echo ""

echo "1. DNS 설정 확인중..."
nslookup $DOMAIN || true
nslookup www.$DOMAIN || true

echo ""
echo "2. 기존 Docker 컨테이너 중지..."
cd "$SCRIPT_DIR"
$DCMD down || true

echo ""
echo "3. Nginx 설정 활성화 (ALB 프록시 헤더 기반)"
if [ -f "$SCRIPT_DIR/nginx/default.conf" ]; then
  cp "$SCRIPT_DIR/nginx/default.conf" "$SCRIPT_DIR/nginx/default.local.bak"
  echo "기존 nginx/default.conf를 default.local.bak으로 백업했습니다."
fi
cp "$SCRIPT_DIR/nginx/default-ssl.conf" "$SCRIPT_DIR/nginx/default.conf"
echo "nginx/default-ssl.conf 내용을 활성 설정으로 적용했습니다."

echo ""
echo "4. Docker 컨테이너 시작..."
$DCMD -f "$SCRIPT_DIR/docker-compose-ssl.yml" up -d --remove-orphans

echo ""
echo "======================================"
echo "✅ 배포 완료 (ALB/ACM)"
echo "======================================"
echo "접속: https://$DOMAIN"
echo "접속: https://www.$DOMAIN"
echo "ALB 대상 그룹 포트: 80 (HTTP)"
echo "Nginx는 X-Forwarded-Proto 기반으로 HTTPS 리다이렉트 처리"
echo "======================================"
