'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "22754a743f228d87d8b21011f2e245d1",
"assets/AssetManifest.bin.json": "3505dcf79e99dd2dcd18a339cf0f0a30",
"assets/AssetManifest.json": "9f57a85f3a0f95cccb251f80b7e410c4",
"assets/assets/Arimo-Bold.ttf": "38ca58b61a8e638f9cb2cfeecf0fac9e",
"assets/assets/Arimo-BoldItalic.ttf": "6ca5b080dc50aaa74c8195572df1e25f",
"assets/assets/Arimo-Italic.ttf": "aa0219d869cac1e4b2966b8f314e5379",
"assets/assets/Arimo-Medium.ttf": "916aadd4f935ccb98cd544a62f06a5ad",
"assets/assets/Arimo-MediumItalic.ttf": "a65c96ddbf1cf906343ba9efe1b74864",
"assets/assets/Arimo-Regular.ttf": "f308213411bb2ec3d44a93563cf441c0",
"assets/assets/Arimo-SemiBold.ttf": "079d8c0292da280eef26c14815a86496",
"assets/assets/Arimo-SemiBOldItalic.ttf": "a7b67b93efc33f1ffc53d532b8628cc0",
"assets/assets/aws.png": "9de1b80fd0bc51c26f367e9bbdeadf20",
"assets/assets/bearNguitar.gif": "0b03ff9e2f3c4c676fb30afacea1daaa",
"assets/assets/BungeeHairline-Regular.ttf": "afd69b3eab643db862cd298162acf778",
"assets/assets/canva.png": "1351c4af40c400838e18aff75bf9ea5d",
"assets/assets/cpp.png": "c1c5353e8ce476277f0350ff2771b423",
"assets/assets/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/figma.png": "ad64f0f4d2b1ef94ca2e7e9540cfb1fb",
"assets/assets/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/git.png": "e613372679ab303563431324b23f96f6",
"assets/assets/illustrator.png": "59249efc009b5e6b72725e0477655da3",
"assets/assets/java.png": "8c7dd8dab5c39d6249c81fb40f05fe43",
"assets/assets/js.png": "d357d431a0dde9992a84e6649c943d58",
"assets/assets/photoshop.png": "fde7cf811ed111a44e380ce4de337a19",
"assets/assets/python.png": "162ee83dbba7afc24d8f2009c7a22dc5",
"assets/assets/react.png": "a6497109249cb373d0332a935a33a66f",
"assets/assets/resume.pdf": "db37b1fd591531833d21563ec1d85650",
"assets/assets/saad.png": "91e60ae9348a59e99ef9481726678fc7",
"assets/assets/sql.png": "4b5a07cfcb47c2fab8fcb715d5bae8da",
"assets/assets/swift.png": "6c054706cb7d9d8c21ea7abed25eda71",
"assets/assets/YujiBoku-Regular.ttf": "5d80dd391f4f95bb72667160075f6106",
"assets/FontManifest.json": "3a6dfc952e6e5576ab6b8de7f4d1c954",
"assets/fonts/MaterialIcons-Regular.otf": "9d58cf6081e058b7aa0fa8ea0a90f08d",
"assets/NOTICES": "08988293dfe8c9c4d2f45e1f0c60242b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "dc3ede975a3b5ff6906616b090952817",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59e43752dda3595b2d7d6fa5ee24d50b",
"/": "59e43752dda3595b2d7d6fa5ee24d50b",
"main.dart.js": "b05ce8f6942417c598c22602c84109c2",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "c446db400eef4472f4f8a1343df7fa2b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
