const fs = require("fs");

const matches = JSON.parse(fs.readFileSync("matches.json", "utf-8"));
const template = fs.readFileSync("template.html", "utf-8");

if (!fs.existsSync("matches")) fs.mkdirSync("matches");

matches.forEach(match => {
  const slug = `${match.team1.toLowerCase().replace(/ /g, "-")}-vs-${match.team2.toLowerCase().replace(/ /g, "-")}`;
  const fileName = `matches/${slug}.html`;

  const filledTemplate = template
    .replace(/%%TITLE%%/g, `${match.team1} vs ${match.team2}`)
    .replace(/%%IFRAME%%/g, match.link);

  fs.writeFileSync(fileName, filledTemplate);
  console.log(`✅ Created: ${fileName}`);
});
