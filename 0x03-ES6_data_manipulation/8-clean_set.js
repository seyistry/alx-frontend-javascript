export default function cleanSet(set, startString) {
  if (startString === undefined) return '';
  if (startString.length === 0) return '';
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
