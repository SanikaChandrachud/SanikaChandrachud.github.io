#!/bin/bash

# Build the project
npm run build

# Create or update .nojekyll file
touch .nojekyll

# Copy the dist/public directory contents to the root
cp -r dist/public/* .

# Add all changes
git add .

# Commit
git commit -m "Update portfolio site"

# Push to GitHub
git push origin main
