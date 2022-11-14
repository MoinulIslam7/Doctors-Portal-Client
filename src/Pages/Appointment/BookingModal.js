import { setDefaultOptions } from 'date-fns';
import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const date = format(selectedDate, 'PP')
    const { name, slots } = treatment;
    // treatment is appointment options just diffrent name



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(date, slot, name, email, phone);
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }
        // todo: send data to the server
        // and once data is saved then close the modal and display success toast
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input disabled type="text" value={date} className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full">
                            
                            {
                                slots.map((slot, i) => <option 
                                key={i} 
                                value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered " />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered " />
                        <br />
                        <input className=' btn btn-accent w-full  max-w-sm' type="Submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;