'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "63c70d3ff92d95c38f37368eb372c92f",
"index.html": "d23a86fc53086f1242a266504674c496",
"/": "d23a86fc53086f1242a266504674c496",
"main.dart.js": "58ef25e36d4a9bd5ad0ff79f3bb7be03",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/favicon-16x16.png": "7e72f9e3fd8830a5c0b762bd352206d4",
"icons/favicon.ico": "fa9251ce36564173b973e34f7b89f095",
"icons/android-chrome-192x192.png": "a74554a77bd4b32304a9f13469e22831",
"icons/apple-touch-icon.png": "d7fc431c3299ad8c8563c080d7c7a5b0",
"icons/android-chrome-512x512.png": "9103cd9ca5a799d66f40ad6ec4707a26",
"icons/Icon-512.png": "400aa2337d41ad3a5091672e2a5e2393",
"icons/favicon-32x32.png": "3a2789d8f2bb950f96a5405d0589bdd2",
"assets/AssetManifest.json": "8c4d71de95b7b08b532bc5b1bbab83e8",
"assets/NOTICES": "956646102c433476750b3c8a91ecac54",
"assets/FontManifest.json": "0f6f8eca1e9845d2cdf4396e0562745f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "25b178e7174ddfff04e9093043197448",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/arrow_circle_left.png": "fdca27c04121880cc2aca7c19a8ae2c6",
"assets/assets/images/places_demo.png": "318437e29cb3010de98b3f202f408a26",
"assets/assets/images/gifts_demo.png": "a8b6465388b5303f271e0fe10d3b3b65",
"assets/assets/images/contractors_demo.png": "53fc8acb608e600cd92ba58b22fcb198",
"assets/assets/images/guests_demo.png": "d22018641ae5cd0bd311f0de21decb23",
"assets/assets/images/text_logo.png": "4a05c5f7d206a55a17eb71a019ef93bf",
"assets/assets/images/chat_demo.png": "156357945c3cff16c87662035d09dba1",
"assets/assets/images/iphone_app_demo.png": "d42efcd4921ace3187df3054544b2d68",
"assets/assets/images/ua_flag.png": "c8eda8d12b2f0957b9eb188d44e72f16",
"assets/assets/images/chips_heap.png": "deda79225fc82ef5202bddf7862a9094",
"assets/assets/images/menu_demo.png": "87108f1174d2f10ef3f70a4679eed6a2",
"assets/assets/images/arrow_circle_right.png": "81fc4a3b4ad43e18fd0722f0fb87c8d1",
"assets/assets/images/chips_heap_mobile.png": "a4f29fff38f5f4b9458e50512d08bff4",
"assets/assets/images/invitation_demo.png": "3ecc183c414ee6af190ef191a3a85ca1",
"assets/assets/images/logo.png": "11526670c3f2d85e110c979aa2fe5f58",
"assets/assets/images/timing_demo.png": "8d1b115ca38053b9d003c31f4321ccca",
"assets/assets/images/media_demo.png": "e3aaaf902e8657da31a2dba45aaf3e84",
"assets/assets/images/file_sharing_1.png": "744a050f8446f34c8c9a97be3553774d",
"assets/assets/images/budget_demo.png": "9c2650b08694ae0ab5d2ad82efcb1fd5",
"assets/assets/images/file_sharing_2.png": "06626b1a48aa3a7d2f240ca2d6e5ab82",
"assets/assets/images/file_sharing_3.png": "f146e994e97a526c170c2c0df93cf672",
"assets/assets/images/avatar_purple_bg.png": "a0d103b1e0b293b7c4ac154d1f3c3fa1",
"assets/assets/images/arrangment_demo.png": "d4571930e65c85a341b7065cc8021569",
"assets/assets/images/todo_demo.png": "386b17d231d66103c102aaaa82e333f4",
"assets/assets/images/avatar_red_bg.png": "918f9d961c779172934e6eb53c0d2964",
"assets/assets/images/subscription_demo.png": "84a3a3f589299078e81c5ed7788ab351",
"assets/assets/images/avatar_green_bg.png": "b1b7f6783d5f43e215ab6e576cc05c13",
"assets/assets/emojis/gift_emoji.png": "d22fdb54bbc0a770784a0e57d9399bf3",
"assets/assets/emojis/mobile_emoji.png": "917b3d009c3b888f70320aca120ed632",
"assets/assets/emojis/man_cook_dark_emoji.png": "8eeed90b31a18d59a44a4f9282791e87",
"assets/assets/emojis/temp_emoji.png": "0bb21c4d2095dddefe9b8579d442d33b",
"assets/assets/emojis/movie_camera_emoji.png": "d1f836a039989bfb33b53f202885735b",
"assets/assets/emojis/woman_office_worker.png": "40f56814f486f2ddae9d485e6f2601d1",
"assets/assets/emojis/kateryna_emoji.png": "9eb9bb7e660dd048c3f4625d3abfb504",
"assets/assets/emojis/blue_hair_girl_emoji.png": "f79d2329359763bc5cccd1f6d6909935",
"assets/assets/emojis/woman_veil_emoji.png": "9110c36ab1ec1cbb09da945d92255ba9",
"assets/assets/emojis/guest_emoji.png": "95da177045088cf0784ecfbe7e6716a0",
"assets/assets/emojis/ball_emoji.png": "ee8a95e40049f20d9c055d4d531c8dcd",
"assets/assets/emojis/man_cook_emoji.png": "421e443be4b56d678093e9feac4527ca",
"assets/assets/emojis/camera_emoji.png": "d5948caa25343d31edb8bb31b4bb3506",
"assets/assets/emojis/memo_emoji.png": "38cfd1e3b31dce9bac02e1ce468d92e0",
"assets/assets/emojis/woman_construction_worker_emoji.png": "5aebe71cbad66c585692d5e24e749477",
"assets/assets/emojis/jane_emoji.png": "d07185e19abd3d8f78f8ff090ab163cb",
"assets/assets/emojis/teddy_emoji.png": "789acc5f0431e39c750073f24a58e15a",
"assets/assets/emojis/sophie_emoji.png": "f477b358613bcf95641edc41baf58ca2",
"assets/assets/emojis/folder_emoji.png": "97734b3f5095ff609e25919367ac9237",
"assets/assets/emojis/nicolas_emoji.png": "33477845290f078816a3101ee0c5adf1",
"assets/assets/emojis/woman_cook.png": "c6262fef47472cb6f2e691ee986a91fb",
"assets/assets/emojis/man_office_worker.png": "f74c4acabb202eaf7c16e1e7365d638a",
"assets/assets/emojis/konstantin_emoji.png": "cb87174f1b2fd2db9e7eeed4e26cf3b3",
"assets/assets/emojis/construction_worker_emoji.png": "e11caa9cb7f670bb77ef86345356e287",
"assets/assets/emojis/money_wings_emoji.png": "6c9b24b490d6cb231abadf9ef68bf8ab",
"assets/assets/emojis/man_in_tuxedo_emoji.png": "d66c459db3ca40af4a7755faa1c6aec6",
"assets/assets/emojis/daniil_emoji.png": "8ade77e52be952805cbbe43149d1c23b",
"assets/assets/emojis/organizer_emoji.png": "20cce418bda6baf4f9db0a9bb44574f1",
"assets/assets/emojis/alarm_emoji.png": "026c36041f43619b20c97142f8207a6c",
"assets/assets/emojis/confitty_emoji.png": "effb16bd7b3e9619fcd6286e843bc429",
"assets/assets/emojis/contractors_emoji.png": "46da4172276ee5c3e53a071aaee42053",
"assets/assets/emojis/love_letter_emoji.png": "f5f33f46f1c1127dcf632a97fd383767",
"assets/assets/emojis/man_cook_light_hair_emoji.png": "48e855b823d52cc8ce5bfa69bde69f42",
"assets/assets/emojis/dance_emoji.png": "9eddadcd182ed76bf969ba7a90161bec",
"assets/assets/emojis/gamepad_emoji.png": "bfee38cb3cf93bda363f5387b558825a",
"assets/assets/emojis/man_in_tuxedo_dark_hair_emoji.png": "ca05975760fb5dbb9d64b4e3d4a01bee",
"assets/assets/emojis/feast_emoji.png": "a0c21008de0a0512e0feb27986040a7b",
"assets/assets/emojis/wedding_emoji.png": "6a4f030aeb1fc87939c144ebe58e97f4",
"assets/assets/emojis/annie_emoji.png": "5b1cb9ffdcc0ca9f4a7d58e4a88cf1a6",
"assets/assets/emojis/cake_emoji.png": "b5f580cd73eb8fab04af143bf1e643e9",
"assets/assets/emojis/woman_veil_light_hair_emoji.png": "821c932b6e7f82cbaa1c21c734f70ac9",
"assets/assets/emojis/computer_disk_emoji.png": "12788c2d2d138a097683305cfba0482c",
"assets/assets/emojis/money_bag_emoji.png": "4201a79424f666e30880c4a84e619e83",
"assets/assets/emojis/anna_emoji.png": "c9da004d6ffd317594070f1bb000138f",
"assets/assets/emojis/cupcake_emoji.png": "838946111949e406f3fe0945d0d4bc46",
"assets/assets/fonts/EuclidFlexMedium.ttf": "7a6dbf53617d8308bee80e5d95abf233",
"assets/assets/fonts/custom_icons.ttf": "5dd99c373ed3908c61a2efd69b4efdfa",
"assets/assets/fonts/EuclidFlexSemiBold.ttf": "9e0b3dae73d1c5f03d7cf0419c461556",
"assets/assets/fonts/EuclidFlexRegular.ttf": "8feda9c5e6b2268485797e135053332a",
"assets/assets/html_data/privacy_policy_es.html": "a81b9a005fd7cc417317f769f23037d7",
"assets/assets/html_data/privacy_policy_hi.html": "61f58ef67d7ce349153917b94c995db4",
"assets/assets/html_data/privacy_policy_fr.html": "260a8d4c15dc678edb32ccc64d11ba4b",
"assets/assets/html_data/privacy_policy_pt.html": "16c20c5c7e82447d74f675a5deaa9da2",
"assets/assets/html_data/privacy_policy_en.html": "f9a051afa4f93a2e71734d500866aa3b",
"assets/assets/html_data/privacy_policy_it.html": "c9c5b81b772ff4a8cabe88eb05717caf",
"assets/assets/html_data/privacy_policy_uk.html": "df8a0dd94b851f03d7fa1829e88c587b",
"assets/assets/html_data/privacy_policy_de.html": "65008da6bf48de5284e1a1513d090e8f",
"assets/assets/html_data/privacy_policy_ja.html": "3068195c0089ebf45962b636c1d50ddf",
"assets/assets/html_data/privacy_policy_ch.html": "4ced841eac2c11dad3a51c07e084569b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
