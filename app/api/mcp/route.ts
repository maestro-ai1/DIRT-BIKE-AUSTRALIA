import { NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES, SHOP, SITE, CONTACT } from '@/src/config/site';

const TOOLS = [
  {
    name: 'search_products',
    description: 'Search products by keyword, category, or max_price',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search term for name or brand' },
        category: { type: 'string', description: 'Filter by category slug' },
        max_price: { type: 'number', description: 'Maximum price in AUD' },
      },
    },
  },
  {
    name: 'get_product',
    description: 'Get full product details by slug',
    inputSchema: {
      type: 'object',
      required: ['slug'],
      properties: {
        slug: { type: 'string', description: 'Product slug' },
      },
    },
  },
  {
    name: 'list_categories',
    description: 'List all product categories',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'get_policies',
    description: 'Get shipping, payment, returns policies',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'create_order_draft',
    description: 'Create prefilled order URL. Human completes — never captures payment.',
    inputSchema: {
      type: 'object',
      required: ['items'],
      properties: {
        items: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              slug: { type: 'string' },
              qty: { type: 'number' },
            },
          },
        },
        notes: { type: 'string' },
      },
    },
  },
];

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id',
  'Content-Type': 'application/json',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET() {
  return NextResponse.json(
    {
      name: SITE.name,
      version: '1.0.0',
      transport: 'streamable-http',
      endpoint: `https://${SITE.domain}/api/mcp`,
      tools: TOOLS,
    },
    { headers: CORS_HEADERS }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, method, params } = body;

    if (method === 'initialize') {
      return NextResponse.json(
        {
          jsonrpc: '2.0',
          id,
          result: {
            protocolVersion: '2025-03-26',
            capabilities: { tools: {} },
            serverInfo: {
              name: SITE.name,
              version: '1.0.0',
            },
          },
        },
        { headers: CORS_HEADERS }
      );
    }

    if (method === 'tools/list') {
      return NextResponse.json(
        {
          jsonrpc: '2.0',
          id,
          result: { tools: TOOLS },
        },
        { headers: CORS_HEADERS }
      );
    }

    if (method === 'tools/call') {
      const toolName = params?.name;
      const args = params?.arguments || {};

      if (toolName === 'search_products') {
        let list = [...PRODUCTS];
        if (args.category) {
          list = list.filter((p) => p.category === args.category);
        }
        if (args.max_price) {
          list = list.filter((p) => p.price <= args.max_price);
        }
        if (args.query) {
          const q = args.query.toLowerCase();
          list = list.filter(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.brand.toLowerCase().includes(q) ||
              p.shortDescription.toLowerCase().includes(q)
          );
        }

        const formatted = list.map((p) => ({
          slug: p.slug,
          name: p.name,
          brand: p.brand,
          price: p.price,
          currency: SITE.currency,
          category: p.category,
          shortDescription: p.shortDescription,
          url: `https://${SITE.domain}/shop/${p.slug}/`,
        }));

        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: { content: [{ type: 'text', text: JSON.stringify(formatted) }] },
          },
          { headers: CORS_HEADERS }
        );
      }

      if (toolName === 'get_product') {
        const product = PRODUCTS.find((p) => p.slug === args.slug);
        if (!product) {
          return NextResponse.json(
            {
              jsonrpc: '2.0',
              id,
              error: { code: -32602, message: 'Product not found' },
            },
            { headers: CORS_HEADERS }
          );
        }

        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify({
                    ...product,
                    currency: SITE.currency,
                    url: `https://${SITE.domain}/shop/${product.slug}/`,
                  }),
                },
              ],
            },
          },
          { headers: CORS_HEADERS }
        );
      }

      if (toolName === 'list_categories') {
        const cats = CATEGORIES.map((c) => ({
          slug: c.slug,
          name: c.name,
          description: c.description,
          productCount: PRODUCTS.filter((p) => p.category === c.slug).length,
        }));

        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: { content: [{ type: 'text', text: JSON.stringify(cats) }] },
          },
          { headers: CORS_HEADERS }
        );
      }

      if (toolName === 'get_policies') {
        const policies = {
          shipping: `Free heavy freight on orders over $${SHOP.freeShippingThreshold} AUD across Australia. Dispatched from Mittagong NSW 2575.`,
          warranty: '12 Months Comprehensive Australian Factory Warranty.',
          paymentMethods: SHOP.paymentMethods,
          cryptoDiscount: `${SHOP.cryptoDiscount}% discount automatically applied on Crypto (BTC/USDT) and PayID checkouts.`,
        };

        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: { content: [{ type: 'text', text: JSON.stringify(policies) }] },
          },
          { headers: CORS_HEADERS }
        );
      }

      if (toolName === 'create_order_draft') {
        const items = args.items || [];
        const orderRef = `EDBA-${Math.floor(10000 + Math.random() * 89999)}`;
        const total = items.reduce((acc: number, item: { slug: string; qty?: number }) => {
          const prod = PRODUCTS.find((p) => p.slug === item.slug);
          return acc + (prod ? prod.price * (item.qty || 1) : 0);
        }, 0);

        const draft = {
          orderRef,
          total,
          currency: SITE.currency,
          checkoutUrl: `https://${SITE.domain}/shop/`,
          notes: 'Human in the loop required. Complete order on website or via WhatsApp.',
        };

        return NextResponse.json(
          {
            jsonrpc: '2.0',
            id,
            result: { content: [{ type: 'text', text: JSON.stringify(draft) }] },
          },
          { headers: CORS_HEADERS }
        );
      }

      return NextResponse.json(
        {
          jsonrpc: '2.0',
          id,
          error: { code: -32601, message: `Tool not found: ${toolName}` },
        },
        { headers: CORS_HEADERS }
      );
    }

    return NextResponse.json(
      {
        jsonrpc: '2.0',
        id: id || null,
        error: { code: -32600, message: 'Invalid Request' },
      },
      { headers: CORS_HEADERS }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      {
        jsonrpc: '2.0',
        id: null,
        error: { code: -32700, message: 'Parse error' },
      },
      { headers: CORS_HEADERS }
    );
  }
}
