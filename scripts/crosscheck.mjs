// scripts/crosscheck.mjs — Pre-Ship Crosscheck Validator (Exits non-zero on failure)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

let failures = 0;

function assert(condition, message, code = '') {
  if (!condition) {
    console.error(`❌ [FAIL ${code}] ${message}`);
    failures++;
  } else {
    console.log(`✅ [PASS] ${message}`);
  }
}

async function run() {
  console.log('--- STARTING WEBFORGE PRE-SHIP CROSSCHECK ---');

  const { SITE, PRODUCTS, FORMS } = await import('../src/config/site.js');

  // B1. Domain
  assert(SITE.domain && SITE.domain !== 'DOMAIN.com', 'SITE.domain is configured', 'B1');

  // B4. Strategy docs never ship in public/
  assert(!fs.existsSync(path.join(root, 'public', 'PROJECT.md')), 'PROJECT.md not in public/', 'B4');
  assert(!fs.existsSync(path.join(root, 'public', 'keyword-map.md')), 'keyword-map.md not in public/', 'B4');
  assert(!fs.existsSync(path.join(root, 'public', 'docs')), 'docs/ not in public/', 'B4');

  // B6. Mandatory Agent Files A-N
  const agentFiles = [
    'robots.txt',
    'llms.txt',
    'auth.md',
    '.well-known/api-catalog',
    '.well-known/agent-skills/index.json',
    '.well-known/mcp/server-card.json',
    '.well-known/oauth-protected-resource',
    '.well-known/oauth-authorization-server',
    '.well-known/openid-configuration',
    '.well-known/acp.json',
    '.well-known/ucp',
    'js/webmcp.js',
  ];

  for (const f of agentFiles) {
    const fullPath = path.join(root, 'public', f);
    assert(fs.existsSync(fullPath), `Agent file present: public/${f}`, 'B6');
  }

  // Auth.md check
  const authContent = fs.readFileSync(path.join(root, 'public', 'auth.md'), 'utf8');
  assert(authContent.trim().startsWith('# Auth.md'), 'auth.md starts with exactly "# Auth.md"', 'B6-AUTH');

  // UCP check
  const ucpContent = fs.readFileSync(path.join(root, 'public', '.well-known', 'ucp'), 'utf8');
  assert(ucpContent.includes('"ucp": "1.0"') || ucpContent.includes('"ucp":"1.0"'), '.well-known/ucp contains "ucp": "1.0"', 'B6-UCP');

  // Server-card live tool verification
  const serverCard = JSON.parse(fs.readFileSync(path.join(root, 'public', '.well-known', 'mcp', 'server-card.json'), 'utf8'));
  const tools = serverCard.capabilities?.tools?.map((t) => t.name) || [];
  assert(tools.includes('search_products'), 'server-card includes search_products', 'B8');
  assert(tools.includes('get_product'), 'server-card includes get_product', 'B8');
  assert(tools.includes('create_order_draft'), 'server-card includes create_order_draft', 'B8');

  // vercel.json
  assert(fs.existsSync(path.join(root, 'vercel.json')), 'vercel.json exists at root', 'DEPLOY');

  // Product counts & images
  assert(PRODUCTS.length >= 6, `At least 6 initial products present (${PRODUCTS.length} found)`, 'PRODUCTS');
  for (const p of PRODUCTS) {
    assert(p.images && p.images.length > 0, `Product ${p.slug} has valid images`, 'IMG');
  }

  console.log('--------------------------------------------');
  if (failures > 0) {
    console.error(`💥 CROSSCHECK FAILED WITH ${failures} ERRORS.`);
    process.exit(1);
  } else {
    console.log('🎉 ALL PRE-SHIP CHECKS PASSED PERFECTLY!');
  }
}

run().catch((err) => {
  console.error('Fatal crosscheck error:', err);
  process.exit(1);
});
