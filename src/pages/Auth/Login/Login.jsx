import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';

const Login = () => {

    const {register,  handleSubmit, formState:{errors}} = useForm();
    const {signInUser} = UseAuth();
    const handleLogin = (data) =>{
        console.log('form data', data);
        signInUser(data.email, data.user)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
         console.log(error);
        })

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className='card-body' onSubmit={ handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
            {/*Email field */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input" placeholder="Email" />
          {
            errors.email?.type=== 'required' && (
        <p className='text-red-500'>Email is required</p>
      )
            
          }
           {/*Password field */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {

            required: true,
            minLength: 6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/
          })} className="input" placeholder="Password" />

            {errors.password?.type==='minLength' && <p className='text-red-500'>Password must be six character or longer</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
    );
};

export default Login;