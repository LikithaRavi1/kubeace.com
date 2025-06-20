# Use specific Node.js version
FROM node:24.2.0-alpine
 
# Set working directory
WORKDIR /app
 
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
 
# Copy rest of the app
COPY . .
 
# Build your app
RUN npm run build
 
# Expose app port
EXPOSE 3000
 
# Start the app
CMD ["npm", "start"]