// Thin-page scan: word count of every blog post (live), sorted ascending. usage: node scripts/audit/thin-posts.cjs [min=1500]
const B = 'https://electricdirtbikeaustralia.com.au';
const min = +process.argv[2] || 1500;
(async () => {
  const sm = await (await fetch(B + '/sitemap.xml')).text();
  const urls = [...sm.matchAll(/<loc>([^<]*\/blog\/[^<]+)<\/loc>/g)].map((m) => m[1]);
  const rows = []; let i = 0;
  const w = async () => { while (i < urls.length) { const u = urls[i++]; const h = await (await fetch(u)).text();
    const m = h.match(/<main[\s\S]*<\/main>/) || [h];
    const t = m[0].replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
    rows.push({ slug: u.replace(B + '/blog/', '').replace(/\/$/, ''), words: t.split(' ').length }); } };
  await Promise.all(Array.from({ length: 8 }, w));
  rows.sort((a, b) => a.words - b.words);
  const thin = rows.filter((r) => r.words < min);
  console.log('posts', rows.length, 'thin(<' + min + ')', thin.length);
  thin.forEach((r) => console.log(String(r.words).padStart(5), r.slug));
  require('fs').writeFileSync(process.env.TEMP + '/thin-posts.json', JSON.stringify(rows, null, 1));
})();
