import { useState } from 'react'
import './App.css'
import data from "../data.json"
import StudentCard from './components/StudentCard'

function App() {
  const [students, setStudents] = useState(data)

  return (
    <>
    {
      students.map((student)=>(
        <StudentCard data={student} key = {student.id}/>
      ))
    }
      
    </>
  )
}

export default App
