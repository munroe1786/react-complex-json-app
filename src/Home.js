import React, {useEffect, useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{
    useEffect(()=> {
        axios.get('https://regres.in/api/unknown')
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>{Data.Company}</h1>
            <p>{Data.Description}</p>
            <Colors />
        </>
    )
}

export default Home;