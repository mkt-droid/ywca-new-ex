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
    let changed = false;

    // Check if it has pageBackground
    if (content.includes('className={styles.pageBackground}')) {
      content = content.replace(/className=\{styles\.pageBackground\}/g, 'className={`${styles.pageBackground} pageContentWrapper`}');
      changed = true;
    }
    
    // Check if it has pageContentWrapper
    if (content.includes('className={styles.pageContentWrapper}')) {
      content = content.replace(/className=\{styles\.pageContentWrapper\}/g, 'className={`${styles.pageContentWrapper} pageContentWrapper`}');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(f, content, 'utf8');
      console.log('Safely wrapped ' + f);
    }
  }
}
