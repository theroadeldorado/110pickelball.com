#!/bin/bash

# This script requires ImageMagick to be installed
# Install with: brew install imagemagick
# Or on Ubuntu: sudo apt-get install imagemagick

# Generate favicon.ico
convert -background transparent -size 32x32 public/favicon.svg public/favicon.ico

# Generate Apple Touch Icon
convert -background transparent -size 180x180 public/favicon.svg public/apple-touch-icon.png

# Generate various sized icons for different devices
convert -background transparent -size 192x192 public/favicon.svg public/icon-192.png
convert -background transparent -size 512x512 public/favicon.svg public/icon-512.png

echo "Favicon generation complete!"