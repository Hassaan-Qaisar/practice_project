const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        class: {
          select: { id: true, name: true },
        },
      },
    });

    if (students.length === 0) {
      res.status(404).json({ message: "No students found" });
    }
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Error fetching students" });
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  const studentId = req.params.id;

  try {
    const foundStudent = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (foundStudent) {
      res.json(foundStudent);
    } else {
      res.status(404).json("Student not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching student");
  }
};

module.exports = { getAllStudents, getStudentById };
