#!/bin/bash

# Build the project
npm run build

# Create necessary directories
mkdir -p dist/public/assets

# Copy all build files to the root directory since this is a GitHub Pages site
cp -r dist/public/* .

# Add .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Stage all files
git add .nojekyll
git add index.html
git add assets/

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to main branch since this is username.github.io
git push origin main --force