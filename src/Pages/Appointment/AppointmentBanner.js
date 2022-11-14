import React, { useState } from 'react';
import chair from "../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from "../../assets/images/bg.png"

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header style={{
            background: `url(${bg})`,
            backgroundSize: "contain"
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" alt='dentist chair' />
                    <div className='mr-8'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>  
            </div>
            <p className='text-center text-primary font-bold'>You Have Selected Date: {format(selectedDate, 'PP')}</p>
        </header>
    );
};

export default AppointmentBanner;