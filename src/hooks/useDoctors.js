import { useEffect, useState } from "react";

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://stark-tundra-37115.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    // return necessary items 
    return [doctors];
}

export default useDoctors;