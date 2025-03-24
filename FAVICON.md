# Favicon Setup for 110% Pickleball

This document explains how to set up and generate favicons for the 110% Pickleball website.

## About the Favicon

The favicon is a pickleball-inspired SVG that adapts to both light and dark mode. It includes:

- SVG favicon for modern browsers with dark mode support
- ICO format for older browsers
- Apple Touch Icon for iOS devices
- Various sized icons for PWA support
- Safari Pinned Tab icon

## Generating the Icons

We've included an SVG version of the favicon, but for complete browser support, you should generate the PNG and ICO versions.

### Using the Script (Recommended)

1. Make sure you have ImageMagick installed:

   - Mac: `brew install imagemagick`
   - Ubuntu: `sudo apt-get install imagemagick`
   - Windows: Download from [ImageMagick website](https://imagemagick.org/script/download.php)

2. Run the conversion script:
   ```bash
   chmod +x convert-favicon.sh
   ./convert-favicon.sh
   ```

### Manual Generation

If you prefer to generate the icons manually:

1. Use a service like [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload the `public/favicon.svg` file
3. Download the generated package and replace the files in the `public` directory

## Implementation

The favicon is already implemented in the website through:

1. The `metadata` object in `app/layout.tsx`
2. Direct link tags in the `<head>` section
3. The `site.webmanifest` file for PWA support

## Testing

To test if the favicon is working correctly:

1. Run the website locally: `npm run dev`
2. Check the favicon in your browser tab
3. Check if it changes in dark mode (if your OS supports it)
4. View the website on mobile and add it to your home screen to test the Apple Touch Icon
