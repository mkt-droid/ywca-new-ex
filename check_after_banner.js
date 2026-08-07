const fs = require('fs');

const files = [
  'src/app/community-development-programme/page.js',
  'src/app/community-development-programme/impact/page.js',
  'src/app/community-development-programme/programs/page.js',
  'src/app/community-development-programme/stories/page.js',
  'src/app/community-development-programme/about-us/page.js',
  'src/app/fund-raising-publicity/page.js',
  'src/app/membership-and-programs/page.jsx',
  'src/app/public-affairs-and-social-issues/page.js',
  'src/app/religious-education-committee/page.js',
  'src/app/shelter-homes/page.js',
  'src/app/youth-department/page.jsx',
  'src/app/day-care/page.js',
  'src/app/education-institute/page.js',
  'src/app/fund-raising-publicity/donate/page.js',
  'src/app/fund-raising-publicity/eco-justice-lab/page.js',
  'src/app/fund-raising-publicity/events-and-announcements/page.js',
  'src/app/fund-raising-publicity/support-a-cause/page.js',
  'src/app/fund-raising-publicity/the-rehome-store/page.js',
  'src/app/fund-raising-publicity/volunteer-and-partnership/page.js',
  'src/app/education-institute/admission/page.js',
  'src/app/education-institute/contact/page.js'
];

for (let f of files) {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const regex = /(<(SideNavBanner|InnerPageBanner|HeroBanner|HistoryBanner|Banner)[\s\S]*?(?:\/>|<\/\2>)\s*)([\s\S]*?)(<\/main>)/;
    const match = content.match(regex);
    if (match) {
      const rest = match[3].trim();
      const firstLine = rest.split('\n')[0].trim();
      console.log(`${f}:\n  First line after banner: ${firstLine}`);
    } else {
      console.log(`${f}: NO BANNER MATCH`);
    }
  }
}
