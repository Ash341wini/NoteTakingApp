import React from 'react'

import SearchFilter from './SearchFilter';

import { useState } from 'react';




function Body() {

    const [selectedDate, setSelectedDate] = useState('');

    const [showInput, setShowInput] = useState(false);




    const handleDateChange = e => {

        setSelectedDate(e.target.value);

    };

    return (

        <div>

        <div className="calendar" style={{ display: 'flex', float:'right' }}>

                <input  type="date" value={selectedDate} onChange={handleDateChange} />

                <SearchFilter />

        </div>







        </div>

    )

}




export default Body