const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app', 'community-development-programme');

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.module.css')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(dir);
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('padding: 80px 0;')) {
    content = content.replace(/padding:\s*80px\s+0;/g, 'padding: 50px 0;');
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated padding in ${f}`);
    count++;
  }
});

console.log(`Updated ${count} files.`);
