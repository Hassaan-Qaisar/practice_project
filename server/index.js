const express = require("express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());

const prisma = new PrismaClient();

// Log message when Prisma Client is instantiated
prisma
  .$connect()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Error connecting to database:", error));

// Route to get all classes
app.get("/api/classes", async (req, res) => {
  try {
    const classes = await prisma.class.findMany();
    res.json(classes);
  } catch (error) {
    console.error("Error fetching classes:", error);
    res.status(500).json({ error: "Error fetching classes" });
  }
});

// Get a Class by ID
app.get("/api/classes/:id", async (req, res) => {
  const classId = req.params.id;

  try {
    const foundClass = await prisma.class.findUnique({
      where: { id: classId },
    });

    if (foundClass) {
      res.json(foundClass);
    } else {
      res.status(404).send("Class not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching class");
  }
});

// Route to get all students
app.get("/api/students", async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Error fetching students" });
  }
});

// Get a Student by ID
app.get("/api/students/:id", async (req, res) => {
  const studentId = req.params.id;

  try {
    const foundStudent = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (foundStudent) {
      res.json(foundStudent);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching student");
  }
});

// for testing the app on localhost
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
