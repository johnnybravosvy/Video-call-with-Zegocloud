import React from 'react'
import Navbar from './Navbar'
import Testimonial from './Testimonial'
import Faq from './Faq'
import Footer from './Footer'
import Hero from './Hero'
import PartnerLogo from './PartnerLogo'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <PartnerLogo />
            <Testimonial />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home