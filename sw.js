const CACHE='spike-store-v1';
const APP=['./','index.html','style.css','polish.css','app.js','polish-products.js','manifest.webmanifest','assets/logo-ai.webp'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request))));
