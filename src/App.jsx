import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Component/SignUp'
import Students from './Component/Students'
import Attendance from './Component/Attendance'
import FeeCollection from './Component/FeeCollection';
import Staff from './Component/Staff';
import Notice from './Pages/Notice'
import Intro from './Component/Header/Intro'
import Detail from './Component/Header/Detail'
import Navbar from './Component/Header/Navbar'
import Registration from './Component/Registration'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Intro />
      <Detail/>
      <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/students' element={<Students />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/feesCollection' element={<FeeCollection />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/notice' element={<Notice />} />
        {/* <Route path='/sign-up' element={<Registration/>}/> */}
      </Routes>
    </>
  )
}

export default App
