import React from 'react';
import Banner from './Banner/Banner';
import useAuth from '../../hook/useAuth';
import { Helmet } from 'react-helmet-async';
import Features from './Features/Features';
import FeatureClass from './FeaturesClass/FeatureClass';
import Testimonials from './Testimonials/Testimonials';
import Newsletter from './News/Newsletter';
import About from './About/About';
import TeamSection from './TeamSection/TeamSection';
import Forum from '../DashbordItem/Admin/Forum';
import ForumPost from './ForumPost/ForumPost';

const Home = () => {
    const {name}=useAuth()
    return (
        <div >
            <Helmet>
                <title>FitnessZone-Home</title>
            </Helmet>
            <Banner></Banner>
            <hr />
            <Features></Features>
            <hr /> 
            <About></About>
            <hr />
            <FeatureClass></FeatureClass>
            <hr />
            <Testimonials></Testimonials>
            <hr />
            <Newsletter></Newsletter>
            <hr />
            <TeamSection></TeamSection>
            <hr />
            <ForumPost></ForumPost>
        </div>
    );
};

export default Home;