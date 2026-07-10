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
    } else if (file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
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

  // Replace font-size: 0.95rem; or font-size: .95rem;
  content = content.replace(/font-size:\s*0?\.95rem;/g, 'font-size: 1rem;');
  
  // Replace line-height: 1.6;
  content = content.replace(/line-height:\s*1\.6;/g, 'line-height: 1.5;');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    count++;
    console.log('Updated styles in:', f);
  }
});

console.log(`Successfully updated styles in ${count} files.`);
