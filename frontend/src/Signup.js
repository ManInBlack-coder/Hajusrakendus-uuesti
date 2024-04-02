import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Validation from "./signupValidation"
import axios from 'axios'


function Signup() {
    
    const [values,setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    const navigate = useNavigate();
    
    const [errors,setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === '' && errors.email === '' && errors.password === '') {
            
            
            axios.post('http://localhost:8081/signup',values) 
            .then(res =>  {
                navigate('/');
                alert('Sign up was succesful');
                console.log(res)
                
            })
            .catch(err => 
                console.log(err))
        }
    }



    
    return(

        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h2>Sign up</h2>
                <form action='' onSubmit={handleSubmit}>
                    
                    <div className='n-1'>
                        <label htmlFor='email'><strong>name</strong></label>
                        <input type='name' placeholder='enter name' name="name"
                        
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>


                    <div className='n-1'>
                        <label htmlFor='email'><strong>email </strong></label>
                        <input type='email' placeholder='enter email' name="email"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                
                    <div className='n-1'>
                        <label htmlFor='password'><strong>password</strong></label>
                        <input type='password' placeholder='enter passwrd' name="password"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>

                    <button type="submit" className='btn btn-suc'>Register</button>

                    <Link to='/' className='btn btn-crt-acc'>login</Link>

                </form>
            </div>
        </div>

        
    )
}

export default Signup