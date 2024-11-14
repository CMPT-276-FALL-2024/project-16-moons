# Use the official Node.js image as a base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Run unit tests (using Jest)
RUN npm test -- --coverage 

# Expose port for the app (default React port)
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
