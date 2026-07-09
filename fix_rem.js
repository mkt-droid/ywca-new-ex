const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Fix the corrupted font sizes like 1.0.95rem back to 1.1rem
  if (content.match(/(\d+)\.0\.95rem/g)) {
    content = content.replace(/(\d+)\.0\.95rem/g, '$1.1rem');
    count++;
  }

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Fixed', f);
  }
});

console.log(`Fixed corrupted rem values in ${count} files`);
