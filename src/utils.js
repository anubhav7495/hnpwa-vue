export function pluralize(n, verb) {
  return n + (n === 1 ? ` ${verb}` : ` ${verb}s`);
}

export function isShortUrl(url) {
  const regex = /^item\?id=\d+/i;
  return regex.test(url);
}

export function getSeedData(type) {
  if (typeof (Storage) !== 'undefined') {
    const data = sessionStorage.getItem(`/${type}`);
    return JSON.parse(data) || [];
  }
  return [];
}
