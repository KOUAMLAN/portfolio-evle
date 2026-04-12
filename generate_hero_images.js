import sharp from 'sharp';

const input = 'public/image/hero.webp';
const sizes = [360, 480, 720];

for (const size of sizes) {
  await sharp(input)
    .resize(size, size, {
      fit: 'cover',
      position: 'centre'
    })
    .webp({ quality: 82 })
    .toFile(`public/image/hero-${size}w.webp`);
}

console.log('Hero images generated.');