# Docker Deployment Guide

## Production-Grade Docker Setup

This project includes a multi-stage Dockerfile optimized for production deployment with security best practices.

## Features

- **Multi-stage build**: Reduces final image size
- **Non-root user**: Runs as unprivileged user for security
- **Layer caching**: Optimized for faster builds
- **Health checks**: Built-in health monitoring
- **Alpine Linux**: Minimal base image
- **Standalone output**: Self-contained Next.js build

## Quick Start

### Build the Docker Image

```bash
docker build -t dicotr-martech:latest .
```

### Run the Container

```bash
docker run -p 3000:3000 --env-file .env dicotr-martech:latest
```

### Using Docker Compose

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Required variables:
- `NODE_ENV`: Set to `production`
- `NEXT_PUBLIC_API_URL`: Your API URL
- `ALLOWED_ORIGINS`: Comma-separated list of allowed origins

## Build Arguments

Customize the build process:

```bash
docker build \
  --build-arg NODE_VERSION=20 \
  -t dicotr-martech:latest .
```

## Health Check

The container includes a health check endpoint at `/api/health`:

```bash
curl http://localhost:3000/api/health
```

## Production Deployment

### Docker Hub

```bash
# Tag the image
docker tag dicotr-martech:latest yourusername/dicotr-martech:latest

# Push to Docker Hub
docker push yourusername/dicotr-martech:latest
```

### AWS ECR

```bash
# Authenticate
aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com

# Tag
docker tag dicotr-martech:latest aws_account_id.dkr.ecr.region.amazonaws.com/dicotr-martech:latest

# Push
docker push aws_account_id.dkr.ecr.region.amazonaws.com/dicotr-martech:latest
```

### Google Container Registry

```bash
# Tag
docker tag dicotr-martech:latest gcr.io/project-id/dicotr-martech:latest

# Push
docker push gcr.io/project-id/dicotr-martech:latest
```

## Kubernetes Deployment

Create a deployment file `k8s-deployment.yml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dicotr-martech
spec:
  replicas: 3
  selector:
    matchLabels:
      app: dicotr-martech
  template:
    metadata:
      labels:
        app: dicotr-martech
    spec:
      containers:
      - name: dicotr-martech
        image: dicotr-martech:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
        resources:
          limits:
            cpu: "1000m"
            memory: "1Gi"
          requests:
            cpu: "500m"
            memory: "512Mi"
---
apiVersion: v1
kind: Service
metadata:
  name: dicotr-martech-service
spec:
  selector:
    app: dicotr-martech
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

Deploy:

```bash
kubectl apply -f k8s-deployment.yml
```

## Security Best Practices

1. **Non-root user**: Container runs as user `nextjs` (UID 1001)
2. **Minimal base image**: Alpine Linux reduces attack surface
3. **No unnecessary packages**: Only production dependencies included
4. **Health monitoring**: Automatic health checks
5. **Resource limits**: CPU and memory limits in docker-compose
6. **Environment variables**: Secrets managed externally

## Troubleshooting

### Check container logs

```bash
docker logs <container_id>
```

### Access container shell

```bash
docker exec -it <container_id> sh
```

### Rebuild without cache

```bash
docker build --no-cache -t dicotr-martech:latest .
```

### Check health status

```bash
docker inspect --format='{{json .State.Health}}' <container_id>
```

## Performance Optimization

1. **Build cache**: Dependencies are cached in separate layers
2. **Standalone output**: Self-contained build reduces runtime overhead
3. **Layer optimization**: Files copied in order of change frequency
4. **Clean npm cache**: Reduces image size

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Build and Push Docker Image

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t dicotr-martech:${{ github.sha }} .
      
      - name: Push to registry
        run: |
          echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin
          docker push dicotr-martech:${{ github.sha }}
```

## Support

For issues or questions, please check:
- Application logs: `docker logs <container_id>`
- Health endpoint: `http://localhost:3000/api/health`
- Container stats: `docker stats <container_id>`
