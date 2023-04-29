/* eslint-disable @typescript-eslint/no-unused-vars */

type MajorCredits = number & { __type: 'MajorCredits' };
type MinorCredits = number & { __type: 'MinorCredits' };

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  return (subject1 + subject2) as MajorCredits;
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return (subject1 + subject2) as MinorCredits;
}
