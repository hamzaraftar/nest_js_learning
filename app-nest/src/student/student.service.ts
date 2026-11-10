import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'hamza', age: 18 },
    { id: 2, name: 'ali', age: 13 },
    { id: 3, name: 'saad', age: 16 },
  ];

  getAllStudent() {
    return this.students;
  }

  getStudentById(id: number) {
    const student= this.students.find((s) => s.id === id);
    if (!student) {
      throw new NotFoundException('student not found');
    }
    return student;
  }

  //   post
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  //   PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('student not found');
    } else {
      this.students[index] = {
        id,
        name: data.name,
        age: data.age,
      };
      return this.students[index];
    }
  }

  //PATCH
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('student not found');
    }
    const deleted = this.students.splice(index, 1);
    return { message: 'Student Deleted', student: deleted[0] };
  }
}
