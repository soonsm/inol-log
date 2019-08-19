importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.core.skipWaiting();
    workbox.core.clientsClaim();

    workbox.precaching.precacheAndRoute([
        '/app.js',
        '/index.html',
        '/favicon.ico',
        '/images/inol-128.png',
        '/images/inol-144.png',
        '/images/inol-240.png',
        '/images/inol-480.png',
        '/images/inol-512.png',
    ]);

    workbox.routing.registerRoute(
        /\.(?:css|js|html|ico|json)$/,
        /**
         * 일단 캐쉬에 있는거 주고, 그리고 network에서 캐쉬를 업데이트 해2
         * response는 빠르고, offline에서도 응답이 가능하다. (요청 때 마다 network 요청을 하긴 한다)
         */
        new workbox.strategies.StaleWhileRevalidate({
            // Use a custom cache name.
            cacheName: 'inol-cache',
        })
    );

    workbox.routing.registerRoute(
        new RegExp('/fonts/.+'),
        /**
         * 일단 캐쉬에 있는거 주고, 그리고 network에서 캐쉬를 업데이트 해
         * response는 빠르고, offline에서도 응답이 가능하다. (요청 때 마다 network 요청을 하긴 한다)
         */
        new workbox.strategies.StaleWhileRevalidate({
            // Use a custom cache name.
            cacheName: 'inol-cache',
        })
    );

    workbox.routing.registerRoute(
        // Cache image files.
        /\.(?:png|jpg|jpeg|svg|gif)$/,
        // Use the cache if it's available.
        new workbox.strategies.CacheFirst({
            // Use a custom cache name.
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache only 20 images.
                    maxEntries: 20,
                    // Cache for a maximum of a week.
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

