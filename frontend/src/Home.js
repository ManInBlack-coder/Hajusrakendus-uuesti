import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(response => {
          if (response.data.valid){
            setEmail(response.data.email)
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
        <div>Tere tulemast </div>
    )
}

export default Home