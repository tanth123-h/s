// Keep the original store and interactions; replace its two visible SVG/emoji placeholders with generated product photography.
products.find(product => product.id === 6).image = 'assets/products/product-06-ai.png';
products.find(product => product.id === 8).image = 'assets/products/product-08-ai.png';
renderProducts();
renderCatalog();
