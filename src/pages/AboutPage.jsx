import React from 'react';
import Stats from '../components/home/Stats';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Clients from '../components/home/Clients';
import Awards from '../components/home/Awards';
import './HomePage.css';

const AboutPage = () => {
    return (
        <>
            <Stats />
            <FeaturedProjects />
            <Clients />
            <Awards />
        </>
    );
};

export default AboutPage;