import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import NotFound from './Screens/NotFound';
import MoviePage from './Screens/MoviePage';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Dashboard/Profile';


function App() {

  return (
   <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/movies" element={<MoviePage />} />
    <Route path="/movie/:id" element={<SingleMovie />} />
    <Route path="/watch/:id" element={<WatchPage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/profile' element={<Profile />} />
    <Route path="*" element={<NotFound />} />

   </Routes>
  );
}

export default App