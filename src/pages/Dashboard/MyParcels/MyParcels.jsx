
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { LiaEdit } from 'react-icons/lia';
import { GrView } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const MyParcels = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();

    // Use tanstack query

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })

    const handleParcelDelete = id =>{
        console.log(id);



            Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

            }).then((result) => {
            if (result.isConfirmed) {

                // axiosSecure.delete(`/parcels/${id}`)
                // .then(res =>{
                //     console.log(res.data);

                //     if(res.data.deletedCount){

                  axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();
                          
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
                    }
                })
               
            }
            });
    }

    // const handlePayment = async(parcel) =>{
    //     const paymentInfo = {
    //          cost: parcel.cost,
    //         parcelId: parcel._id,
    //         senderEmail: parcel.senderEmail,
    //         parcelName: parcel.parcelName
    //     }
    //     const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);
    //     console.log(res.data.url);
    //     window.location.href = res.data.url;

    // }


    const handlePayment = async (parcel) => {
  const paymentInfo = {
    cost: parcel.cost,
    parcelId: parcel._id,
    senderEmail: parcel.senderEmail,
    parcelName: parcel.parcelName
  }
  
  const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);
  window.location.href = res.data.url;

  // After redirect from Stripe, the page reloads or PaymentSuccess runs.
  // Then you need to refetch parcels in MyParcels
}


    return (
        <div>
            <h2>All of my parcels : {parcels.length}</h2>

            <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Payment Status</th>
                    <th>Delivery Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    parcels.map((parcel, index) =>   <tr key={parcel._id}>
                    <th>{index+1}</th>
                    <td>{parcel.parcelName}</td>
                    <td>{parcel.cost}</td>
                    <td>
                        {
                            parcel.deliveryStatus === 'paid'? 
                            <span className='text-green-400'>Paid</span>
                            : 
                            <button onClick={() => handlePayment(parcel)}  className='btn btn-sm btn-primary text-black'>
                             Pay</button>
                        }
                    </td>
                     <td>{parcel.deliveryStatus}</td>
                    <td>
                        <button className='btn btn-square hover:bg-primary'>
                            <LiaEdit/>
                        </button>

                        <button className='btn btn-square hover:bg-primary mx-2'>
                           <GrView />
                        </button>


                        <button onClick={ ()=> handleParcelDelete(parcel._id)}
                         className='btn btn-square hover:bg-primary'>
                           <MdDelete />
                        </button>
                    </td>
                </tr>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyParcels;