#!/bin/bash
set -e

echo "=== Simple NFZ Build ==="
echo "Current directory: $(pwd)"
echo "Files present:"
ls -la

# Check if we have the HTML file at root level
if [ -f "index.html" ]; then
    echo "Found index.html at root"
    mkdir -p dist
    cp index.html dist/
    echo "Simple build completed"
else
    echo "No index.html found, checking for client folder"
    if [ -d "client" ]; then
        echo "Found client directory, building from there"
        cd client
        npm run build
    else
        echo "ERROR: No website files found"
        exit 1
    fi
fi