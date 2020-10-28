![Node.js CI](https://github.com/andrewbuttigieg/react-tic-tac-toe/workflows/Node.js%20CI/badge.svg) ![Docker](https://github.com/andrewbuttigieg/react-tic-tac-toe/workflows/Docker/badge.svg)

# Tic Tac Toe in React
A simple Tic Tac Toe game in React used as an introduction to building an application in React and getting it Dockerized. 

## Why Docker
Without any other components, you can host your React application by building the application with `npm run build`. You will then be able to take the static files and host them on a static content host. With Docker, what you can do is not only automate this by wrapping up the application in a Docker container, but it will also make it easy to setup URL rules, version the deployment itself as a single object, run continous integration scripts as part of the artifact, makes it easy to deploy to a variety of container hosting solution especially Kubernetes.

## Why would you not want Docker
Apart from already having built an applicaiton that has a dependency that replicates the functionality of Docker, you will be hard pressed not to want to use Docker but good places to avoid using Docker is if you want as fast as possible infrastructure. From experience, databases are the one key component that would not normal be hosted inside of Docker, but you can still use databases in Docker as part of your testing framework.

## What is in the Docker file
Besides building the react application into static files, I have removed the need to run node itself so it makes for a lean image. I have included NGINX as a host for the content as it easy for someone to pick up and learn.

## Docker instructions
cd ./my-app
docker build -t andrewbuttigieg/react-tic-tac-toe:dev .  
docker push andrewbuttigieg/react-tic-tac-toe:dev  
docker run -v ${PWD}:/app -v /app/node_modules -p 8080:80 --rm react-tic-tac-toe:dev  

## Kubernetes
The repository is setup so you can deploy to Kubernetes by running
`kubectl apply -f ./my-app/react-tic-tac-toe.yml`
