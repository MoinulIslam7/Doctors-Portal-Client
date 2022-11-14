import React from 'react';
import Banner from './Banner/Banner';
import bg from '../../assets/images/bg.png'
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <section >
            <div style={{
                background: `url(${bg})`,
                backgroundSize: "contain"
            }} className='mx-5'>
                <Banner></Banner>
                <InfoCards></InfoCards>
            </div>
            <div>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            </div>
        </section>

    );
};

export default Home;