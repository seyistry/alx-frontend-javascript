export default function getStudentsByLocation(arr, location) {
  return arr.filter((item) => item.location === location);
}
