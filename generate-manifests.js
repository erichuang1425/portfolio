const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

function isImage(file) {
  return /\.(png|jpe?g|gif|webp)$/i.test(file);
}

fs.readdirSync(imagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .forEach(dirent => {
    const folder = dirent.name;
    const folderPath = path.join(imagesDir, folder);
    const files = fs.readdirSync(folderPath).filter(isImage);
    const manifest = files.map(name => ({
      src: `../images/${folder}/${name}`,
      title: path.parse(name).name
    }));
    fs.writeFileSync(
      path.join(folderPath, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    console.log(`Wrote ${manifest.length} entries for ${folder}`);
  });

