import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    console.log(name, email)

    useEffect(() => {
        fetch('https://stark-tundra-37115.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const handleAppointment = e => {
        e.preventDefault();
        const uri = "https://stark-tundra-37115.herokuapp.com/appointment";
        fetch(uri, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: `${name}`, email: `${email}` })
        })


    };

    const { doctorsKey } = useParams();
    const singleItem = doctors.find(element => element.key === parseInt(doctorsKey));
    return (
        <div className='container mx-auto grid grid-cols-2 gap-4'>
            <div className>
                <div className="card w-full shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={singleItem?.img} alt="Shoes" className="rounded-xl w-100" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className="text-3xl font-semibold text-gray-800">{singleItem?.name}</h1>
                        <p className='text-black-300'>{singleItem?.details}</p>
                    </div>
                </div>
                <textarea name="" id="" cols="30" rows="3" className='p-2 mb-2 mt-2 w-full border-2 rounded-lg outline-none border-green-200'></textarea>
                <input type="submit" className="btn mt-2 bg-lime-800 mb-2" value="submit review" />
            </div>
            <div>
                <form onSubmit={handleAppointment}>
                    <input onBlur={e => setName(e.target.value)} className="p-2 mb-2 mt-2 w-full border-2 rounded-lg outline-none border-green-200" type="text" placeholder="Patient Name" />
                    <input onBlur={e => setEmail(e.target.value)} className="p-2 w-full border-2 rounded-lg outline-none border-green-200" type="text" placeholder="Phone No" />
                    <input type="submit" className="btn mt-2 bg-lime-800 mb-2" value="Request Appointment" />
                </form>
            </div>
        </div>
    );
};

export default SingleDoctor;