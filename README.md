# devops-task1-cicd-pipeline

This project sets up a CI/CD pipeline using GitHub Actions to test, build and push a Docker image of a sample Node.js app (nodejs-demo-app) to Docker Hub on every push to `main`.

## Pipeline (`.github/workflows/main.yml`)
1. **test**: checkout, set up Node 20, `npm install`, `npm test`
2. **build-and-push** (runs only if tests pass): log in to Docker Hub, build the image, push `latest` and a commit-SHA tag

## Setup
1. Create a Docker Hub access token (Account Settings > Security).
2. In the GitHub repo go to Settings > Secrets and variables > Actions and add:
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`
3. Push to `main` and watch the run in the **Actions** tab.

## Run locally
```bash
npm test
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app   # http://localhost:3000
```

## Screenshots
Add a screenshot of the successful Actions run and the image on Docker Hub here.
