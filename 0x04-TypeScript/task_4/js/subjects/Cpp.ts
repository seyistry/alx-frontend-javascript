/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="Teacher.ts" />

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher}`;
      }
      return 'No available teacher';
    }
  }
}
