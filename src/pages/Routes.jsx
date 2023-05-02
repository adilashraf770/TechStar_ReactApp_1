import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from './Home'
import Contact from './Contact'
import Services from './Services'

// Componants
import Header from '../componants/Header'
import Footer from '../componants/Footer'
const Index = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services' element={<Services />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default Index