export default function updateStudentGradeByCity(arr, city, grade) {
  return arr
    .filter(({ location }) => location === city)
    .map((item) => {
      for (const value of grade) {
        if (item.id === value.studentId) {
          return { ...item, grade: value.grade };
        }
      }
      return { ...item, grade: 'N/A' };
    });
}
