export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const list = arr.map(({ id }) => id);
    return list;
  }
  return [];
}
