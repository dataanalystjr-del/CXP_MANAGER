const CACHE_NAME = 'cxp-manager-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  clients.claim();
});

// Solo dejamos pasar las peticiones de red (no cacheamos nada)
// porque tu app vive dentro de un iframe de Apps Script
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
