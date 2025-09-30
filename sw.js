self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("static").then(cache => {
        return cache.addAll([".", "index.html", "style.css", "sound1.mp3", "sound2.mp3", "sound3.mp3"]);
      })
    );
  });
  
  self.addEventListener("fetch", e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });
  