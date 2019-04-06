importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
    workbox.precaching.precacheAndRoute(
        [
          { url: '/index.html', revision: '1' },
        ],
        {
          directoryIndex: null,
        }
    );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}