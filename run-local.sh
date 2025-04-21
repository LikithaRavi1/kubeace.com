#!/bin/bash

# KubeAce Website - Local Development Runner
# This script sets up and runs the KubeAce website locally

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Print banner
echo -e "${BLUE}"
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                                                               ║"
echo "║   📡 KubeAce Website - Local Development Environment 🚀       ║"
echo "║                                                               ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Check if Node.js is installed
echo -e "${YELLOW}Checking dependencies...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js is not installed. Please install Node.js before continuing.${NC}"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2)
NODE_MAJOR_VERSION=$(echo $NODE_VERSION | cut -d '.' -f 1)
if [ $NODE_MAJOR_VERSION -lt 16 ]; then
    echo -e "${RED}Node.js version 16 or higher is required. Your version: $NODE_VERSION${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js version $NODE_VERSION detected${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}npm is not installed. Please install npm before continuing.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ npm detected${NC}"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to install dependencies. Please check the error message above.${NC}"
        exit 1
    fi
    echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
else
    echo -e "${GREEN}✓ Dependencies already installed${NC}"
fi

# Run development server
echo -e "${YELLOW}Starting development server...${NC}"
echo -e "${BLUE}The application will be available at http://localhost:3000${NC}"
echo -e "${BLUE}Press Ctrl+C to stop the server${NC}"

npm run dev

echo -e "${YELLOW}Server stopped${NC}"