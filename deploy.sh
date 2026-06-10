#!/usr/bin/env bash
# Tecto — script de despliegue completo
# Ejecutar desde la raíz del repo: bash deploy.sh
set -euo pipefail

SERVER="synset_server@10.0.0.13"
PASS="1011"
REMOTE_APP="/opt/synset/tecto"
REMOTE_LAB="/opt/synset/lab"

echo "==> Subiendo archivos estáticos..."
sshpass -p "$PASS" scp -o StrictHostKeyChecking=no -r static/* "$SERVER:$REMOTE_APP/static/"

echo "==> Subiendo backend y configuración..."
sshpass -p "$PASS" scp -o StrictHostKeyChecking=no \
  main.py \
  requirements.txt \
  Dockerfile \
  "$SERVER:$REMOTE_APP/"

echo "==> Subiendo docker-compose..."
sshpass -p "$PASS" scp -o StrictHostKeyChecking=no \
  docker-compose.lab.yml \
  "$SERVER:$REMOTE_LAB/docker-compose.yml"

echo "==> Construyendo imagen y reiniciando contenedor..."
sshpass -p "$PASS" ssh -o StrictHostKeyChecking=no "$SERVER" "
  set -e
  cd $REMOTE_APP
  docker build -t ghcr.io/odimsom/tecto:latest .
  cd $REMOTE_LAB
  docker compose up -d --force-recreate tecto
  echo '==> Esperando healthcheck...'
  sleep 5
  docker inspect --format='{{.State.Health.Status}}' \$(docker compose ps -q tecto) 2>/dev/null || true
"

echo "==> Deploy completado."
