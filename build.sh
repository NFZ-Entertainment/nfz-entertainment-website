#!/bin/bash
set -e

echo "=== NFZ Entertainment Build Script ==="
echo "Current directory: $(pwd)"
echo "Directory contents:"
ls -la

echo "=== Checking client directory ==="
if [ ! -d "client" ]; then
    echo "ERROR: client directory not found"
    exit 1
fi

if [ ! -f "client/index.html" ]; then
    echo "ERROR: client/index.html not found"
    exit 1
fi

echo "Client directory contents:"
ls -la client/

echo "=== Building with Vite ==="
cd client
npx vite build

echo "=== Build completed ==="
cd ..
echo "Output contents:"
ls -la dist/public/