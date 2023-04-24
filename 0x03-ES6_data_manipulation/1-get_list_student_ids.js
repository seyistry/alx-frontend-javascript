export default function getListStudentIds(arr) {
  if (typeof arr === 'object') {
    const list = arr.map(({ id }) => id);
    return list;
  }
  return [];
}
