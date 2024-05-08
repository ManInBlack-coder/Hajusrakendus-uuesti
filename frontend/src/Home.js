import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { response } from "express";
//import Entry from './Entry'

function Home() {
    
  
    const [ name,setName ] = useState('')
    
    const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(response => {
          if (response.data.valid){
            setEmail(response.data.email)
            setName(response.data.name)
          }
          else {
            navigate('/Login')
          }
          console.log(response)
        })
        .catch(error => {
          error.response ? console.log(error.response) : console.log(error)
        })
      }, [])

     



    return (
      
      <div>
        <div> HELLO {email}</div>
          <div>Nimi {name}</div>
      </div>
      //<Entry/>
      
    )
}

export default Home