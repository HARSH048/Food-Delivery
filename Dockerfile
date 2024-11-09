# Stage 1: Build React app
FROM node:14-alpine AS build

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Build the React app
#RUN npm run build

# Copy the rest of the application code
COPY . .

# Stage 2: Serve React app using Nginx
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy React build to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx and keep running in the foreground
CMD ["nginx", "-g", "daemon off;"]
