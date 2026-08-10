const fs = require('fs');
const path = require('path');
const dir = 'g:/APP-2026/yyyyy/nextjs/yyy/src/app/membership-and-programs';
const files = [
  'associate-member-form/page.jsx',
  'electoral-member-form/page.jsx',
  'associate-renewal-form/page.jsx',
  'electoral-renewal-form/page.jsx'
];

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  
  // Replace bg-primary with standard custom background color
  content = content.replace(/className="([^"]*)bg-primary([^"]*)"/g, 'className="$1$2" style={{ backgroundColor: \\'#090b84\\' }}');
  
  // Replace btn-primary with rounded-pill and custom style for the submit buttons
  content = content.replace(/className="([^"]*)btn-primary([^"]*)"/g, 'className="$1text-white rounded-pill$2" style={{ backgroundColor: \\'#090b84\\', borderColor: \\'#090b84\\' }}');
  
  // Clean up double spaces in class names
  content = content.replace(/className="\s+/g, 'className="');
  content = content.replace(/\s+"/g, '"');
  
  fs.writeFileSync(p, content);
  console.log('Updated ' + f);
});
