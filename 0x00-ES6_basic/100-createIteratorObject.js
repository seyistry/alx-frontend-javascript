export default function createIteratorObject(report) {
  const names = [];
  for (const i of Object.keys(report.allEmployees)) {
    names.push(...report.allEmployees[i]);
  }
  return names;
}
