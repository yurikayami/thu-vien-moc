// Public assets also work when the site is hosted beneath a repository path.
export function publicAsset(path) {
  const asset = typeof path === 'string' && path ? path : '/art/book-fallback.svg'
  return asset.startsWith('/art/')
    ? `${import.meta.env.BASE_URL}${asset.slice(1)}`
    : asset
}
