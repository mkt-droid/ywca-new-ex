const fs = require('fs');
const path = require('path');

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
  'src/app/membership-and-programs/international-womens-day/page.jsx',
  'src/app/membership-and-programs/members-picnic/page.jsx',
  'src/app/membership-and-programs/mothers-day/page.jsx',
  'src/app/membership-and-programs/world-environment-day/page.jsx',
  'src/app/public-affairs-and-social-issues/rights-resistance-freedom/page.jsx',
  'src/app/public-affairs-and-social-issues/world-environment-day-celebration-2026/page.jsx',
  'src/app/religious-education-committee/lenten-prayer-meeting-2026/page.jsx',
  'src/app/religious-education-committee/world-day-of-prayer-2026/page.jsx',
  'src/app/youth-department/inter-school-debate/page.jsx',
  'src/app/youth-department/thrive-music-festival/page.jsx',
  'src/app/education-institute/admission/page.js',
  'src/app/education-institute/contact/page.js'
];

let count = 0;
for (let f of files) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    const bannerMatch = content.match(/(<(SideNavBanner|InnerPageBanner|HeroBanner|HistoryBanner|Banner)[\s\S]*?(?:\/>|<\/\2>)\s*)/);
    if (bannerMatch) {
      const bannerEndIndex = bannerMatch.index + bannerMatch[0].length;
      const mainEndIndex = content.lastIndexOf('</main>');
      if (mainEndIndex > bannerEndIndex) {
        let innerContent = content.substring(bannerEndIndex, mainEndIndex);
        
        // If not already wrapped in pageContentWrapper
        if (!innerContent.includes('pageContentWrapper')) {
          innerContent = `\n      <div className="pageContentWrapper">\n${innerContent}\n      </div>\n`;
          content = content.substring(0, bannerEndIndex) + innerContent + content.substring(mainEndIndex);
          fs.writeFileSync(f, content, 'utf8');
          console.log("Wrapped " + f);
          count++;
        }
      }
    }
  }
}
console.log(`Wrapped ${count} files.`);
