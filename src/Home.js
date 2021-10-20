import React, {useEffect, useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{
    useEffect(()=> {
        axios.get('https://regres.in/api/unknown')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data.ad)
                console.log('Colors Data: ',res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <Colors />
        </>
    )
}

export default Home;