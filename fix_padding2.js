const fs = require('fs');
const path = require('path');

// 1. Revert community-development-programme from 50px back to 80px
const cdpDir = path.join(__dirname, 'src', 'app', 'community-development-programme');
function walk(directory) {
  let results = [];
  if (!fs.existsSync(directory)) return results;
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

const cdpFiles = walk(cdpDir);
cdpFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('padding: 50px 0;')) {
    content = content.replace(/padding:\s*50px\s+0;/g, 'padding: 80px 0;');
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Reverted padding in ${f}`);
  }
});

// 2. Add padding 50px 0 to .pageContentWrapper and remove from .sectionPadding
const appDir = path.join(__dirname, 'src', 'app');
const allCssFiles = walk(appDir);

allCssFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Add to .pageContentWrapper
  if (content.includes('.pageContentWrapper {')) {
    if (!content.includes('padding: 50px 0;') && !content.match(/\.pageContentWrapper\s*{[^}]*padding:[^}]*}/)) {
      content = content.replace(/\.pageContentWrapper\s*{/, '.pageContentWrapper {\n  padding: 50px 0;');
      changed = true;
    }
  }

  // Remove padding from .sectionPadding
  if (content.includes('.sectionPadding {') && content.match(/\.sectionPadding\s*{[^}]*padding:[^}]*}/)) {
    content = content.replace(/(\.sectionPadding\s*{[^}]*)(padding:\s*[^;]+;\s*)([^}]*})/, '$1$3');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated wrappers/paddings in ${f}`);
  }
});
