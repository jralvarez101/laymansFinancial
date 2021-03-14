import React from 'react'
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features'
import Search from '../components/Search';

function HomePage() {
    return (
        <div>
            <MainHeader/>
            <Features/>
            <Search/>
            <Testimonials/>
            <Footer/> 
        </div>
    )
}

export default HomePage;
