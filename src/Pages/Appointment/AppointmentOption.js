import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ option }) => {
    const { name, slots } = option;
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
                    <div className="card-actions justify-center">
                        <PrimaryButton>Book Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
    );
};

export default AppointmentOption;