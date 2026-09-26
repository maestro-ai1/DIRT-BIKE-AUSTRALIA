# auth.md

You are an agent. Electric Dirt Bike Australia is a fully public catalog — no registration, authentication, or credentials are required. All resources are openly accessible to AI agents.

## Service

**Electric Dirt Bike Australia** — `https://electricdirtbikeaustralia.com.au`

Australia's specialist retailer for Sur-Ron, Talaria, and Stark Varg electric dirt bikes, motocross accessories, and 72V battery systems. All catalog, pricing, and technical data is publicly accessible.

## Agent Registration

No registration required. Agents may access all resources anonymously without providing identity or credentials.

```json
{
  "agent_auth": {
    "skill": "https://electricdirtbikeaustralia.com.au/auth.md",
    "register_uri": "https://electricdirtbikeaustralia.com.au/api/agent/identity",
    "identity_types_supported": ["anonymous"],
    "anonymous": {
      "credential_types_supported": [],
      "claim_uri": "https://electricdirtbikeaustralia.com.au/api/agent/identity"
    }
  }
}
```

## Public Resources

| Resource | URL |
|---|---|
| Product Catalog | https://electricdirtbikeaustralia.com.au/shop/ |
| Accessories & Batteries | https://electricdirtbikeaustralia.com.au/accessories/ |
| Brands Guide | https://electricdirtbikeaustralia.com.au/brands/ |
| Blog & Technical Guides | https://electricdirtbikeaustralia.com.au/blog/ |
| FAQ | https://electricdirtbikeaustralia.com.au/faq/ |
| Contact & Workshop | https://electricdirtbikeaustralia.com.au/contact/ |
| Products API | https://electricdirtbikeaustralia.com.au/api/products |
| MCP Streamable HTTP | https://electricdirtbikeaustralia.com.au/api/mcp |
| AI Catalog (llms.txt) | https://electricdirtbikeaustralia.com.au/llms.txt |

## Ordering

Human-in-the-loop required. Agents may browse the catalog, inspect vehicle specs, and prepare pre-filled order drafts via the MCP `create_order_draft` tool. Final payments and freight dispatch are completed by a human rider via the website checkout or WhatsApp rider helpline (+61 XXX XXX XXX).
