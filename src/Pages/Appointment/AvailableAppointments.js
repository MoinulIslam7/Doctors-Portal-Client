import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointments = ({selectedDate, setSelectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const {data: appointmentOptions=[]} = useQuery({ 
        queryKey: ['appointmentOptions'],
         queryFn: () => fetch(`http://localhost:5000/appointmentOptions`)
         .then(res => res.json())
        })
    // useEffect(() =>{
    //     fetch(`http://localhost:5000/appointmentOption`)
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // })
    return (
        <div className='mt-16'>
             <p className='text-center text-primary font-bold'>You Have Selected Date: {format(selectedDate, 'PP')}</p>
             <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option =>
                        <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                        ></AppointmentOption>)
                }
             </div>
             {
                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                ></BookingModal>
             }
        </div>
    );
};

export default AvailableAppointments;