import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './landingpage/home/HomePage';
import Signup from './landingpage/signup/Signup'
import Login from './landingpage/login/Login'
import AboutPage from './landingpage/about/About'
import ProductPage from './landingpage/products/ProductPage'
import PricingPage from './landingpage/pricing/PricingPage';
import SupportPage from './landingpage/support/Support';

import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import NotFound from './landingpage/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
                 <Navbar/>
                <Routes>
                       
                       <Route path="/" element={<HomePage/>}></Route>
                       <Route path="/signup" element={<Signup/>}></Route>
                       <Route path="/login" element={<Login/>}></Route>
                       <Route path="/about" element={<AboutPage/>}></Route>
                       <Route path="/product" element={<ProductPage/>}></Route>
                       <Route path="/pricing" element={<PricingPage/>}></Route>
                       <Route path="/support" element={<SupportPage/>}></Route>

                       <Route path="*" element={<NotFound />} />

                </Routes>
                <Footer/>
  </BrowserRouter>
);
