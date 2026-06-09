# Despliegue de Tecto

Este documento detalla los pasos para redesplegar Tecto en el servidor local.

## Requisitos
- `sshpass` instalado (`apt install sshpass` / `brew install hudochenkov/sshpass/sshpass`).
- Acceso SSH al servidor (server.synsetsolutions.com).

## Despliegue con script (recomendado)

```bash
bash deploy.sh
```

## Despliegue manual paso a paso

```bash
# 1. Subir archivos estáticos
sshpass -p '1011' scp -o StrictHostKeyChecking=no -r static/* synset_server@server.synsetsolutions.com:/opt/synset/tecto/static/

# 2. Subir backend + Dockerfile
sshpass -p '1011' scp -o StrictHostKeyChecking=no main.py requirements.txt Dockerfile synset_server@server.synsetsolutions.com:/opt/synset/tecto/

# 3. Subir docker-compose actualizado
sshpass -p '1011' scp -o StrictHostKeyChecking=no docker-compose.lab.yml synset_server@server.synsetsolutions.com:/opt/synset/lab/docker-compose.yml

# 4. Reconstruir y reiniciar
sshpass -p '1011' ssh -o StrictHostKeyChecking=no synset_server@server.synsetsolutions.com "
  cd /opt/synset/tecto &&
  docker build -t synset-tecto:latest . &&
  cd /opt/synset/lab &&
  docker compose up -d --force-recreate tecto
"
```

## Estructura del Servidor
- **Código / Dockerfile:** `/opt/synset/tecto/`
- **Static (frontend):** `/opt/synset/tecto/static/` → montado en `/app/static`
- **PDFs compilados:** volumen Docker `tecto_pdfs` → `/app/pdfs` ✅ persiste
- **Assets subidos:** volumen Docker `tecto_assets` → `/app/assets` ✅ persiste
- **Configuración Lab:** `/opt/synset/lab/docker-compose.yml`

## Notas
- Los PDFs y assets se guardan en volúmenes Docker — **no se pierden** al redesplegar.
- El frontend es hot-swappable: basta con subir `static/*` y refrescar el browser, sin rebuild.
- La DB crea automáticamente las tablas y un cliente/documento de ejemplo si está vacía.
