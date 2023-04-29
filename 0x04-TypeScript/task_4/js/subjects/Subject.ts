/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="Teacher.ts" />

// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    set setTeacher(value: Teacher) {
      this.teacher = value;
    }
  }
}
