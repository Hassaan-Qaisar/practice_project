import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './Components/MainPage';
import { ClassList } from './Components/ClassList';
import { StudentList } from './Components/StudentList';
import { ClassDetails } from './Components/ClassDetails';
import { StudentDetails } from './Components/StudentDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />  
        <Route path="/classes" element={<ClassList />} />
        <Route path="/classes/:id" element={<ClassDetails />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
