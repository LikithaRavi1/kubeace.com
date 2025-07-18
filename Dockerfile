# Build stage
FROM node:24.2.0-alpine as build
WORKDIR /app
# Copy package files
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy source code
COPY . .
# Build the application
RUN npm run build
# Production stage
FROM nginx:alpine
# Copy built assets from build stage
COPY --from=build /app/dist/public /usr/share/nginx/html
# Copy nginx configuration if you have custom config
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

