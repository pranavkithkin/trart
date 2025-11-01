#!/bin/bash

# Verification script to check Docker setup before deployment
# Run this script to ensure everything is configured correctly

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_header() {
    echo -e "\n${BLUE}=== $1 ===${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

ERRORS=0

print_header "Docker Setup Verification"

# Check if required files exist
print_header "Checking Required Files"

FILES=(
    "Dockerfile"
    "docker-compose.yml"
    "next.config.js"
    "package.json"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        print_success "$file exists"
    else
        print_error "$file is missing"
        ERRORS=$((ERRORS + 1))
    fi
done

# Check Docker installation
print_header "Checking Docker Installation"

if command -v docker &> /dev/null; then
    print_success "Docker is installed"
    docker --version
else
    print_error "Docker is not installed"
    ERRORS=$((ERRORS + 1))
fi

if command -v docker compose &> /dev/null; then
    print_success "Docker Compose is installed"
    docker compose version
else
    print_error "Docker Compose is not installed"
    ERRORS=$((ERRORS + 1))
fi

# Check Docker daemon
print_header "Checking Docker Daemon"

if docker info &> /dev/null; then
    print_success "Docker daemon is running"
else
    print_error "Docker daemon is not running"
    ERRORS=$((ERRORS + 1))
fi

# Validate docker-compose.yml syntax
print_header "Validating docker-compose.yml"

if docker compose config &> /dev/null; then
    print_success "docker-compose.yml syntax is valid"
else
    print_error "docker-compose.yml has syntax errors"
    docker compose config
    ERRORS=$((ERRORS + 1))
fi

# Check for next.config.js standalone output
print_header "Checking Next.js Configuration"

if grep -q "output.*standalone" next.config.js; then
    print_success "Standalone output is enabled in next.config.js"
else
    print_warning "Standalone output might not be enabled in next.config.js"
fi

# Check Dockerfile for standalone build
print_header "Checking Dockerfile Configuration"

if grep -q ".next/standalone" Dockerfile; then
    print_success "Dockerfile uses standalone build output"
else
    print_warning "Dockerfile might not use standalone build output"
fi

if grep -q "node server.js" Dockerfile; then
    print_success "Dockerfile uses direct node execution"
else
    print_warning "Dockerfile might not use direct node execution"
fi

# Check for external network dependencies
print_header "Checking for External Dependencies"

if grep -q "external.*true" docker-compose.yml; then
    print_error "docker-compose.yml still has external network dependencies"
    ERRORS=$((ERRORS + 1))
else
    print_success "No external network dependencies found"
fi

if grep -q "depends_on" docker-compose.yml; then
    print_warning "docker-compose.yml has depends_on directive"
else
    print_success "No service dependencies found"
fi

# Check port configuration
print_header "Checking Port Configuration"

if grep -q "3000:3000" docker-compose.yml; then
    print_success "Port 3000 is correctly mapped"
else
    print_warning "Port mapping might be incorrect"
fi

# Check if port 3000 is available
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    print_warning "Port 3000 is already in use"
    echo "  Process using port 3000:"
    lsof -Pi :3000 -sTCP:LISTEN
else
    print_success "Port 3000 is available"
fi

# Check restart policy
print_header "Checking Restart Policy"

if grep -q "restart.*unless-stopped" docker-compose.yml; then
    print_success "Restart policy is set to 'unless-stopped'"
else
    print_warning "Restart policy might not be configured"
fi

# Check for documentation files
print_header "Checking Documentation"

DOC_FILES=(
    "DEPLOYMENT.md"
    "DOCKER_README.md"
    "QUICK_START.md"
    "deploy.sh"
)

for file in "${DOC_FILES[@]}"; do
    if [ -f "$file" ]; then
        print_success "$file exists"
    else
        print_warning "$file is missing (optional)"
    fi
done

# Check deploy.sh permissions
if [ -f "deploy.sh" ]; then
    if [ -x "deploy.sh" ]; then
        print_success "deploy.sh is executable"
    else
        print_warning "deploy.sh is not executable. Run: chmod +x deploy.sh"
    fi
fi

# Summary
print_header "Verification Summary"

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo ""
    echo "Your Docker setup is ready for deployment."
    echo ""
    echo "Next steps:"
    echo "  1. Run: chmod +x deploy.sh"
    echo "  2. Run: ./deploy.sh --clean"
    echo "  3. Check logs: docker compose logs -f"
    echo ""
else
    echo -e "${RED}✗ Found $ERRORS error(s)${NC}"
    echo ""
    echo "Please fix the errors above before deploying."
    echo ""
    exit 1
fi

# Optional: Test build (dry run)
print_header "Optional: Test Build"
echo "Would you like to test the Docker build? (This won't start the container)"
echo "This will validate that the Dockerfile can build successfully."
echo ""
read -p "Run test build? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_success "Starting test build..."
    if docker compose build; then
        print_success "Test build completed successfully!"
        
        # Show image size
        IMAGE_SIZE=$(docker images trart-website --format "{{.Size}}" | head -1)
        echo ""
        echo "Image size: $IMAGE_SIZE"
        echo ""
        
        print_success "Your Docker setup is fully validated and ready to deploy!"
    else
        print_error "Test build failed. Check the output above for errors."
        exit 1
    fi
else
    echo "Skipping test build. You can run it later with: docker compose build"
fi

echo ""
print_success "Verification complete!"

