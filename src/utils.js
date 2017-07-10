export default function pluralize(n, verb) {
  return n + (n === 1 ? ` ${verb}` : ` ${verb}s`);
}
