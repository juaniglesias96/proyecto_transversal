import React from 'react';
import Carousel from './carousel';
import Features from './features';
import Stats from './stats';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        <div>
          
            <div>

                <Carousel />
                <Features />
                <Stats /> 

                
            </div>
        </div>
    );
};

export default Home;
