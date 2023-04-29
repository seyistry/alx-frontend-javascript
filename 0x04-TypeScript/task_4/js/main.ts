/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/triple-slash-reference */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />

export const cTeacher: Subjects.Teacher = {
  firstName: 'Troy',
  lastName: 'Oneal',
  experienceTeachingC: 10,
};

export const cpp = new Subjects.Cpp(cTeacher);
export const java = new Subjects.Java(cTeacher);
export const react = new Subjects.React(cTeacher);

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
