const CACHE='slovak-lingua-v2-0-1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./index.html','./manifest.webmanifest','./icon.png','./icon-512.png'])));self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('slovak-lingua-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(async cached=>{if(cached)return cached;if(e.request.mode==='navigate'){const offline=await caches.match('./index.html');if(offline)return offline;}return fetch(e.request);}));});
