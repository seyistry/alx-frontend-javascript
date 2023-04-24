export default function hasValuesFromArray(set, arr) {
  let con = false;
  for (const i of arr) {
    if (set.has(i)) {
      con = true;
    } else {
      con = false;
      break;
    }
  }
  return con;
}
