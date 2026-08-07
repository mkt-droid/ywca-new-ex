const fs = require('fs');

const replacements = [
  {
    file: 'src/app/community-development-programme/page.js',
    find: "<h2 className={styles.overviewTitle} style={{ maxWidth: 800, margin: '0 auto 25px' }}>We measure success in changed lives - and we can show you the numbers.</h2>",
    replace: '<h1 className="sectionTitle_1 text-center">We measure success in changed lives - and we can show you the numbers.</h1>'
  },
  {
    file: 'src/app/community-development-programme/impact/page.js',
    find: '<h1 className={styles.heroHeadline}>We measure success in changed lives - and we can show you the numbers.</h1>',
    replace: '<h1 className="sectionTitle_1 text-center">We measure success in changed lives - and we can show you the numbers.</h1>'
  },
  {
    file: 'src/app/community-development-programme/programs/page.js',
    find: "<h1 className={styles.heroHeadline} style={{ maxWidth: 800, margin: '0 auto 25px' }}>Four Pathways. One Goal: A Woman’s Independence.</h1>",
    replace: '<h1 className="sectionTitle_1 text-center">Four Pathways. One Goal: A Woman’s Independence.</h1>'
  },
  {
    file: 'src/app/community-development-programme/stories/page.js',
    find: '<h1 className={styles.heroHeadline}>These are not case studies. These are her words, her journey, her win.</h1>',
    replace: '<h1 className="sectionTitle_1 text-center">These are not case studies. These are her words, her journey, her win.</h1>'
  },
  {
    file: 'src/app/community-development-programme/about-us/page.js',
    find: "<h1 className={styles.heroHeadline} style={{ maxWidth: 800, margin: '0 auto 25px' }}>Rooted in a century of service. Focused on today’s most urgent need.</h1>",
    replace: '<h1 className="sectionTitle_1 text-center">Rooted in a century of service. Focused on today’s most urgent need.</h1>'
  },
  {
    file: 'src/app/fund-raising-publicity/page.js',
    find: '<h2 className={styles.overviewTitle}>OVERVIEW</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">OVERVIEW</h1>'
  },
  {
    file: 'src/app/membership-and-programs/page.jsx',
    find: '<h2 className={styles.overviewTitle}>Membership and Program Department</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Membership and Program Department</h1>'
  },
  {
    file: 'src/app/public-affairs-and-social-issues/page.js',
    find: '<h2 className={styles.mainHeading}>SOCIAL ENGAGEMENT & ADVOCACY</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">SOCIAL ENGAGEMENT & ADVOCACY</h1>'
  },
  {
    file: 'src/app/religious-education-committee/page.js',
    find: '<h2 className={styles.overviewTitle}>Religious Education Committee</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Religious Education Committee</h1>'
  },
  {
    file: 'src/app/shelter-homes/page.js',
    find: '<h2 className={styles.sectionHeading}>Bringing Hope To Lives</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Bringing Hope To Lives</h1>'
  },
  {
    file: 'src/app/youth-department/page.jsx',
    find: '<h2 className={styles.overviewTitle}>Youth Department</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Youth Department</h1>'
  },
  {
    file: 'src/app/day-care/page.js',
    find: '<h2 className={styles.mainTitle}>Raj Kumari Amrit Kaur Day Care Centre</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">Raj Kumari Amrit Kaur Day Care Centre</h1>'
  },
  {
    file: 'src/app/education-institute/page.js',
    find: '<h2 className={styles.sectionTitle}>About YWCA Institute</h2>',
    replace: '<h1 className="sectionTitle_1 text-center">About YWCA Institute</h1>'
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
