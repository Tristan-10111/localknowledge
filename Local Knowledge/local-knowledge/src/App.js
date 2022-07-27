import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap-icons/font/bootstrap-icons.css'

import HomePage from './components/HomePage';
import Navbar from './common/Navbar';
import AboutUsPage from './components/AboutUsPage';
import BookAnExperiencePage from './components/BookAnExperiencePage';
import ContactUsPage from './components/ContactUsPage';
import CartPage from './components/CartPage';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AboutUs' element={<AboutUsPage />} />
          <Route path='/BookAnExperience' element={<BookAnExperiencePage />} />
          <Route path='/ContactUs' element={<ContactUsPage />} />
          <Route path='/Cart' element={<CartPage />} />
        </Routes>
      <HomePage/>
    </BrowserRouter>
  )
}