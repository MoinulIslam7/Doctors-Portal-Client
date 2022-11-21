import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name,price, slots } = option;
    return (
            <div className="card shadow-xl my-8">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-center font-bold text-primary">{name}</h2>
                    <p>{
                        slots.length > 0 ? slots[0] : "Try Another day"
                    }</p>

                    <p>
                        {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
                    </p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-center">
                        <label
                        disabled={slots.length ===0}
                         onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
    );
};

export default AppointmentOption;