const fs = require('fs');

const files = [
  'src/app/community-development-programme/page.js',
  'src/app/community-development-programme/impact/page.js',
  'src/app/community-development-programme/programs/page.js',
  'src/app/community-development-programme/stories/page.js',
  'src/app/community-development-programme/about-us/page.js',
  'src/app/fund-raising-publicity/page.js',
  'src/app/public-affairs-and-social-issues/page.js',
  'src/app/shelter-homes/page.js',
  'src/app/day-care/page.js',
  'src/app/education-institute/page.js',
  'src/app/fund-raising-publicity/events-and-announcements/page.js',
  'src/app/fund-raising-publicity/volunteer-and-partnership/page.js',
  'src/app/education-institute/admission/page.js',
  'src/app/education-institute/contact/page.js'
];

for (let f of files) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    const openDivs = (content.match(/<div(\s|>)/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      console.log(`${f} is missing ${openDivs - closeDivs} </div> tags! Fixing...`);
      // Add missing </div> right before </main>
      let fix = '';
      for(let i=0; i < (openDivs - closeDivs); i++) {
        fix += '      </div>\n';
      }
      content = content.replace(/(<\/main>)/, `${fix}$1`);
      fs.writeFileSync(f, content, 'utf8');
    }
  }
}
