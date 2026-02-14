import React from 'react';
import Clients from '../components/home/Clients';
import ProjectsCards from '../components/projects/ProjectsCards';
const ProjectsPage = () => {
    return (
        <>
        <ProjectsCards/>
            <Clients />
        </>
    );
};

export default ProjectsPage;