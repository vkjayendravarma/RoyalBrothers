const preCacheName = "pre-cache-calc",
    preCacheFiles = [
        "/",
        "/index.html",
        "/fonts/*",
        "css/navbar.css",
        "css/style.css",
        "css/vendor.css",
        "css/bootstrap.min.css",
        "images/carosel/*",
        "js/*"       
    ];


self.addEventListener("install", event => {

    console.log("installing precache files");

    caches.open(preCacheName).then(function (cache) {

        return cache.addAll(preCacheFiles);

    });

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request).then(response => {

            if (!response) {

                //fall back to the network fetch
                return fetch(event.request);

            }

            return response;

        })

    )

});
