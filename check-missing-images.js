// You can run this script with node check-missing-images.js

const fs = require('fs');
const path = require('path');

// Load birds.js as text
const birdsJs = fs.readFileSync('./birds.js', 'utf8');

// Regex to find all image paths in birds.js
const imageRegex = /images?:\s*{([^}]+)}/g;
const singleImageRegex = /image:\s*["']([^"']+)["']/g;
const multiImageRegex = /["']([^"']+\.(?:jpeg|jpg|png|gif))["']/g;

let imagePaths = new Set();

// Find single image fields
let match;
while ((match = singleImageRegex.exec(birdsJs)) !== null) {
  imagePaths.add(match[1]);
}

// Find images in images: { ... }
while ((match = imageRegex.exec(birdsJs)) !== null) {
  const block = match[1];
  let submatch;
  while ((submatch = multiImageRegex.exec(block)) !== null) {
    imagePaths.add(submatch[1]);
  }
}

// List files in assets/images
const imagesDir = path.join(__dirname, 'assets/images');
const files = fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir) : [];

const referencedFilenames = new Set(Array.from(imagePaths).map(p => path.basename(p)));

const unused = files.filter(f =>
  f.match(/\.(jpeg|jpg|png|gif)$/i) && !referencedFilenames.has(f)
);

if (unused.length === 0) {
  console.log('All images in assets/images are referenced in birds.js.');
} else {
  console.log('Unused image files in assets/images:');
  unused.forEach(f => console.log(f));
}