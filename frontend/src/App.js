import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Pages/Footer';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
      <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
