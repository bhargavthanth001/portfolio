'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5f26826d56821573bd9775448295ce5c",
".git/config": "b05f356152ed3725b2c48c7802976ffc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b781782e0f54475237f801dd7e7434b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dfa466d02e8f7eec55d78d7526f93166",
".git/logs/refs/heads/main": "dfa466d02e8f7eec55d78d7526f93166",
".git/logs/refs/remotes/origin/main": "4e5aaa66739c225c8073cfb2e7ae21ac",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/0f5a86b9a46b179bf3f0a29895202b2407a03d": "d7784015a1f512b3caeba7c2ab3ebfbb",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0c/f8b15b883fd892643cf6860d168b3832b4e4e9": "9a4109d0c836e35508d1108471e00c6d",
".git/objects/0e/e155f58cd341b00f2ee2e712fa5cb7d1f2d1d7": "660a6ca40c66238cae8791a15d358222",
".git/objects/12/63992c062677ce6f682e46cd9d63a05a8f1bbd": "11f501e22ea9e499baaa604176949dca",
".git/objects/14/2a96a15f023e83a767bfbc1bb19ce9013a3f82": "02dc333389d5a7e2a434fe62b8bda22a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/904528a49d1f5b0f6dd256983e95861f22dec4": "565813e4f973e068ebe29b713cbed770",
".git/objects/2e/7a0289d678a1c9311c66262a7690248c0f7a40": "acf0b48daef90b1511c0f728014da47b",
".git/objects/2f/ba8b8c3ec5ff9097ecded796fde202f8dc431f": "708d3a9db01ff47a41a674cd0141be3d",
".git/objects/36/07db5b1e7fcb8bd672c549dba3f74c2d1c5a47": "a2ffceed064527ec8d3d4e2866b09503",
".git/objects/3c/10441482bc605ac77b4255d0f51069a7c0a40a": "c87e563e777807cd38286d0347426d53",
".git/objects/44/d4b25856f9de67999a81df0e979b739344c410": "aee9609aa11c7b637e45ddeb08912621",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/48/af416158aa25244960582d7b19601a66c9e6db": "3f281d22a6e735fafe7755caa8c39586",
".git/objects/49/e008fca7261b583e935744fb8de351ad3aad38": "3706271e69b2200a0d4f7d1fd44d3b05",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/4eb7ab61245d16ad01a0ab426b88378bafb43e": "5fbefecaa3ebd5b8f9868f71c3a74b55",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/2ce9e45d95e0cf93127cc0505e6b4b8198477c": "8613bf3074c5831fc2d75cca2a43c99c",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/76d5fe29b4425b953827595c9d2240437bdeec": "12d01ebf1239f975cd2ec6a938988630",
".git/objects/54/f4ef6f5cc57a47bb7da0399b935613fba20681": "8370e28d4b57efd11432cac54bb58907",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/046152fc490e002808df36f4f30e71ea839f44": "3309d759e59670fbbb2f506aeebdb486",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/61/52f3bfcf75d2c916c75e7931bc1ed31e040014": "bf93d15ee74f0c094967e130a0d50be9",
".git/objects/68/2578333b68e181df15d06cf4cf1e87af865f78": "92d8b69c7784a53bfa4f78fe6ddd37e2",
".git/objects/6b/45fd7fcd81d4421512bd788612f8219368db40": "5a88f9cd4b0641c7f330acfb6ea492d7",
".git/objects/6e/23e8ac68ab3804caeff2e30c7fdc0980c18684": "77bf9d5e0e522cb4eb6e11633152d462",
".git/objects/6f/35a876100e79b3177c51c4b0949a7a8921e656": "dabde3590562a061c74d72408e9e2f18",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/9d81b9a4b1c8dd7fd04f11c0788509b7c6b0cf": "b5099e41452b28adef65ab81bc77c6eb",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/79/a4dbbc197036f0177cf011e9a5bbe260a91774": "23c9efeaaff85564fbd0c84e2fcb6fbe",
".git/objects/83/e6f3a57d82b14a0e0675ccddd7d0fc798b10f7": "aad86a689798f3a92d727640f5d78b5f",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/90/ced3403c525ae9643abfc9cf1dee16103e6627": "3ccc17f1a81f640bf25c3b7fff9df5bd",
".git/objects/94/7ba0c911ee728e9b11971c8c9e05ebeab00364": "00c10e55a583798c1494e73d89ba9c3a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/97/bc78d062df5611684606900e930a49277726e8": "ca1983639525dbe8f02c5bbd227ad78f",
".git/objects/9a/04a8c43da8709e2b18123dacbb0c937ae532c3": "4315061a39d635dead8cacabcac1831f",
".git/objects/9a/826a5d83bf7fbc966450a3d1106b3c230a3ef8": "222eacb027f7102829df62c4056e25b6",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a3/f3a0d2ab66dcc9c71c6a908769b9aefa0b5964": "611cb39947586b4ef3d426179a70dc26",
".git/objects/a7/1d5f558df324a70aa7d75ae8bdb1cc047e1561": "716ced2d21e439cfe13793ee5434dd53",
".git/objects/ac/9128ebd09edba1c5a7adffdf36f2f0934d5b16": "d63703e24874daecff08059be8dd1215",
".git/objects/ae/fbe7bb237decf3d05281e9e83266cbf5f5aaf7": "34d30b5f8d706cb0eef5f6369a1f16b7",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/fae1589fe056dad7a819897a92b7ca7dd29086": "c15e8d372225919eaee785c507f60f1c",
".git/objects/b4/0a2b7be4b7cebf33d16243ac97b46186ca117e": "546e56391158605c72c41725ec71c395",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/bc/4d24a7a650f450d25154348ee9eb6938982635": "cc00f817a1b8896663f5bd09a2098f20",
".git/objects/bf/0fd648b57439879505256d3ea5c858191398d7": "2a1b0103ef9e8f8493b6fe9ccf0d60fc",
".git/objects/c1/2a3755ded02635531a84ae180aa6f006f1664d": "aeb481e8da88616a82e6202c88f7189f",
".git/objects/c2/89621b3b5d6eae189ac880bddf28926f08e7be": "6a9524ed063bd7a6bfd8cb09884d84ae",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/0fe7b52d706e66fc96984f04ab963115d799bb": "16274efce6dc85373f86fb4da47500ce",
".git/objects/c7/86fd98a486fdde793e038d2ef2143050194d7e": "7faa03c003ad91ebac1dc2e8bf91baa3",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/c8/8d8e9165a245403570c1de2fe67e5e497a6bc7": "804773d6886f9b556902cf0985997e35",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/cf/d610fd4d903dab88b7b37aae890c73a09914c5": "8778a4fdf2923e037c621e113b64ebdb",
".git/objects/d3/481c28c61856aae7b02c13c437d5b518d912d0": "7128b4d3015aa6adb547b1a21f8e0cdf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/84c0d2c211db659ceae9f108649f37d6eeeb30": "c215dbbcda11ff4c70cfb4eed524df38",
".git/objects/d6/818f29fb86ddf302b02a5e5d8081a1006440c1": "9dac2e2502f0536f7f28379f2c192485",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dd/7536c9ce1f79a4278ff2ec89ca5f82cf207a73": "59ea2f3a5d403046de263513babf565d",
".git/objects/e0/14ae6bcf3eb624fff4c78c339d98838e15bab9": "fb82a2b4d3ec648d2ef1f5d60d682bd1",
".git/objects/e0/dd3b6860f4f18177d26226e7720cbff2334d81": "5b826038a722f0a6b03da4545edbc841",
".git/objects/e2/cd985a480c0a77cbb6c94698a42b43da2245ef": "8d52a46c58edb9e5d68c2229067774dd",
".git/objects/e2/ddf89476433e4dc53e3846f39c7a5fdaa30f38": "b5de601580f7c537e35ba620b79440ad",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/7aa6cb35985f1aa062e0a34eeb4d9615e06dc3": "fb025dd5427f8095967291090d644fa6",
".git/objects/f1/945bcbb8b638a2c81f6cd5dbf0e50e8bce70c8": "07dd1b28fd7c558ec5d13a36b5a71d93",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/refs/heads/main": "fe69d73b2d4a81b6654e0d59be97746c",
".git/refs/remotes/origin/main": "fe69d73b2d4a81b6654e0d59be97746c",
"assets/AssetManifest.bin": "ba0cbde651cb7521f61e704602f7d332",
"assets/AssetManifest.bin.json": "f8cdc0cc870b3719256217e022d84ee3",
"assets/AssetManifest.json": "919e0fdd89c68575fe227b82bcf0136f",
"assets/assets/Bhargav_CV.pdf": "e9bcb15d59e6ac0206264f713f6f63cb",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/back-end.png": "29008b7788944a9da5cf43719ba55de5",
"assets/assets/images/chat-app.jpg": "14c1de31f32adef5b2d93603c0aa4ba2",
"assets/assets/images/dart.png": "4f793ba8bafd63d3608756d592ba829d",
"assets/assets/images/dev_img.png": "9c8771390edaf884d9191af140cd0b20",
"assets/assets/images/firebase.png": "65841170f36a8ee9ca18c55d8feaf317",
"assets/assets/images/flutter.png": "5c7b59a5e897ee3266cb5d39f771fbbc",
"assets/assets/images/front-end.png": "88be1a856239e610381bff9f4d4c39b0",
"assets/assets/images/home-service.jpg": "47cfecb76d3805b532875410f9e4667f",
"assets/assets/images/my_sql.png": "af380a90c049ef84b9ad8b8246a0f036",
"assets/assets/images/nft.jpg": "2c32490779346b217e526119de0dc57a",
"assets/assets/images/note.jpg": "bba8f12f969631234dd3660cf2b00ce0",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/profile.jpg": "2da34a6e16d8fa7a38ded5389fb700e9",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/safe-lock.jpg": "a43aed6b64d291e9ac337c0d7779a8ab",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/tic-tac-toe.jpg": "cb173dbb68efd1a9baa81575249ad79a",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/fonts/MaterialIcons-Regular.otf": "7809869ac262e1e7db103e68aaad8e98",
"assets/NOTICES": "7bad68f0d1b8c2b33178eeee92f2b6e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d55af20dd36d71c52ea866f9594d419c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "2eb38cd8cc6f7f85f8bfa8e49a4bdf25",
"icons/android-chrome-512x512.png": "3b4efe0ba448423911dfdeec466a595a",
"icons/apple-touch-icon.png": "18dd9ed88d4c6bff39e913939328bddf",
"index.html": "9a0bc796e27aa180828cbc09a223f6d5",
"/": "9a0bc796e27aa180828cbc09a223f6d5",
"logo.png": "c94171c74747ae257d132234c95ddc4d",
"main.dart.js": "40c340a1eeb32036eae1c0b449428d21",
"manifest.json": "f56008e8e4e7b07a00c0b5f9bdb3261b",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
