import React from 'react';
import { Box } from 'quarks-ui';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

const Home: React.FC = () => (
    <Box styling="column" minHeight="100vh" justifyContent="flex-start">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </Box>
);

export default Home;
