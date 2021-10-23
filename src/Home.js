import React, {useEffect, useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{

    const [colorsData, setColorsData]=useState([])

    useEffect(()=> {
        axios.get('https://regres.in/api/unknown')
            .then(res=>{

                console.log('Colors Data: ',res.data.data)
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <Colors data={colorsData}/>
        </>
    )
}

export default Home;