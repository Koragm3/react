import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts'  element={<Contacts />} />
        <Route path= '*' element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
);
