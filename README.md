![Node.js CI](https://github.com/andrewbuttigieg/react-tic-tac-toe/workflows/Node.js%20CI/badge.svg)

# react-tic-tac-toe

## Docker instructions
docker build -t andrewbuttigieg/react-tic-tac-toe:dev .  
docker push andrewbuttigieg/react-tic-tac-toe:dev  
docker run -v ${PWD}:/app -v /app/node_modules -p 8080:80 --rm react-tic-tac-toe:dev  
kubectl apply -f ./react-tic-tac-toe.yml  
