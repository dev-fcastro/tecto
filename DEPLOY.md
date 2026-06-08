# Despliegue de Tecto

Este documento detalla los pasos para redesplegar Tecto en el servidor local.

## Requisitos
- Acceso SSH al servidor (10.0.0.13).
- Docker y Docker Compose instalados en el servidor.

## Pasos de Despliegue Automático

Puedes usar este comando desde tu máquina local (donde tienes el código):

```bash
# Subir archivos estáticos
sshpass -p '1011' scp -o StrictHostKeyChecking=no -r static/* synset_server@10.0.0.13:/opt/synset/tecto/static/

# Subir backend
sshpass -p '1011' scp -o StrictHostKeyChecking=no main.py requirements.txt synset_server@10.0.0.13:/opt/synset/tecto/

# Reconstruir y Reiniciar
sshpass -p '1011' ssh -o StrictHostKeyChecking=no synset_server@10.0.0.13 "
  cd /opt/synset/tecto && 
  docker build -t synset-tecto:latest . && 
  cd /opt/synset/lab && 
  docker compose up -d --force-recreate tecto
"
```

## Estructura del Servidor
- **Código:** `/opt/synset/tecto/`
- **Configuración Lab:** `/opt/synset/lab/docker-compose.yml`
- **PDFs Temporales:** `/tmp/tecto_pdfs` (dentro del contenedor y host si mapeado)

## Notas
- El frontend está modularizado en `/static/js/` y `/static/css/`.
- El mapeo de volúmenes en `docker-compose.yml` permite cambios en caliente en los archivos estáticos sin reiniciar el contenedor.
