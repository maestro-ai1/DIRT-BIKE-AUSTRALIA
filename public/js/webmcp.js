(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: "search_products",
        description: "Search Electric Dirt Bike Australia products by keyword, category, or price",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string" },
            category: { type: "string" },
            max_price: { type: "number" }
          }
        },
        execute: async ({ query, category, max_price }) => {
          const params = new URLSearchParams();
          if (query) params.set('q', query);
          if (category) params.set('category', category);
          if (max_price) params.set('max_price', max_price);
          const res = await fetch(`https://electricdirtbikeaustralia.com.au/api/search?${params}`);
          return res.json();
        }
      },
      {
        name: "browse_products",
        description: "Browse products by category",
        inputSchema: {
          type: "object",
          properties: {
            category: { type: "string" }
          }
        },
        execute: async ({ category }) => {
          const url = category ? `https://electricdirtbikeaustralia.com.au/shop/?category=${category}` : `https://electricdirtbikeaustralia.com.au/shop/`;
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "order_via_whatsapp",
        description: "Initiate a WhatsApp order with Electric Dirt Bike Australia rider support. Minimum order $500 AUD.",
        inputSchema: {
          type: "object",
          properties: {
            message: { type: "string" }
          }
        },
        execute: async ({ message }) => {
          const url = message ? `https://wa.me/61420128746?text=${encodeURIComponent(message)}` : `https://wa.me/61420128746`;
          window.open(url, '_blank');
          return { url };
        }
      },
      {
        name: "contact",
        description: "Contact Electric Dirt Bike Australia workshop in Mittagong NSW 2575",
        inputSchema: {
          type: "object",
          properties: {}
        },
        execute: async () => {
          window.location.href = `https://electricdirtbikeaustralia.com.au/contact/`;
          return { url: `https://electricdirtbikeaustralia.com.au/contact/` };
        }
      }
    ]
  });
})();
