export function pluralize(n, verb) {
  return n + (n === 1 ? ` ${verb}` : ` ${verb}s`);
}

export function isShortUrl(url) {
  const regex = /^item\?id=\d+/i;
  return regex.test(url);
}
