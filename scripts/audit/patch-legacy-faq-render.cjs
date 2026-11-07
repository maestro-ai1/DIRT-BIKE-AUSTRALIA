// One-off patch: legacy blog posts render their FAQs (visible H2 + H3 questions) and emit FAQPage JSON-LD.
const fs = require('fs');
const f = require('path').resolve(__dirname, '../../app/blog/[slug]/page.tsx');
let t = fs.readFileSync(f, 'utf8');
const crlf = t.includes('\r\n');
t = t.replace(/\r\n/g, '\n');
if (t.includes('legacyFaqs')) { console.log('already patched'); process.exit(0); }

t = t.replace("  const schemaData = [", "  const legacyFaqs = ((post as { faqs?: { q: string; a: string }[] }).faqs ?? []);\n  const stripLinks = (s: string) => s.replace(/\\[([^\\]]+)\\]\\([^)]+\\)/g, '$1');\n  const schemaData = [");
t = t.replace("    },\n  ];\n\n  return (\n    <div className=\"py-12 min-h-screen\">", "    },\n    ...(legacyFaqs.length\n      ? [{\n          '@context': 'https://schema.org',\n          '@type': 'FAQPage',\n          mainEntity: legacyFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripLinks(f.a) } })),\n        }]\n      : []),\n  ];\n\n  return (\n    <div className=\"py-12 min-h-screen\">");

const faqBlock = `          {legacyFaqs.length > 0 && (
            <section aria-labelledby="frequently-asked-questions" className="space-y-4 pt-4">
              <h2 id="frequently-asked-questions" className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 tracking-tight scroll-mt-28">Frequently Asked Questions</h2>
              {legacyFaqs.map((f, i) => (
                <div key={i} className="border-t border-slate-200 pt-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{f.q}</h3>
                  <p className="mt-1 text-slate-700 leading-relaxed">
                    {f.a.split(/(\\[[^\\]]+\\]\\([^)]+\\))/g).map((part, k) => {
                      const m = part.match(/^\\[([^\\]]+)\\]\\(([^)]+)\\)$/);
                      if (!m) return part;
                      const internal = m[2].startsWith('/') || m[2].includes(SITE.domain);
                      return <a key={k} href={m[2]} {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className="text-sky-600 underline hover:text-sky-800 font-medium">{m[1]}</a>;
                    })}
                  </p>
                </div>
              ))}
            </section>
          )}

`;
t = t.replace("          {/* Contextual Product Callout */}", faqBlock + "          {/* Contextual Product Callout */}");
// the table of contents also lists the FAQ section
fs.writeFileSync(f, crlf ? t.replace(/\n/g, '\r\n') : t);
console.log('patched', t.includes('legacyFaqs.map((f, i)'));
