const preCacheName = "pre-cache-calc",
    preCacheFiles = [
        "/",
        "/index.html",
        "css/navbar.css",
        "css/style.css",
        "css/vendor.css",
        "css/bootstrap.min.css",
        "images/carosel/1.jpg",
        "images/carosel/1.png",
        "images/carosel/2.jpg",
        "images/carosel/2.png",
        "images/logo/logo small.png",
        "images/logo/logo.png",
        "js/bootstrap.min.js" ,
        "js/jquery.min.js",
        "js/location.js"      
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
