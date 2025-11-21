import React from 'react';
import live_tracking from '../../../assets/live-tracking.png';
import safe_delivery from '../../../assets/safe-delivery.png';

const Delibery = () => {
    return (
      

        <section className='max-w-5xl mx-auto border-t-2 border-b-2 border-dashed mt-30'>
        

        <section className=" max-w-5xl mx-auto  py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

        {/*/ Delivery step-1*/}

            <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:bg-[#E8F9F1] transition">
            <img src={live_tracking} className="w-32 h-auto border-r border-dashed p-8" />
            <div>
                <h3 className=" text-#03373D text-xl font-bold">Live Parcel Tracking</h3>
                <p className="text-neutral mt-2">
                <small>
                Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your
                shipment's journey and get instant status updates for complete peace of mind.
                </small>
                </p>
            </div>
            </div>

            {/*/ Delivery step-2*/}
            <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:bg-[#E8F9F1] transition">
            <img src={safe_delivery} className="w-32 h-auto border-r border-dashed p-8" />
            <div>
                <h3 className="text-2xl font-semibold text-neutral">100% Safe Delivery</h3>
                <p className="text-neutral mt-2">
                <small>
                We ensure your parcels are handled with utmost care and delivered securely. Our reliable process guarantees
                safe and damage-free delivery every time.
                </small>
                </p>
            </div>
            </div>

        {/*/ Delivery step-3*/}

            <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:bg-[#E8F9F1] transition">
            <img src={safe_delivery} className="w-32 h-auto border-r border-dashed p-8" />
            <div>
                <h3 className="text-2xl font-semibold text-neutral">24/7 Call Center Support</h3>
                <p className="text-neutral mt-2">
                 <small>
                Our support team is available round the clock to assist you with any questions, updates, or delivery concerns —
                anytime you need us.
                 </small>
                </p>
            </div>
            </div>

        </div>
        </section>


        </section>

 


    );
};

export default Delibery;