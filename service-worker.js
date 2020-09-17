/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "961fc3ff89d9383d06e55fd38793b2eb"
  },
  {
    "url": "about/about3.html",
    "revision": "ce2157b91ae7578a1d8bf80dd200f436"
  },
  {
    "url": "about/index.html",
    "revision": "d2bb4490fbc06c753028c5c2e52a006f"
  },
  {
    "url": "about/sidebar.html",
    "revision": "4a8c5606fe81df9fa831fcebce8d77c9"
  },
  {
    "url": "about2.html",
    "revision": "fd80e066fdb1c8912c50a14c1aeb23ab"
  },
  {
    "url": "assets/css/0.styles.e0f29c9c.css",
    "revision": "66d184371db2e1e47dd41771ed0c6458"
  },
  {
    "url": "assets/img/favicon-16x16.png",
    "revision": "26fec0188b111fe4662ed868dcde8c5f"
  },
  {
    "url": "assets/img/favicon-32x32.png",
    "revision": "baf734de27fc4682792d40659dbb6f88"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/mali.jpg",
    "revision": "4dbfe58bd10afdd7a949a2983e138468"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ba105edd.js",
    "revision": "70eccf68fcde6da17a7831a9baf7f9ce"
  },
  {
    "url": "assets/js/11.27ddc011.js",
    "revision": "3dfd02972555967d7e36b813ae47da0d"
  },
  {
    "url": "assets/js/12.ad83ff98.js",
    "revision": "5e2646bb958be94d9264ad10800507d5"
  },
  {
    "url": "assets/js/13.e2af02b7.js",
    "revision": "2a28df888fe56bda6fd0427d48945482"
  },
  {
    "url": "assets/js/14.547b988c.js",
    "revision": "502d2d6c33642c2afcb2315251bc27ac"
  },
  {
    "url": "assets/js/15.fcf02289.js",
    "revision": "23022db31e365e8ca434310cf0780b14"
  },
  {
    "url": "assets/js/2.a074c494.js",
    "revision": "b739dae5fcb4e352e6caed18143f9d6a"
  },
  {
    "url": "assets/js/3.5665fd40.js",
    "revision": "c4ff822b5674fdc0a574c650975a053e"
  },
  {
    "url": "assets/js/4.963f5a2c.js",
    "revision": "191cb424384b7514df0b4b671b2ed435"
  },
  {
    "url": "assets/js/5.1ed7b868.js",
    "revision": "b77fdd367d9248cd260e6c7a6e4ab6b3"
  },
  {
    "url": "assets/js/6.b03d4228.js",
    "revision": "0145b08a0664f3ea84e55f72136e99b7"
  },
  {
    "url": "assets/js/7.606ccd8b.js",
    "revision": "53fd32a9c8ff25260b8d3114e8426529"
  },
  {
    "url": "assets/js/8.c383e6a1.js",
    "revision": "9ee41343621f73f2411b5ac6b2dea96b"
  },
  {
    "url": "assets/js/9.a9de1f2d.js",
    "revision": "288cb06338c31e245cd9c6842c046eaa"
  },
  {
    "url": "assets/js/app.c7198286.js",
    "revision": "3053b74df31b13c6e628b2e95d032305"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "b502378b0fff2f9f4390af0874fcdccf"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "34228136c5351cc707bee9e661e77bc5"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "bd499deee8c06a4995dd301c1ca78197"
  },
  {
    "url": "css/index.html",
    "revision": "e1922c7c06695aba01f171c2cb345057"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "index.html",
    "revision": "7c0a048f7ee5bfcb1b3931ad84ae7c11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
