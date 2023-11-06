import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'
import Tour from './pages/Tour'
import Contacts from './pages/Contacts'
import NavBar from './components/NavBar'
import LoginForm from './pages/LoginForm'
import SignUp from './pages/SignUp'
import TourDetail from './pages/TourDetail'
import DashBoard from './pages/DashBoard'
import DashMain from './components/DashMain'  
import DashTable from './components/DashTable'
import AddTour from './components/AddTour'
import TrendingTour from './pages/TrendingTour'
import Testimonal from './pages/Testimonial'
import EditTour from './components/EditTour'
import Users from './pages/Users'
import EditUsers from './components/EditUsers'
import Bookings from './pages/Bookings'
import EditBooking from './components/EditBooking'

function App() {
  const [count, setCount] = useState(0)
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/TrendingTour' element={<TrendingTour/>}></Route>
          <Route path='/testimonial' element={<Testimonal/>}></Route>
          <Route path="/tour" element={<Tour />}></Route>
          <Route path='tourDetail/:id' element={<TourDetail />}></Route>
          <Route path="/loginForm" element={<LoginForm/>}/>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path="/contact" element={<Contacts />}/>
          <Route path='/footer' element={<Footer/>}/>
        </Route>
        <Route path='/dashBoard' element={<DashBoard />}>
          <Route index element={<DashMain/>}/>
          <Route path='table' element={<DashTable/>}/>
          <Route path='addTour' element={<AddTour/>}/>
          <Route path='editTour/:id' element={<EditTour/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='editUser/:id' element={<EditUsers/>}/>
          <Route path='bookings' element={<Bookings/>}/>
          <Route path='editBooking/:id' element={<EditBooking/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
