# Dockerfile for website directory

# use nginx to serve static HTML pages
FROM nginx:alpine

# Copy HTML files into Nginx container
COPY website/ /usr/share/nginx/html

# Expose (Allocate) port 80 to access web server
EXPOSE 80