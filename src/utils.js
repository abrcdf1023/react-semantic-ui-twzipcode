import _findIndex from 'lodash/findIndex'

export function findDists(source, value) {
  if (!value) return []
  const { dists } = source[_findIndex(source, { city: value })]
  return dists
}

export function findPostalCode(dists, value) {
  if (dists.length === 0) return ''
  const { postalCode } = dists[_findIndex(dists, { name: value })]
  return postalCode
}
