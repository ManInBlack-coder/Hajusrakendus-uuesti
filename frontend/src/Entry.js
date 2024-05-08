import React, {useEffect, useState} from "react";
import Home from "./Home";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { response } from "express";



function Entry() {
    
    const navigate = useNavigate()
    const [ name, setName ] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(response => {
                if(response.data.valid) {
                    setName(response)
                } else {
                    navigate('/login')
                }
                console.log(response)
            })
            .catch(error => {
                error.response ? console.log(error.response) : console.log(error)
            })
    })
    

    const log_out = 'tra'
    
    
    
    
    return(

        <form action="" >


            <div className="loguout_cls"> 
                <h2>Log out</h2>
                <button name="logout">Log out</button>
            
            </div>
           
            <div>helaooo {name}</div>

           
        </form>
    )

}

export default Entry