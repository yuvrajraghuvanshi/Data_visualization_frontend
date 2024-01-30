import React, { useState } from 'react'
import ChartsComponent from './ChartsComponent';
import Filters from './Filters';
import axios from 'axios';

const MainPage = ({ data, setMainData }) => {
 
    // const [limit, setLimit] = useState(5);
    // const limitedData = data.slice(0, limit);
    const [search, setSearch] = useState("");
    const handleSearchResult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://data-visualization-backend-jws9.onrender.com/api/data/any/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='tabsClass'>
                    <form className="form-inline" onSubmit={handleSearchResult} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '1rem' }} />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> 
                    <Filters setMainData={setMainData} />
                    <ChartsComponent data={data} />
            
        </div>
    );
}

export default MainPage