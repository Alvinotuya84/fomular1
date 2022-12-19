import React, { useEffect, useState } from "react";

export default function Driver(){

    const [drivers, setDrivers] = useState([])
    const getDrivers = () => {
    fetch("http://ergast.com/api/f1/drivers?=123")
    .then(res => res.json())
    .then((data) => {
        setDrivers(data.drivers)
    })

    }
    useEffect(
        getDrivers, []
    )

    return(
        <div>
            home
        </div>

    );
}