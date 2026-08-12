// PWA廃止に伴う自己破壊Service Worker。
// 旧SW(workbox)は sw.js を消しただけでは解除されず、リピーターに古いキャッシュを配り続けるため、
// 「登録解除するだけのSW」で上書きして無効化する。
// TODO: 十分に行き渡ったら（2027年以降を目安に）このファイルごと削除する
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheKeys = await caches.keys()
      await Promise.all(cacheKeys.map((key) => caches.delete(key)))
      await self.registration.unregister()

      const windowClients = await self.clients.matchAll({ type: 'window' })
      windowClients.forEach((client) => client.navigate(client.url))
    })(),
  )
})
