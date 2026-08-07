const fs = require('fs');

const replacements = [
  {
    file: 'src/app/fund-raising-publicity/donate/page.js',
    find: '<h1 className={styles.pageTitle}>DONATE US</h1>',
    replace: '<h1 className="sectionTitle_1 text-center">DONATE US</h1>'
  },
  {
    file: 'src/app/fund-raising-publicity/eco-justice-lab/page.js',
    find: '<h2 className={styles.sectionTitle}>ECO- JUSTICE LAB</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">ECO- JUSTICE LAB</h1>'
  },
  {
    file: 'src/app/fund-raising-publicity/events-and-announcements/page.js',
    find: '<h2 className={styles.pageTitle}>EVENTS AND ANNOUNCEMENTS</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">EVENTS AND ANNOUNCEMENTS</h1>'
  },
  {
    file: 'src/app/fund-raising-publicity/support-a-cause/page.js',
    find: '<h2 className={styles.sectionTitle}>SUPPORT A CAUSE</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">SUPPORT A CAUSE</h1>'
  },
  {
    file: 'src/app/fund-raising-publicity/the-rehome-store/page.js',
    find: '<h2 className={styles.sectionTitle}>THE REHOME STORE</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">THE REHOME STORE</h1>'
  },
  {
    file: 'src/app/fund-raising-publicity/volunteer-and-partnership/page.js',
    find: '<h2 className={styles.pageTitle}>VOLUNTEER & PARTNERSHIP</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">VOLUNTEER & PARTNERSHIP</h1>'
  },
  {
    file: 'src/app/membership-and-programs/international-womens-day/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>International Women’s Day Celebration & Adamya Nari Samman</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">International Women’s Day Celebration & Adamya Nari Samman</h1>'
  },
  {
    file: 'src/app/membership-and-programs/members-picnic/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>Members’ Picnic - Lodhi Garden</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Members’ Picnic - Lodhi Garden</h1>'
  },
  {
    file: 'src/app/membership-and-programs/mothers-day/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>Mother’s Day Celebration 2026</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Mother’s Day Celebration 2026</h1>'
  },
  {
    file: 'src/app/membership-and-programs/world-environment-day/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>World Environment Day Celebration 2026</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">World Environment Day Celebration 2026</h1>'
  },
  {
    file: 'src/app/public-affairs-and-social-issues/rights-resistance-freedom/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>Rights • Resistance • Freedom</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Rights • Resistance • Freedom</h1>'
  },
  {
    file: 'src/app/public-affairs-and-social-issues/world-environment-day-celebration-2026/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>World Environment Day Celebration 2026</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">World Environment Day Celebration 2026</h1>'
  },
  {
    file: 'src/app/religious-education-committee/lenten-prayer-meeting-2026/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>Lenten Prayer Meeting 2026</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Lenten Prayer Meeting 2026</h1>'
  },
  {
    file: 'src/app/religious-education-committee/world-day-of-prayer-2026/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>World Day of Prayer 2026</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">World Day of Prayer 2026</h1>'
  },
  {
    file: 'src/app/youth-department/inter-school-debate/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>Inter-School Debate Competition 2026</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Inter-School Debate Competition 2026</h1>'
  },
  {
    file: 'src/app/youth-department/thrive-music-festival/page.jsx',
    find: '<h2 className={styles.innerPageTitle}>Thrive Music Festival 2026</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Thrive Music Festival 2026</h1>'
  },
  {
    file: 'src/app/education-institute/admission/page.js',
    find: '<h2 className={styles.heading}>Admission enquiry</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Admission enquiry</h1>'
  },
  {
    file: 'src/app/education-institute/contact/page.js',
    find: '<h2 className={styles.heading}>Contact YWCA Institute</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Contact YWCA Institute</h1>'
  }
];

let count = 0;
for (let r of replacements) {
  if (fs.existsSync(r.file)) {
    let content = fs.readFileSync(r.file, 'utf8');
    if (content.includes(r.find)) {
      content = content.replace(r.find, r.replace);
      fs.writeFileSync(r.file, content, 'utf8');
      console.log(`Updated ${r.file}`);
      count++;
    } else {
      console.log(`String not found in ${r.file}`);
    }
  } else {
    console.log(`File not found: ${r.file}`);
  }
}
console.log(`Updated ${count} files.`);
