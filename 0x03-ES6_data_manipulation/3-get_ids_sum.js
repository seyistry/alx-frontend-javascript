export default function getStudentIdsSum(arr) {
  return arr.reduce((total, { id }) => total + id, 0);
}
