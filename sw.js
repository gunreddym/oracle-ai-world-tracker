const CACHE_NAME = "ai-world-tracker-v4";
const APP_SHELL = ["./", "./index.html", "./styles.css?v=4", "./app.js?v=4", "./manifest.webmanifest", "./icon.svg", "./apple-touch-icon.png"];
const NETWORK_TIMEOUT_MS = 3000;

self.addEventListener("install", (event) => {
  // cache: "reload" skips the browser HTTP cache so a new version never stores stale files.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL.map((url) => new Request(url, { cache: "reload" }))))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function freshRequest(request) {
  // Navigation requests cannot be cloned with new options, so rebuild them from the URL.
  return request.mode === "navigate"
    ? new Request(request.url, { cache: "no-store" })
    : new Request(request, { cache: "no-store" });
}

function fromCache(request) {
  return caches.match(request, { ignoreSearch: request.mode === "navigate" })
    .then((cached) => cached || caches.match("./index.html"));
}

// Network first so updates appear when online. Slow conference Wi-Fi falls back to the cache after 3 seconds.
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  const network = fetch(freshRequest(request)).then((response) => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
    }
    return response;
  });

  const timeout = new Promise((resolve) => setTimeout(resolve, NETWORK_TIMEOUT_MS));
  event.respondWith(
    Promise.race([network, timeout])
      .then((response) => response || fromCache(request).then((cached) => cached || network))
      .catch(() => fromCache(request))
  );
});
