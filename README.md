![Node.js CI](https://github.com/andrewbuttigieg/react-tic-tac-toe/workflows/Node.js%20CI/badge.svg)

# react-tic-tac-toe
A simple Tic Tac Toe game in React used as an introduction to building an application in react and getting it dockerized. 

## Why Docker
Without any other components, you can host your React application by building the application with `npm run build`. You will then be able to take the static files and host them on a static content host. With Docker, what you can do is not only automate this by wrapping up the application in a Docker container, but it will also make it easy to setup URL rules, version the deployment itself as a single object, easily deploy to a variety of container hosting solution especially Kubernetes.

## What is in the Docker file
Besides building the react application into static files, I have removed the need to run node itself so it makes for a lean image. I have included NGINX as a host for the content as it easy for someone to pick up and learn.

## Docker instructions
docker build -t andrewbuttigieg/react-tic-tac-toe:dev .  
docker push andrewbuttigieg/react-tic-tac-toe:dev  
docker run -v ${PWD}:/app -v /app/node_modules -p 8080:80 --rm react-tic-tac-toe:dev  

## Kubernetes
The repository is setup so you can deploy to Kubernetes by running
`kubectl apply -f ./my-app/react-tic-tac-toe.yml`
