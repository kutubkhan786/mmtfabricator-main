import React from 'react';
import Hero from '../components/home/Hero';
// import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Clients from '../components/home/Clients';
// import Awards from '../components/home/Awards';
import './HomePage.css';
import About from '../components/home/About';
import ContactForm from '../components/contact/ContactForm';

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Stats />
            <FeaturedProjects />
            {/* <Services /> */}
            <Clients />
            {/* <Awards /> */}
            <ContactForm />
        </>
    );
};

export default HomePage;