// Keep the original store and interactions; replace its two visible SVG/emoji placeholders with generated product photography.
products.find(product => product.id === 6).image = 'assets/products/product-06-ai.png';
products.find(product => product.id === 8).image = 'assets/products/product-08-ai.png';
products.find(product => product.id === 12).image = 'assets/products/product-12-ai.png';
products.find(product => product.id === 13).image = 'assets/products/product-13-ai.png';
products.find(product => product.id === 14).image = 'assets/products/product-14-ai.png';
products.find(product => product.id === 15).image = 'assets/products/product-11.webp';
products.find(product => product.id === 16).image = 'assets/products/product-09.webp';
renderProducts();
renderCatalog();
