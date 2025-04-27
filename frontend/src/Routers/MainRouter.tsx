import { Route, Routes } from 'react-router-dom'
import Front from '../pages/Front'
import Login from '../pages/Login'
import LoggedPages from '../components/LoggedPages'
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
import Schedule from '../pages/Schedule'
import ProfilePage from '../pages/ProfilePage'
import FeeStructure from '../pages/FeeStructure'


const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Front/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/user" element={<LoggedPages/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='admission' element={<Admission/>}/>
            <Route path='schedules' element={<Schedule/>}/>
            <Route path="complain" element={<Complaints/>}/>
            <Route path='profile' element={<ProfilePage/>}/>
            <Route path="events" element={<Events/>}/>
            <Route path='feeStructure' element={<FeeStructure/>}/>
            <Route path="hireTeacher" element={<HireTeacher/>}/>
            <Route path="leavingCertificate" element={<LeavingCertificate/>}/>
            <Route path="message" element={<Message/>}/>
            <Route path="announcement" element={<Announcement/>}/>
            <Route path="studentDetails" element={<StudentDetails/>}/>
            <Route path="teacherDetails" element={<TeacherDetails/>}/>
            <Route path="students" element={<Students/>}/>
            <Route path="teachers" element={<Teachers/>}/>
            <Route path="id" element={<Id/>}/>
        </Route>
    </Routes>
  )
}

export default MainRouter