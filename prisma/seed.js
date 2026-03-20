const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const studentData = [
  { name: "Sokha Mean", gender: "male", email: "sokha.mean@example.com" },
  { name: "Dara Chan", gender: "male", email: "dara.chan@example.com" },
  { name: "Bopha Roth", gender: "male", email: "bopha.roth@example.com" },
  { name: "Vicheka Sam", gender: "male", email: "vicheka.sam@example.com" },
  { name: "Horn tola", gender: "male", email: "tolahorn30@gmail.com" },
];

export async function addStudent() {
  for (const stu of studentData) {
    await prisma.ppStudent.create({ data: stu });
  }
}
addStudent();
