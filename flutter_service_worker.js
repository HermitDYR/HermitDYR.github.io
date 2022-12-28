'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5f160961965d8606f28cb774a434c6d1",
"assets/assets/audio/bgm.mp3": "998250b5fdd6c2ac63dc98df43fb8768",
"assets/assets/audio/bonus.mp3": "823deddcdb0396958a4f097e92aad5c7",
"assets/assets/audio/spin.mp3": "091788a3bac0a95ecf06034c79ffac6d",
"assets/assets/audio/stop.mp3": "7c57397e3839bbaf63f26f9c51840204",
"assets/assets/audio/win.mp3": "bb81be530bec88972df97509c8df98ce",
"assets/assets/images/game/balance_text.png": "f7ef7ae0190bc55b077273fcf6c382de",
"assets/assets/images/game/bet_text.png": "1458fee199f5cb857e5cf113bb8323b0",
"assets/assets/images/game/bgm_close.png": "a5fcd6391bebc103354bfde5e17d3505",
"assets/assets/images/game/bgm_open.png": "b3a9569f077581fc73f23b36e5d9ba3b",
"assets/assets/images/game/bonus_girl_spritesheet.png": "c1daa9d0142139b58948d261bbc38f59",
"assets/assets/images/game/bonus_text.png": "6b8a5149e9b0be1226b5c33783a92b61",
"assets/assets/images/game/dialog_button_blue.png": "5ba885f9653930494e7ee198269987a6",
"assets/assets/images/game/dialog_button_green.png": "92b923dcb12b467e12fd805a89f83569",
"assets/assets/images/game/fake_slot_bar_box_spritesheet_0.png": "bb59166ddb651bb34877e1dbdd7bbe52",
"assets/assets/images/game/fake_slot_bar_box_spritesheet_1.png": "c38d089b54d57c6ea58f5f08fa71eb99",
"assets/assets/images/game/fake_slot_bar_box_spritesheet_2.png": "87feb9efc43fdea4db119b52f97a1a2a",
"assets/assets/images/game/game_loading.jpg": "9943f98e67b507078c8b5c28ad09f795",
"assets/assets/images/game/game_loading_mask.png": "9864092e7159cff91bbb8998321b24d3",
"assets/assets/images/game/game_mask_bottom.png": "a69de048f7a36540debff1b700ea87d2",
"assets/assets/images/game/game_mask_top.png": "71f72d82f2aebc63a5cc19dd0b628f09",
"assets/assets/images/game/gold_bottom_bar.png": "2e46b3987993a649dfa202389f214a0f",
"assets/assets/images/game/gold_frame.png": "89b4f0869441ecce0137cc9821201381",
"assets/assets/images/game/gold_top_bar.png": "3ce44f34500ba72c4ba4125e4e941f27",
"assets/assets/images/game/slot_item_normal_0.png": "9852dbbdad5c051057109b02f3c3d29e",
"assets/assets/images/game/slot_item_normal_1.png": "e28a38b2c56dbd81d426dffa21c466a5",
"assets/assets/images/game/slot_item_normal_10.png": "b10f68836a265509d13440d567a6ca2b",
"assets/assets/images/game/slot_item_normal_2.png": "9b5ae1c5dea7c6310890b175551ff671",
"assets/assets/images/game/slot_item_normal_3.png": "1f32610d16a5e8a42f596ac3a3658b08",
"assets/assets/images/game/slot_item_normal_4.png": "45260e1083b590bc7436eaeb61e4e4cb",
"assets/assets/images/game/slot_item_normal_5.png": "a976463501618edfca4ee9dbaf0591a7",
"assets/assets/images/game/slot_item_normal_6.png": "58589cf3670013a679e2ee9105fe03f7",
"assets/assets/images/game/slot_item_normal_7.png": "215c115705a9e5911b9b930d1f41c4f6",
"assets/assets/images/game/slot_item_normal_8.png": "1b3352766dd755d08623bdc5f45dda6f",
"assets/assets/images/game/slot_item_normal_9.png": "d5bcb7e85801d1e2b5afa051ecb67e1b",
"assets/assets/images/game/spin_button.png": "75878f23ce15b2333a10e445904101ec",
"assets/assets/images/game/spin_button_disabled.png": "0f2504dc9beea7db003b75ea36637990",
"assets/assets/images/game/spin_text.png": "d58c525ebae96cb90c577e528968dcfc",
"assets/assets/images/game/wallet_button.png": "ac3e2f6b2799d1a74df988fa6a88a1b7",
"assets/assets/images/game/win_frame.png": "42acf9319adf89e1db1e04ad90aa6b98",
"assets/assets/images/game/win_text.png": "ebf2ccf54c2141653eb54eb6767c4f04",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "141a4691b65821045fd3b2ceca2ae2aa",
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
"index.html": "75e1c29b39461c86a98b6d7cca2c5842",
"/": "75e1c29b39461c86a98b6d7cca2c5842",
"main.dart.js": "ed4c66ac24628380fa4e51e4c21dc612",
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
