# Iniciar

```cmd
docker-compose up -d
```

# Como inserir dados no banco de dados

```cmd
curl -X POST http://localhost:8080 \
 -H "Content-Type: application/json" \
 -d '{"name": "Test"}'
```

# Como buscar

```cmd
curl -X GET http://localhost:8080
```
