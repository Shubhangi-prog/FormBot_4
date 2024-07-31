import React from 'react';

import Navbar from '../components/lander/Navbar';
import Banner from '../components/lander/Banner';
import Comparer from '../components/lander/Comparer';
import Highlight from '../components/lander/Highlight';
import Integration from '../components/lander/Integration';
import Result from '../components/lander/Result';
import PostBanner from '../components/lander/PostBanner';
import Footer from '../components/lander/Footer';

function Homepage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Comparer />
            <Highlight />
            <Integration />
            <Result />
            <PostBanner />
            <Footer />
        </div>
    )
}

export default Homepage