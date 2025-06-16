#!/bin/bash

set -e

# Blue 컨테이너가 실행 중인지 확인
IS_BLUE_UP=$(docker ps --format '{{.Names}}' | grep "${DOCKER_APP_NAME}-blue" || true)

# NGINX 먼저 실행
docker compose -f infra/docker-compose.yml up -d nginx

# Blue가 살아 있으면 Green 배포
if [ "$IS_BLUE_UP" ]; then
  echo "✅ Blue is up → deploying Green"
  docker compose -f infra/docker-compose.yml pull green
  docker compose -f infra/docker-compose.yml up -d green

  while true; do
    sleep 2
    if docker exec nginx wget --spider --quiet http://green:3000; then
      echo "🟢 Green is up"
      break
    fi
  done

  # nginx 설정을 green으로 전환
  sed -i 's/blue/green/g' infra/nginx/default.conf
  docker exec nginx nginx -s reload
  docker compose -f infra/docker-compose.yml stop blue

else
  echo "✅ Green is up → deploying Blue"
  docker compose -f infra/docker-compose.yml pull blue
  docker compose -f infra/docker-compose.yml up -d blue

  while true; do
    sleep 2
    if docker exec nginx wget --spider --quiet http://blue:3000; then
      echo "🔵 Blue is up"
      break
    fi
  done

  # nginx 설정을 blue로 전환
  sed -i 's/green/blue/g' infra/nginx/default.conf
  docker exec nginx nginx -s reload
  docker compose -f infra/docker-compose.yml stop green
fi

echo "✅ Deploy complete"
