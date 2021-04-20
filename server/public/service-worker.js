importScripts("/precache-manifest.068a45b298513048abe53028526c09e8.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

