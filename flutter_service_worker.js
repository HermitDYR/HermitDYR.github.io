'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "255abbf4b56f16cebb01d9e45d8aa938",
"assets/assets/audio/bgm.mp3": "998250b5fdd6c2ac63dc98df43fb8768",
"assets/assets/audio/bonus.mp3": "823deddcdb0396958a4f097e92aad5c7",
"assets/assets/audio/spin.mp3": "091788a3bac0a95ecf06034c79ffac6d",
"assets/assets/audio/stop.mp3": "7c57397e3839bbaf63f26f9c51840204",
"assets/assets/audio/win.mp3": "bb81be530bec88972df97509c8df98ce",
"assets/assets/images/game/balance_text.png": "6b0a2b3a1e0786720d351f96e8db77ba",
"assets/assets/images/game/bet_text.png": "01222a4969821064f554b74274c4ac49",
"assets/assets/images/game/bgm_close.png": "a5fcd6391bebc103354bfde5e17d3505",
"assets/assets/images/game/bgm_open.png": "b3a9569f077581fc73f23b36e5d9ba3b",
"assets/assets/images/game/bonus_girl_spritesheet.png": "92bdfad534dee4490227353b05062541",
"assets/assets/images/game/bonus_text.png": "28f47dcaecb25d5a126d7d09d790ec0d",
"assets/assets/images/game/dialog_button_blue.png": "5ba885f9653930494e7ee198269987a6",
"assets/assets/images/game/dialog_button_green.png": "92b923dcb12b467e12fd805a89f83569",
"assets/assets/images/game/fake_slot_bar_box_spritesheet_0.png": "a7e488677a388072f5dc82452e337f35",
"assets/assets/images/game/fake_slot_bar_box_spritesheet_1.png": "099668c9b6416bd2e5a591d00b2c24ea",
"assets/assets/images/game/fake_slot_bar_box_spritesheet_2.png": "f81fe6f81cb5741fbf06713167a81cdf",
"assets/assets/images/game/game_background.jpg": "9a3eed1e2f47da18f6161d675168dbad",
"assets/assets/images/game/game_background_mask.png": "366561ef246a68e128687a46562e5ce8",
"assets/assets/images/game/gold_bottom_bar.png": "7707c88868c2ded183671edb95aa7135",
"assets/assets/images/game/gold_frame.png": "9edff4fa6f1566e43b3d6ddd9f5c1657",
"assets/assets/images/game/gold_top_bar.png": "83b223dc64ed13ab43e3cc8f08cdada7",
"assets/assets/images/game/slot_item_normal_0.png": "e3eb2665168dad9141a182db11f28f13",
"assets/assets/images/game/slot_item_normal_1.png": "b4c606d8a3f48f11449c67fa28cf6d6c",
"assets/assets/images/game/slot_item_normal_10.png": "51697d925a7801b4d6a4b8f774e66e57",
"assets/assets/images/game/slot_item_normal_2.png": "58efb60b3b30b243ce4f4213000ec788",
"assets/assets/images/game/slot_item_normal_3.png": "0ffbf97856111623dde9f82cc6861d98",
"assets/assets/images/game/slot_item_normal_4.png": "c772280c6751ad586472d91a310efca4",
"assets/assets/images/game/slot_item_normal_5.png": "9ad014a15f5e5f475be251e634c7a53d",
"assets/assets/images/game/slot_item_normal_6.png": "3c2f48c07c9938138e8df1d6dc83328a",
"assets/assets/images/game/slot_item_normal_7.png": "3b2b8c8c3c5f556b8fb592a4133e4a12",
"assets/assets/images/game/slot_item_normal_8.png": "50089d5397467c56ee4d05782652bfc6",
"assets/assets/images/game/slot_item_normal_9.png": "c902761d4bf93358bcd613b974555bec",
"assets/assets/images/game/spin_button.png": "75878f23ce15b2333a10e445904101ec",
"assets/assets/images/game/spin_button_disabled.png": "0f2504dc9beea7db003b75ea36637990",
"assets/assets/images/game/spin_text.png": "ffb706ef8aecb24417dbfc7b72975a44",
"assets/assets/images/game/wallet_button.png": "ac3e2f6b2799d1a74df988fa6a88a1b7",
"assets/assets/images/game/win_frame.png": "42acf9319adf89e1db1e04ad90aa6b98",
"assets/assets/images/game/win_text.png": "99674253e500100d390f8646d59fb019",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3fa3b5c24ba548c8003c8e75f9e3303b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.js": "50c57f3454c39614232db7285d26ad08",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.wasm": "5e9eb24cdbae0f546c4ce4b2bb37211d",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "52a06c38e4a1fcc4849635ec2f7b8688",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "f1ae97023f124c9557f15a6c8b43bcc6",
"icons/Icon-512.png": "b3af5c54bcc869221c28caece95f1941",
"icons/Icon-maskable-192.png": "f1ae97023f124c9557f15a6c8b43bcc6",
"icons/Icon-maskable-512.png": "b3af5c54bcc869221c28caece95f1941",
"index.html": "13aa31503efe82758c5a1211555bfc73",
"/": "13aa31503efe82758c5a1211555bfc73",
"main.dart.js": "baf49d5af1cb3a5025b21737813c2813",
"manifest.json": "a94da5af0f70a70cd5eea5a56c9caa42",
"version.json": "ec5735648a12d2d84d338f7df99ec036"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
