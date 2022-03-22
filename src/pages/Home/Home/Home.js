import React from 'react';
import Header from '../../Shared/Header/Header';
import Doctors from '../Doctors/Doctors';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Doctors></Doctors>
        </>
    );
};

export default Home;