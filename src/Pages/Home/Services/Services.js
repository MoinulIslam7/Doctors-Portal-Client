import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "This is for fluoride treatment",
            img: fluoride
        },
        {
            id: 2,
            title: "Cavity Filling",
            description: "This is for Cavity Filling",
            img: cavity
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description: "This is for Teeth whitening",
            img: whitening
        },
    ]
    return (
        <div className='mt-20'>
            <div>
                <h2 className='text-xl font-bold text-center text-primary uppercase'>Our Services</h2>
                <h1 className='text-3xl font-bold text-center '>Services We provide</h1>
            </div>
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-1'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div className="card mt-8 lg:w-1/2 mx-auto md:card-side shadow-xl">
                    <figure><img src={treatment} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">Exceptional Dental Care, On Your Terms</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, at reprehenderit? Iusto cum nemo laudantium, veniam, quisquam, magnam sint a perspiciatis nisi recusandae necessitatibus fuga ipsum! Quis error delectus odit.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;