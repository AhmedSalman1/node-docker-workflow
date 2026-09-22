# Dockerized Node Workflow

## Development (with Hot Reload)

### Run & Watch (Recommended - Single Terminal)

- docker compose -f docker-compose.yml -f docker-compose.dev.yml up --watch --build

### Run in Background (Alternative - Dual Terminals)

- docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
- docker compose -f docker-compose.yml -f docker-compose.dev.yml watch

### Stop & Remove Services

- docker compose -f docker-compose.yml -f docker-compose.dev.yml down

---

## Production

### Start Services

- docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

### Stop & Remove Services

- docker compose -f docker-compose.yml -f docker-compose.prod.yml down

---

## Management & Debugging

### Check Services Status

- docker ps

### View Container Logs

- docker logs container_name

### Access Container Shell

- docker exec -it container_name sh

---

## --build: When to Use

### Use `--build`

- First run, `Dockerfile` or `package*.json` changed, switched dev/prod

### Skip `--build` (plain `up`)

- Only `./src` changed (watch + nodemon handles it), plain restart after `down`

---

# PostgreSQL + pgAdmin

### Connect to PostgreSQL

- docker exec -it <postgres-container> psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}
- Host port: `5433` -> container `5432`

### pgAdmin (dev only)

- URL: http://localhost:5050 (login with `PGADMIN_EMAIL` / `PGADMIN_PASSWORD` from `.env`)
- Register server: Host `postgres`, Port `5432`, User/Password from `.env`, DB from `POSTGRES_DB`

### DB health check

- curl http://localhost:4000/health/db
