import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Admission from '../pages/Admission'
import Complaints from '../pages/Complaints'
import Events from '../pages/Events'
import HireTeacher from '../pages/HireTeacher'
import LeavingCertificate from '../pages/LeavingCertificate'
import Message from '../pages/Message'
import Announcement from '../pages/Announcement'
import StudentDetails from '../pages/StudentDetails'
import Students from '../pages/Students'
import Teachers from '../pages/Teachers'
import Id from '../pages/Id'
import TeacherDetails from '../pages/TeacherDetails'

const LoggedRouter = () => {

  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/admission' element={<Admission/>}/>
        <Route path="/complain" element={<Complaints/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/hireTeacher" element={<HireTeacher/>}/>
        <Route path="/leavingCertificate" element={<LeavingCertificate/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/announcement" element={<Announcement/>}/>
        <Route path="/studentDetails" element={<StudentDetails/>}/>
        <Route path="/teacherDetails" element={<TeacherDetails/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="user/teachers" element={<Teachers/>}/>
        <Route path="/id" element={<Id/>}/>
    </Routes>
  )
}

export default LoggedRouter