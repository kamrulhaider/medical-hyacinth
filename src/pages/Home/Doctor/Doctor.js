import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const { name, img, details, key } = props.doctor;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-100" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="text-3xl font-semibold text-lime-100">{name}</h1>
                <p className='text-white'>{details.slice(0, 100)}</p>
                <div className="card-actions">
                    <Link to={`/doctors/${key}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;