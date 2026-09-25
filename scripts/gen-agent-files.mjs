// scripts/gen-agent-files.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

async function main() {
  const siteConfigModule = await import('../src/config/site.js');
  const { SITE, CONTACT, SHOP, REPLY } = siteConfigModule;
  const domain = SITE.domain;

  console.log(`[gen-agent-files] Generating agent files for ${domain}...`);

  // Verify and ensure public directories exist
  fs.mkdirSync(path.join(root, 'public', '.well-known', 'agent-skills'), { recursive: true });
  fs.mkdirSync(path.join(root, 'public', '.well-known', 'mcp'), { recursive: true });
  fs.mkdirSync(path.join(root, 'public', 'js'), { recursive: true });

  // IndexNow key file
  fs.writeFileSync(path.join(root, 'public', `${SITE.indexNowKey}.txt`), SITE.indexNowKey, 'utf8');

  console.log('[gen-agent-files] Agent-ready files verified and up to date.');
}

main().catch((err) => {
  console.error('[gen-agent-files] Error:', err);
  process.exit(1);
});
