// const FILES_TO_CACHE = ['/index.html', '/app.js', '/images/*'];
const FILES_TO_CACHE = ['/*.thml'];
const CACHE_NAME = 'inol_cache-v1';

/**
 * TODO
 * fetch에서 계속 pending 되는 애가 있으면 skipWaiting이 안먹는다.
 * 캐쉬 할 파일 리스트 정리해서, 그 외에 것들은 network에서 fetch하도록 변경
 */

self.addEventListener('install', function(event) {
    //이전 버전의 Service Worker가 동작하고 있어서 새 버전이 Waiting 상태에 들어가는 것을 방지
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (CACHE_NAME !== key) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    //처음 설치되고 Activate 상태가 되도 페이지를 다시 load할 때 까지 fetch 등의 이벤트를 받지 않는 것이 default다.
    //바로 이벤트를 수신하기 위함22333
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    const pathname = url.pathname;

    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Cache hit - return response
            if (response) {
                console.log('[ServiceWorker] Cache hit: ' + event.request.url);
                return response;
            }

            return fetch(event.request, {
                credentials: 'include',
            })
                .then(function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    let responseToCache = response.clone();

                    caches.open(CACHE_NAME).then(function(cache) {
                        console.log('[ServiceWorker] Cache put: ' + event.request.url);
                        cache.put(pathname, responseToCache);
                    });

                    return response;
                })
                .catch(function(err) {
                    if (event.request.destination !== 'document' || event.request.mode !== 'navigate') {
                        return;
                    }
                    console.error('[ServiceWorker] Network request Failed. Serving offline page ' + err);
                    //TODO: return offline page
                    // return caches.open(CACHE_NAME).then(function (cache) {
                    //     return cache.match(offlineFallbackPage);
                    // });
                });
        })
    );
});
