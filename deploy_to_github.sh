#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create necessary directories
mkdir -p dist/public/assets

# Copy all build files to the root directory since this is a GitHub Pages site
cp -r dist/public/* .

# Add .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Create a 404.html that redirects to index.html for client-side routing
cat > 404.html << EOL
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Engineering Portfolio</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
EOL

# Stage all files
git add .nojekyll
git add index.html
git add 404.html
git add assets/

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to main branch since this is username.github.io
git push origin main --force

echo "Deployment complete! Your site should be live in a few minutes at https://sanikachandrachud.github.io"