# docker template for dish-it-react

# Use node.js 18 alpine for docker image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy React app package.json and package-lock.json first
COPY dish-it-react/package*.json ./

# Install dependencies ...
RUN npm install

# Install 'serve' globally to serve the production build
RUN npm install -g serve

# Copy rest of React app
COPY dish-it-react/ ./

# Build react app for production
RUN npm run build

# Expose (Allocate) port for React App to run on
EXPOSE 3000

# Start react APP (serve build folder)
CMD npx serve -s build