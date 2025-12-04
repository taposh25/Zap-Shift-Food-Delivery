import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const SendParcel = () => {
     const {
          register,
          handleSubmit,
          control, 
        // formState: {errors}}
         }= useForm();

    const {user} = UseAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const servicesCenters = useLoaderData();
    const regionsDuplicate =  servicesCenters.map(c => c.region)
    const regions = [... new Set(regionsDuplicate)];

    // Explore useMemo and useCallBack

    const senderRegion = useWatch({control, name: 'senderRegion'});
    const receiverRegion = useWatch({control, name: 'receiverRegion'});


   const districtsByRegion = (region) => {
        const regionDistricts = servicesCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    console.log(regions);

   

    const handleSendParcel = data =>{
        console.log( data)

        // calculation part
 
        const isDocument = data.parcelType ==="document";
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        
        const parcelWeight = parseFloat(data.parcelWeight);
        let cost = 0;
        if(isDocument){
            cost = isSameDistrict? 60 : 80
        }
        else{
            if(parcelWeight < 3){
            cost = isSameDistrict? 110: 150;
            }
            else{
              const minCharge = isSameDistrict ? 110 : 150;
              const extraWeight = parcelWeight - 3;
              const extraCharge  =  isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
              cost = minCharge + extraCharge;

            }

        }
        console.log('cost', cost);
        data.cost =  cost;

        {/*SweetAlert 2*/}
            Swal.fire({
            title: "Agree with the cost?",
            text: `You will be charged ${cost} taka`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: " Confirm And Continue Payment "
            }).then((result) => {
            if (result.isConfirmed) {
                navigate('/dashboard/my-parcels')

        // save the parcel infop the database
        axiosSecure.post('/parcels', data)
        .then(res =>{
        console.log("after saving parcel", res.data);

        if(res.data.insertedId){
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Parcel has created. Please Pay",
            showConfirmButton: false,
            timer: 2500
            });
        }
        })
        .catch(err => console.error(err));

            }
            });
                

    }
    return (
        <div>
            <h3 className="text-5xl text-bold">Send A Parcel</h3>
            <form className='mt-12 p-4 text-black' onSubmit={handleSubmit(handleSendParcel)}>
               {/* parcel type */}
               <div>
                
               <label className="label mr-4">
                <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                Document
                </label>

                 <label className="label">
                <input type="radio" {...register('parcelType')} value="non-document" className="radio" />
                Non-Document
                </label>
        
               </div>

               {/* Parcel info: anme, weight */}
               <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <fieldset className="fieldset">
                <label className="label">Parcel Name</label>
                <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
                </fieldset>

                <fieldset className="fieldset">
                <label className="label">Parcel Weight (kg)</label>
                <input type="number" {...register('parcelWeight')} className="input  w-full" placeholder="Parcel Weight" />
                </fieldset>


               </div>
               {/* two column */}
               <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/*sender info*/}
               
                <div>
                  {/*Sender name*/}
                <fieldset className="fieldset">
                <h4 className="text-2xl font-semibold">Sender Details</h4>
                <label className="label">Sender Name </label>
                <input type="text" {...register('senderName')} 
                defaultValue={user?.name}
                className="input  w-full" placeholder="Sender Name" />
                </fieldset>

                {/*Sender Email*/}

                <fieldset className="fieldset">
                <label className="label">Sender Email </label>
                <input type="email" {...register('senderEmail')}
                 defaultValue={user?.email}
                className="input  w-full" placeholder="Sender Email" />
                </fieldset>

                  {/*Sender Phone*/}
                 <fieldset className="fieldset">
                <label className="label">Sender Phone No</label>
                <input type="number" {...register('senderPhone')} className="input  w-full" placeholder="Sender Phone No" />
                </fieldset>


                    {/*Sender Region*/}
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select {...register('senderRegion')} defaultValue="Pick a Region" className="select">
                    <option disabled={true}>Pick a Region</option>
                    {
                        regions.map((r, i) =>  <option key={i}>{r}</option>)
                    }   
                    
                </select>
        
                </fieldset>

                  {/*Sender District*/}
                  <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender District</legend>
                <select {...register('senderDistrict')} defaultValue="Pick a Region" className="select">
                    <option disabled={true}>Pick a District</option>
                    {
                        districtsByRegion(senderRegion).map((r, i) =>  <option key={i}>{r}</option>)
                    }
                   
                    
                </select>
                </fieldset>


                
                {/*Sender Address*/}
                 <fieldset className="fieldset">
                <label className="label mt-2">Sender Address</label>
                <input type="text" {...register('senderAddress')} className="input  w-full" placeholder="Sender Address" />
                </fieldset>


             

                {/*Sender  Instruction*/}
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Pickup Instruction</legend>
                <textarea className="textarea h-24" placeholder="Pickup Instruction"></textarea>
                </fieldset>
                </div>
                {/*Receiver info*/}

                <div>
                <fieldset className="fieldset">
                <h4 className="text-2xl font-semibold">Receiver Details</h4>
                <label className="label">Receiver Name </label>
                <input type="text" {...register('receiverName')} className="input  w-full" placeholder="Receiver Name" />
                </fieldset>

                <fieldset className="fieldset">
                <label className="label">Receiver Email </label>
                <input type="email" {...register('receiverEmail')} className="input  w-full" placeholder="Receiver Email " />
                </fieldset>


                  {/*Receiver Phone*/}
                 <fieldset className="fieldset">
                <label className="label">Receiver Phone No</label>
                <input type="number" {...register('receiverPhone')} className="input  w-full" placeholder="Receiver Phone No" />
                </fieldset>



                {/*Receiver Region*/}
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select">
                    <option disabled={true}>Pick a Region</option>
                    {
                        regions.map((r, i) =>  <option key={i}>{r}</option>)
                    }   
                    
                </select>
        
                </fieldset>


                
                {/*Receiver District*/}
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select {...register('receiverDistrict')} defaultValue="Pick a Region" className="select">
                    <option disabled={true}>Pick a District</option>
                    {
                       districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>
                          {d}
                       </option>)
                    }   
                    
                </select>
        
                </fieldset>



                {/*Receiver Address*/}
                 <fieldset className="fieldset">
                <label className="label mt-2">Receiver Address</label>
                <input type="text" {...register('receiverAddress')} className="input  w-full" placeholder="Receiver Address" />
                </fieldset>

                
              
                {/*Receiver Instruction*/}
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Delivery Instruction</legend>
                <textarea className="textarea h-24" placeholder="Pickup Instruction"></textarea>
                </fieldset>

                </div>

               </div>
              <input className='btn btn-primary text-black' type="submit" value="Send Parcel" />

            </form>
        </div>
    );
};

export default SendParcel;