# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the custom Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5000

# Start Nginx server when the container launches
CMD ["nginx", "-g", "daemon off;"]
