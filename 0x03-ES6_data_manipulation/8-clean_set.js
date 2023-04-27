export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === null) return '';
  const word = [];
  for (const item of set) {
    if (item) {
      if (item.startsWith(startString)) {
        word.push(item.slice(startString.length));
      }
    }
  }
  return word.join('-');
}
