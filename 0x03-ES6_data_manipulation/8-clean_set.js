export default function cleanSet(set, startString) {
  const word = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      word.push(item.slice(startString.length));
    }
  }
  return word.join('-');
}
