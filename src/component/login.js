import React from 'react'
import { useFormik } from "formik";
import './login.css'


const Login = () => {

    const formik = useFormik({
        initialValues: { email: "" },

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
      <div className='for' >
          <form className='form' onSubmit={formik.handleSubmit}>
           <h2>Sing In</h2>
            <input 
              className='in'
                id="email"
                name="email"
                type="email"
                placeholder='Email or phone number'
                onChange={formik.handleChange}
                value={formik.values.email}
                
            />

             <input
              className='in'
                id="password"
                name="password"
                type="password"
                placeholder='Password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <button id='but' type="submit">Sing In</button>
            <div className='help'>
                <input id='check' type='checkbox'></input>
            <p id='me'> Remember Me</p>
            <i id='u'>Need help?</i>
            </div>
        </form>
        
      </div>
    );

}

export default Login