import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './loginValidation';
import axios from 'axios'




function Login() {
     const [values,setValues] = useState({
         email: '',
         password: ''
    })

    const navigate = useNavigate();
    const [errors,setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => {
            if (res.data.valid === true){
                navigate('/')
            } else {
                navigate('/Login')
            }
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === '' && errors.password === '') {
            
            
            axios.post('http://localhost:8081/login',values) 
            .then(res =>  {
                
                if(res.data.Login === true) {
                    navigate('/');
                } else {
                    alert('No such user')
                }
              
                
                console.log(res)
                
            })
            .catch(err => 
                console.log(err))
        }

    }


    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign in</h2>
                <form action='' onSubmit={handleSubmit}>
                    
                    
                    <div className='n-1'>
                        <label htmlFor='email'><strong>email </strong></label>
                        <input type='email' placeholder='enter email' name='email'
                        onChange={handleInput} className='form-control rounded-0' />

                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    
                    </div>
                
                    <div className='n-1'>
                        <label htmlFor='password'><strong>password</strong></label>
                        <input type='password' placeholder='enter passwrd' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>

                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
        
                    <button type='submit' className='btn btn-suc'>Log in</button>

                    <Link to='/Signup' className='btn btn-crt-acc'>Create account</Link>

                </form>
            </div>
        </div>
    )
}

export default Login 