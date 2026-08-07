const fs = require('fs');
const path = require('path');

const dirs = [
  'community-development-programme',
  'fund-raising-publicity',
  'membership-and-programs',
  'public-affairs-and-social-issues',
  'religious-education-committee',
  'shelter-homes',
  'youth-department',
  'blue-triangle',
  'day-care',
  'education-institute',
  'working-women-hostel'
];

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('page.js') || file.endsWith('page.jsx')) {
      results.push(file);
    }
  });
  return results;
}

dirs.forEach(d => {
  const dirPath = path.join(__dirname, 'src', 'app', d);
  const files = walk(dirPath);
  files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    // Simple regex to find the first h1 or h2 that might be a title
    // Skip if it's in Head or inside a Modal or Banner props
    const matches = [...content.matchAll(/<(h[12])[^>]*>([\s\S]*?)<\/\1>/g)];
    if (matches.length > 0) {
      // Try to find the one after <main> or SideNavBanner/InnerPageBanner
      let bestMatch = matches[0];
      for (let m of matches) {
        if (!m[0].includes('Modal') && !m[0].includes('Banner')) {
          bestMatch = m;
          break;
        }
      }
      console.log(`\nFile: ${f}`);
      console.log(`Title: ${bestMatch[0].trim()}`);
    }
  });
});
