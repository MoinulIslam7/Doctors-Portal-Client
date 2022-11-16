import { useQuery } from '@tanstack/react-query';
import { format, formatDistance } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointments = ({selectedDate, setSelectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const {data: appointmentOptions=[], refetch, isLoading} = useQuery({ 
        queryKey: ['appointmentOptions', date],
         queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
         .then(res => res.json())
        })

    if(isLoading){
        return <Loading></Loading>
    }
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
                refetch={refetch}
                setTreatment={setTreatment}
                ></BookingModal>
             }
        </div>
    );
};

export default AvailableAppointments;