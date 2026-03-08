import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Component/SignUp'
import Students from './Component/Students'
import Attendance from './Component/Attendance'
import FeeCollection from './Component/FeeCollection';
import Staff from './Component/Staff';
import Notice from './Pages/Notice'
import Sidebar from './Component/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 left_sidebar p-0">
            <Sidebar />
          </div>
          <div className="col-lg-10 right_sidebar p-0">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/students' element={<Students />} />
              <Route path='/attendance' element={<Attendance />} />
              <Route path='/feesCollection' element={<FeeCollection />} />
              <Route path='/staff' element={<Staff />} />
              <Route path='/notice' element={<Notice />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
