/* eslint-disable no-undef */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const students1: Student = {
  firstName: 'Aliyah',
  lastName: 'simpson',
  age: 21,
  location: 'New York',
};

const students2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  location: 'London',
};

const studentsList: Array<Student> = [students1, students2];
console.log(studentsList);

const table = document.createElement('table');

for (const row of studentsList) {
  table.insertRow();
  for (const [key, value] of Object.entries(row)) {
    if (key === 'firstName' || key === 'location') {
      const newCell = table.rows[table.rows.length - 1].insertCell();
      newCell.textContent = value;
    }
  }
}

document.body.appendChild(table);
