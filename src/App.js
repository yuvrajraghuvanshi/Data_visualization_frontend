import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import from files
import Header from './components/Header';
import MainPage from './components/MainPage';


function App() {
    const [mainData, setMainData] = useState([]);    
    const getDataFromDB = async() => {
        try{
            const response = await axios.get("https://data-visualization-backend-jws9.onrender.com/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getDataFromDB();
    },[])
    useEffect(()=>{
      console.log(mainData.length)
    },[mainData])

  return (
    <div>
      <Header/>
      <MainPage data={mainData} setMainData={setMainData} />
    </div>
  );
}

export default App;
