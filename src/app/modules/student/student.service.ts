import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await Student.create(student);

  //static method
  const student = new Student(studentData); // create an instance
  if(await student.isUserExits(studentData.id)){
    throw new Error("User already exists")
  }
  const result = await student.save() // built in instance method
  return result;
};

const getAllStudentsIntoDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentIntoDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsIntoDB,
  getSingleStudentIntoDB,
};
