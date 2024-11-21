# Dockerfile for deploying dish-it-react

# Use node.js 18 alpine for docker image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy React app package.json and package-lock.json first
COPY ./dish-it-react/package*.json ./

# Install dependencies
RUN npm install

# Copy rest of React app
COPY ./dish-it-react/ ./

# Build React app for production
RUN npm run build

# Install 'serve' globally to serve the production build
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start React app on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]