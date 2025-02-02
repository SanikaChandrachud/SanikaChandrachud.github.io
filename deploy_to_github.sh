#!/bin/bash

# Build the project
npm run build

# Create gh-pages branch if it doesn't exist
git checkout -b gh-pages

# Move dist/public contents to root
mv dist/public/* .

# Add .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Stage all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages --force

# Return to previous branch
git checkout -
