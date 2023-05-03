import React, { useState, useEffect } from 'react';





import '../App.css';




export default function Searchfilter() {

    const [data, setData] = useState([]);

    const [searchData, setSearchData] = useState([]);

    const [filterValue, setFilterValue] = useState('');
    const [showInput, setShowInput] = useState(false);



    useEffect(() => {

        const fetchData = () => {

            fetch('')

                .then(response => response.json())

                .then(json => {

                    setData(json);

                    setSearchData(json);

                });

        };

        fetchData();

    }, []);




    const handleFilter = e => {

        if (e.target.value === '') {

            setData(searchData);

        } else {

            const filterResult = searchData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));

            if (filterResult.length > 0) {

                setData(filterResult);

            } else {

                setData([{ title: 'NO DATA FOUND' }]);

            }

        }




        ;



        setFilterValue(e.target.value);

    };










    return (

        <div className="container">

            <div className="search-bar">

                <div className={`input-container ${showInput ? 'active' : ''}`}>

                    <input

                        type="text"

                        className="invalue active"

                        placeholder="Search"

                        value={filterValue}

                        onInput={handleFilter} />

                </div>



            </div>









            {/* for calendar */}






        </div>

    );

}