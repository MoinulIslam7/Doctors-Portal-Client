import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div>
            <h3>Payment Here {booking?.treatment}</h3>
        </div>
    );
};

export default Payment;