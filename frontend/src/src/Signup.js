import React from "react"
import { Link } from "react-router-dom"


function Signup() {
    return(

        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action=''>
                    
                    <div className='n-1'>
                        <label htmlFor='email'><strong>name</strong></label>
                        <input type='name' placeholder='enter name'/>
                    </div>


                    <div className='n-1'>
                        <label htmlFor='email'><strong>email </strong></label>
                        <input type='email' placeholder='enter email'/>
                    </div>
                
                    <div className='n-1'>
                        <label htmlFor='password'><strong>password</strong></label>
                        <input type='password' placeholder='enter passwrd'/>
                    </div>

                    <button className='btn btn-suc'>Register</button>

                    <Link to='/login' className='btn btn-crt-acc'>login</Link>

                </form>
            </div>
        </div>

        
    )
}

export default Signup