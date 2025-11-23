import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';

const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {registerUser} = UseAuth();
    const handleRegisteration = (data) =>{
       console.log('after register', data)
       registerUser(data.email, data.password)
       .then(result =>{
        console.log(result.user);
       })
       .catch(error =>{
        console.log(error);
       })
    }
    return (
        <div>
        <form className='card-body' onSubmit={handleSubmit(handleRegisteration)}>

          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email", { required: true})} className="input" placeholder="Email" />

          {errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>}

          {/* passwored /*/}
          <label className="label">Password</label>
          <input type="password" {...register("password", { 
             required: true,
             minLength: 6,
             pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/
             
             })} className="input" placeholder="Password" />

          {errors.password?.type==='minLength' && <p className='text-red-500'>Password must be six character or longer</p>}

          {
            errors.password?.type==='pattern' && <p className='text-red-500'>
                Password must have at least one uppercase, at least one lowercas, at least one number, and at least one special character
            </p>
          }

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
            </form>
        </div>
    );
};

export default Register;