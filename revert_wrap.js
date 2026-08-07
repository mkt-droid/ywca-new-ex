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
    if (content.includes('<div className="pageContentWrapper">')) {
      // Revert the exact strings that were injected
      content = content.replace(/\n\s*<div className="pageContentWrapper">\n/, '');
      content = content.replace(/\n\s*<\/div>\n(<\/[a-z]+>)?\s*<\/main>/, '\n$1</main>');
      // Note: the second replacement needs to be careful about extra tags before main if any, but `wrap_everything.js` replaced exactly before </main>.
      content = content.replace(/\n\s*<\/div>\n\s*<\/main>/, '\n      </main>');
      fs.writeFileSync(f, content, 'utf8');
      console.log('Reverted ' + f);
    }
  }
}
