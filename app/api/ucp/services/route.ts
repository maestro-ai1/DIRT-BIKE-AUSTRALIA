import { NextResponse } from 'next/server';
import { SITE, CONTACT } from '@/src/config/site';

export async function GET() {
  return NextResponse.json(
    {
      ucp: '1.0',
      protocol_version: '1.0',
      services: [
        {
          id: 'product-catalog',
          type: 'catalog',
          url: `https://${SITE.domain}/shop/`,
          description: 'Electric Dirt Bike Australia Full Catalog',
        },
        {
          id: 'mcp-server',
          type: 'mcp',
          url: `https://${SITE.domain}/api/mcp`,
          description: 'MCP Streamable HTTP server',
        },
        {
          id: 'order',
          type: 'commerce',
          url: `https://${SITE.domain}/shop/`,
          description: 'Place orders via website or WhatsApp',
        },
      ],
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
