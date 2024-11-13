# Iniciar

```
docker-compose up -d
```

# Como inserir dados no banco de dados

```
curl -X POST http://localhost:8080  -H "Content-Type: application/json"  -d '{"name": "Test"}'
```

# Como buscar

```
curl -X GET http://localhost:8080
```
