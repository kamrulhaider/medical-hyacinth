import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors();

    return (
        <div className='container mx-auto flex flex-wrap justify-between gap-y-4 mt-3'>
            {
                doctors.map(doctor => <Doctor
                    key={doctor.key}
                    doctor={doctor}
                ></Doctor>)
            }
        </div>
    );
};

export default Doctors;