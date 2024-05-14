const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all classes
const getAllClasses = async (req, res) => {
  try {
    const classes = await prisma.class.findMany({
      include: {
        students: {
          select: { id: true, name: true },
        },
      },
    });
    if (classes.length === 0) {
      return res.status(404).json({ message: "No classes found" });
    }
    res.json(classes);
  } catch (error) {
    console.error("Error fetching classes:", error);
    res.status(500).json({ error: "Error fetching classes" });
  }
};

// Get class by ID
const getClassById = async (req, res) => {
  const classId = req.params.id;

  try {
    const foundClass = await prisma.class.findUnique({
      where: { id: classId },
    });

    if (foundClass) {
      res.json(foundClass);
    } else {
      res.status(404).json("Class not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching class");
  }
};

module.exports = { getAllClasses, getClassById };
