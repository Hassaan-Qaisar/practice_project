const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Insert dummy data for classes
  const class1 = await prisma.class.create({
    data: {
      name: "Mathematics",
      teacher: "Mr. Smith",
      classroom: "Room 101",
      description: "Introduction to Algebra",
    },
  });
  const class2 = await prisma.class.create({
    data: {
      name: "Science",
      teacher: "Ms. Johnson",
      classroom: "Room 202",
      description: "Biology Basics",
    },
  });
  const class3 = await prisma.class.create({
    data: {
      name: "English",
      teacher: "Mrs. Williams",
      classroom: "Room 303",
      description: "Literature and Composition",
    },
  });
  const class4 = await prisma.class.create({
    data: {
      name: "History",
      teacher: "Mr. Brown",
      classroom: "Room 404",
      description: "World History",
    },
  });
  const class5 = await prisma.class.create({
    data: {
      name: "Computer Science",
      teacher: "Ms. Lee",
      classroom: "Room 505",
      description: "Introduction to Programming",
    },
  });

  // Insert dummy data for students
  const student1 = await prisma.student.create({
    data: {
      name: "John Doe",
      rollnumber: "001",
      age: 18,
      gender: "Male",
      email: "john.doe@example.com",
      address: "123 Main Street",
    },
  });
  const student2 = await prisma.student.create({
    data: {
      name: "Jane Smith",
      rollnumber: "002",
      age: 17,
      gender: "Female",
      email: "jane.smith@example.com",
      address: "456 Elm Street",
    },
  });
  const student3 = await prisma.student.create({
    data: {
      name: "Alice Williams",
      rollnumber: "003",
      age: 19,
      gender: "Female",
      email: "alice.williams@example.com",
      address: "789 Oak Street",
    },
  });
  const student4 = await prisma.student.create({
    data: {
      name: "David Johnson",
      rollnumber: "004",
      age: 18,
      gender: "Male",
      email: "david.johnson@example.com",
      address: "45 Maple Street",
    },
  });
  const student5 = await prisma.student.create({
    data: {
      name: "Emily Brown",
      rollnumber: "005",
      age: 17,
      gender: "Female",
      email: "emily.brown@example.com",
      address: "10 Pine Street",
    },
  });
  const student6 = await prisma.student.create({
    data: {
      name: "Michael Lee",
      rollnumber: "006",
      age: 19,
      gender: "Male",
      email: "michael.lee@example.com",
      address: "23 Elm Street",
    },
  });
  const student7 = await prisma.student.create({
    data: {
      name: "Sarah Garcia",
      rollnumber: "007",
      age: 18,
      gender: "Female",
      email: "sarah.garcia@example.com",
      address: "45 Oak Street",
    },
  });
  const student8 = await prisma.student.create({
    data: {
      name: "Daniel Hernandez",
      rollnumber: "008",
      age: 17,
      gender: "Male",
      email: "daniel.hernandez@example.com",
      address: "78 Maple Street",
    },
  });
  const student9 = await prisma.student.create({
    data: {
      name: "Olivia Jones",
      rollnumber: "009",
      age: 19,
      gender: "Female",
      email: "olivia.jones@example.com",
      address: "10 Pine Street",
    },
  });
  const student10 = await prisma.student.create({
    data: {
      name: "William Miller",
      rollnumber: "010",
      age: 18,
      gender: "Male",
      email: "william.miller@example.com",
      address: "23 Elm Street",
    },
  });
  const student11 = await prisma.student.create({
    data: {
      name: "Jennifer Davis",
      rollnumber: "011",
      age: 17,
      gender: "Female",
      email: "jennifer.davis@example.com",
      address: "45 Oak Street",
    },
  });
  const student12 = await prisma.student.create({
    data: {
      name: "Christopher Clark",
      rollnumber: "012",
      age: 19,
      gender: "Male",
      email: "christopher.clark@example.com",
      address: "78 Maple Street",
    },
  });
  const student13 = await prisma.student.create({
    data: {
      name: "Amanda Lewis",
      rollnumber: "013",
      age: 18,
      gender: "Female",
      email: "amanda.lewis@example.com",
      address: "10 Pine Street",
    },
  });
  const student14 = await prisma.student.create({
    data: {
      name: "Matthew Robinson",
      rollnumber: "014",
      age: 17,
      gender: "Male",
      email: "matthew.robinson@example.com",
      address: "23 Elm Street",
    },
  });
  const student15 = await prisma.student.create({
    data: {
      name: "Elizabeth Walker",
      rollnumber: "015",
      age: 19,
      gender: "Female",
      email: "elizabeth.walker@example.com",
      address: "45 Oak Street",
    },
  });

  // Update classes with associated students
  await prisma.class.update({
    where: { id: class1.id },
    data: {
      students: {
        connect: [
          { id: student1.id },
          { id: student2.id },
          { id: student3.id },
          { id: student4.id },
          { id: student5.id },
          { id: student6.id },
          { id: student7.id },
          { id: student8.id },
          { id: student9.id },
          { id: student10.id },
        ],
      },
    },
  });

  await prisma.class.update({
    where: { id: class2.id },
    data: {
      students: {
        connect: [
          { id: student11.id },
          { id: student12.id },
          { id: student13.id },
          { id: student14.id },
          { id: student15.id },
          { id: student1.id },
          { id: student2.id },
        ],
      },
    },
  });

  await prisma.class.update({
    where: { id: class3.id },
    data: {
      students: {
        connect: [
          { id: student3.id },
          { id: student4.id },
          { id: student5.id },
          { id: student6.id },
          { id: student7.id },
        ],
      },
    },
  });

  await prisma.class.update({
    where: { id: class4.id },
    data: {
      students: {
        connect: [
          { id: student8.id },
          { id: student9.id },
          { id: student10.id },
          { id: student11.id },
          { id: student2.id },
          { id: student3.id },
          { id: student4.id },
        ],
      },
    },
  });

  await prisma.class.update({
    where: { id: class5.id },
    data: {
      students: {
        connect: [
          { id: student12.id },
          { id: student13.id },
          { id: student14.id },
          { id: student15.id },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
