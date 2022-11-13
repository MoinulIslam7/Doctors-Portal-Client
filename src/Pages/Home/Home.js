import React from 'react';
import Banner from './Banner/Banner';
import bg from '../../assets/images/bg.png'
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';

const Home = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }}>
            <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            
        </div>
        </section>
        
    );
};

export default Home;