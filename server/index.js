const express = require("express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");
const cors = require('cors');
const classController = require('./controller/classController');
const studentController = require('./controller/studentController');

dotenv.config();

const app = express();
app.use(cors());

const prisma = new PrismaClient();

// Log message when Prisma Client is instantiated
prisma
  .$connect()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Error connecting to database:", error));

// Routes for classes
app.get("/api/classes", classController.getAllClasses);
app.get("/api/classes/:id", classController.getClassById);

// Routes for students
app.get("/api/students", studentController.getAllStudents);
app.get("/api/students/:id", studentController.getStudentById);

// for testing the app on localhost
app.use("/test", (req, res) => {
  res.send("Hello world!");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
