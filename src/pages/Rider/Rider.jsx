import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import UseAuth from '../../hooks/UseAuth';

const Rider = () => {

     const {
              register,
              handleSubmit,
              control, 
            // formState: {errors}}
             }= useForm();
     
    const {user} = UseAuth();
    const axiosSecure = useAxiosSecure();

    const servicesCenters = useLoaderData();
    const regionsDuplicate =  servicesCenters.map(c => c.region)
    const regions = [... new Set(regionsDuplicate)];

    // Explore useMemo and useCallBack

    const districtsByRegion = (region) => {
        const regionDistricts = servicesCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const riderRegion = useWatch({control, name: 'region'});

    const handleRiderApplication = data =>{
        console.log(data);

        axiosSecure.post('/riders', data)
        .then(res =>{
            if(res.data.insertedId){
                 Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Application have been submitted",
                            showConfirmButton: false,
                            timer: 2000
                            });
            }
        })
    }
    return (
        <div>
            <h2 className="text-4xl">Be a Rider</h2>
              <form className='mt-12 p-4 text-black' onSubmit={handleSubmit(handleRiderApplication)}>
             
               {/* two column */}
               <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/*sender info*/}
               
                <div>
                  {/*Sender name*/}
                <fieldset className="fieldset">
                <h4 className="text-2xl font-semibold">Rider Details</h4>
                <label className="label">Rider Name </label>
                <input type="text" {...register('name')} 
                defaultValue={user?.name}
                className="input  w-full" placeholder="Rider Name" />
                </fieldset>

                {/*Sender Email*/}

                <fieldset className="fieldset">
                <label className="label"> Email </label>
                <input type="email" {...register('email')}
                 defaultValue={user?.email}
                className="input  w-full" placeholder="Rider Email" />
                </fieldset>

                  {/*Sender Phone*/}
                 <fieldset className="fieldset">
                <label className="label">Rider Phone No</label>
                <input type="number" {...register('phone')} className="input  w-full" placeholder="Rider Phone No" />
                </fieldset>


                    {/*Sender Region*/}
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Rider Regions</legend>
                <select {...register('region')} defaultValue="Pick a Region" className="select">
                    <option disabled={true}>Pick a Region</option>
                    {
                        regions.map((r, i) =>  <option key={i}>{r}</option>)
                    }   
                    
                </select>
        
                </fieldset>

                  {/*Sender District*/}
                  <fieldset className="fieldset">
                <legend className="fieldset-legend"> District</legend>
                <select {...register('district')} defaultValue="Pick a Region" className="select">
                    <option disabled={true}>Pick a District</option>
                    {
                        districtsByRegion(riderRegion).map((r, i) =>  <option key={i}>{r}</option>)
                    }
                   
                    
                </select>
                </fieldset>


                
                {/*Sender Address*/}
                 <fieldset className="fieldset">
                <label className="label mt-2">Rider Address</label>
                <input type="text" {...register('address')} className="input  w-full" placeholder="Rider Address" />
                </fieldset>


        
                </div>
                {/*Receiver info*/}

                <div>
                <fieldset className="fieldset">
                <h4 className="text-2xl font-semibold">More Details</h4>
                <label className="label">Driving Lisence </label>
                <input type="text" {...register('lisence')} className="input  w-full" placeholder="driving Lisence" />
                </fieldset>

                <fieldset className="fieldset">
                <label className="label">NID </label>
                <input type="number" {...register('nid')} className="input  w-full" placeholder="NID" />
                </fieldset>


                  {/*Receiver Phone*/}
                 <fieldset className="fieldset">
                <label className="label">Receiver Phone No</label>
                <input type="number" {...register('receiverPhone')} className="input  w-full" placeholder="Receiver Phone No" />
                </fieldset>



                {/*Receiver Address*/}
                 <fieldset className="fieldset">
                <label className="label mt-2">Bike</label>
                <input type="text" {...register('bike')} className="input  w-full" placeholder="Bike" />
                </fieldset>


              
              
                </div>

               </div>
              <input className='btn btn-primary text-black' type="submit" value="Apply as a Rider" />

            </form>
        </div>
    );
};

export default Rider;