#!/bin/bash

# Build the project
npm run build

# Since this is a username.github.io site, we don't need a separate branch
# Copy build files directly to root
cp -r dist/public/* .

# Add .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Stage all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to main branch since this is username.github.io
git push origin main --force