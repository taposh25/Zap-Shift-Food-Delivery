import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import UseAuth from '../../../hooks/UseAuth';



const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {registerUser, updateUserProfile} = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()

    // console.log('in the register page', location);

    const handleRegisteration = (data) =>{
      //  console.log('after register', data.photo[0]);
       
       const profileImg =  data.photo[0];

       registerUser(data.email, data.password)
       .then(() =>{
        // console.log(result.user);
        navigate(location.state);
        //1.  store the image and get the photo url
       const formData = new FormData();
       formData.append('image', profileImg);
       //2. send the photo to store nad get the url
       const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
       axios.post(image_API_URL, formData)
       .then(res => {
        const photoURL =  res.data.data.url;
        // create user in the database
        const userInfo = {
          email : data.email,
          displayName : data.name,
          photoURL: photoURL
        }
         axiosSecure.post('/users', userInfo)
         .then(res=>{
          if(res.data.insertedId){
            console.log('userv created in the database')
          }
         })
        // update user profile to firebase
        const userProfile = {
          displayName: data.name,
          photoURL: photoURL 
        }
       updateUserProfile(userProfile )
       .then(()=>{
        console.log('user profile updated done')
       })
       .catch(error => console.log(error))

       })

       })
       .catch(error =>{
        console.log(error);
       })
    }
    return (
        <div  className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <form className='card-body' onSubmit={handleSubmit(handleRegisteration)}>
          <h3 className='text-3xl text-center'>Welcome to Zapshift</h3>
          <p className='text-center'>Please register</p>
          <fieldset className="fieldset">

            {/*Name/*/}

          <label className="label">Name</label>
          <input type="text" {...register("name", { required: true})} className="input" placeholder="Name" />

          {errors.name?.type==='required' && <p className='text-red-500'>Name is required</p>}

          {/*Photo URL */}

          
          <label className="label">Photo</label>
          <input type="file" {...register("photo", { required: true})} className="file-input" placeholder="Your Photo" />

          {errors.name?.type==='required' && <p className='text-red-500'>Photo is required</p>}

            {/*Email/*/}
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
          <p>Already have an account ? 
          <Link state={location.state}
          className='text-red-500' to="/login" >Login</Link></p>
      
          </form>
          <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;