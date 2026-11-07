// Writes the deduplicated post keyword contract (src/config/post-keywords.json) from %TEMP%/postmap.json and syncs the
// primaryKeyword / secondaryKeywords fields inside src/config/posts-*.ts so there is only one version of the truth.
const fs = require('fs');
const path = require('path');
const R = path.resolve(__dirname, '../../');
const map = JSON.parse(fs.readFileSync(process.env.TEMP + '/postmap.json', 'utf8'));
const out = {};
for (const [slug, v] of Object.entries(map)) out[slug] = { primary: v.primary, secondary: v.secondary, status: v.primary && v.secondary.length >= 5 ? 'complete' : 'needs-semrush-keywords' };
fs.writeFileSync(R + '/src/config/post-keywords.json', JSON.stringify(out, null, 1));
let changed = 0;
for (const file of fs.readdirSync(R + '/src/config').filter((x) => /^posts-.*\.ts$/.test(x))) {
  const fp = R + '/src/config/' + file;
  let t = fs.readFileSync(fp, 'utf8');
  const crlf = t.includes('\r\n'); t = t.replace(/\r\n/g, '\n');
  const parts = t.split(/(?="slug": ")/);
  for (let i = 1; i < parts.length; i++) {
    const slug = (parts[i].match(/^"slug": "([^"]+)"/) || [])[1];
    const m = out[slug]; if (!m) continue;
    const before = parts[i];
    parts[i] = parts[i]
      .replace(/"primaryKeyword": "[^"]*"/, '"primaryKeyword": ' + JSON.stringify(m.primary || ''))
      .replace(/"secondaryKeywords": \[[\s\S]*?\]/, '"secondaryKeywords": ' + JSON.stringify(m.secondary, null, 2).replace(/\n/g, '\n    '));
    if (parts[i] !== before) changed++;
  }
  t = parts.join('');
  fs.writeFileSync(fp, crlf ? t.replace(/\n/g, '\r\n') : t);
}
const st = Object.values(out).reduce((a, v) => { a[v.status] = (a[v.status] || 0) + 1; return a; }, {});
console.log('post-keywords.json written | posts updated in posts-*.ts:', changed, '|', st);
