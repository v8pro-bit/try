const fs = require('fs');
const path = require('path');

// Read the template and matches
const template = fs.readFileSync('template.html', 'utf8');
const matches = JSON.parse(fs.readFileSync('matches.json', 'utf8'));

// Loop through each match
matches.forEach((match, index) => {
  const title = `${match.team1} vs ${match.team2} – Live Stream`;
  const iframeUrl = match.iframe;

  const filled = template
    .replace('%%TITLE%%', title)
    .replace('%%IFRAME%%', iframeUrl);

  const filename = `match${index + 1}.html`;
  fs.writeFileSync(path.join(__dirname, filename), filled, 'utf8');
  console.log(`✅ Created ${filename}`);
});
