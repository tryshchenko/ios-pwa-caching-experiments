importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
    workbox.precaching.precacheAndRoute(
        [
          '/style.css',
          { url: '/explicit.html', revision: '2' },
        ],
        {
          directoryIndex: null,
        }
    );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}