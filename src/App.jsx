import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", score: 55 },
    { id: 2, name: "Anita", score: 32 }
  ]);

  // Update score
  const updateScore = (id, newScore) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) }
          : student
      )
    );
  };

  // Add student
  const addStudent = (name, score) => {
    if (!name || score === "") return;

    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score)
    };

    setStudents([...students, newStudent]);
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;