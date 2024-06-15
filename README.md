# School Application

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

The School Application is a MERN-based project developed for a technical interview. It demonstrates a many-to-many relationship between students and classes using Prisma and MongoDB. The frontend is styled using Tailwind CSS and fetches data from the backend to display to users.

## Project Structure

The repository is organized into the following folders:

- `front-end`: Contains the React frontend of the application.
- `server`: Contains the Node.js backend, which uses Prisma to interact with MongoDB.

## Features

- MERN stack application
- Many-to-many relationship between students and classes using Prisma
- Data storage in MongoDB
- Tailwind CSS for styling the React frontend

## Installation

To set up and run the project locally, follow these steps:

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Hassaan-Qaisar/school_application
    cd school_application
    ```

2. Setup the server:
    ```bash
    cd server
    npm install
    ```

3. Configure Prisma:
    - Ensure you have MongoDB running.
    - Update the `prisma/schema.prisma` file with your MongoDB connection string.
    - Run Prisma commands to generate and migrate the database:
      ```bash
      npx prisma generate
      npx prisma migrate dev --name init
      ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Install dependencies and start the React frontend:
    ```bash
    cd ../front-end
    npm install
    npm start
    ```

## Usage

Once the frontend and backend are running, open your browser and navigate to `http://localhost:3000` to interact with the application. The frontend fetches data from the backend and displays it to the users, showcasing the relationships between students and classes.


