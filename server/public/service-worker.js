importScripts("/precache-manifest.a39d87955138686550b2313a8f9dc025.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    '/projects',
    new workbox.strategies.NetworkFirst({
      cacheName: 'romina-cache',
    }),
  );
  workbox.routing.registerRoute(
    new RegExp('/images/.*.jpg'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'images-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

