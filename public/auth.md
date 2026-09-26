# Auth.md

## Site: Electric Dirt Bike Australia — High-Performance Electric Moto

## Agent Registration
No authentication required. All catalog, search, and informational resources are publicly accessible.

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

## Authentication

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering
Human-in-the-loop required. Agents may browse the catalog, inspect vehicle specs, and prepare pre-filled order drafts via the MCP `create_order_draft` tool. Final payments and freight dispatch agreements are completed by a human rider via the website checkout or WhatsApp rider helpline.
