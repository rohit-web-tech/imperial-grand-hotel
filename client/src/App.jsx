import React from 'react'
import Header from './components/header/Header'
import {BrowserRouter,Routes,Route} from "react-router-dom" ;
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import PageNotFound from './components/page-not-found/PageNotFound';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App