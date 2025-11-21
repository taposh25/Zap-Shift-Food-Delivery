import React from 'react';
import serviceImg from "../../../assets/service.png";

const OurServices = () => {
    return (
        

       <section className='pt-30'>

      <section className=" max-w-6xl mx-auto bg-[#043C3D] py-16 px-6">
  <div className="max-w-6xl mx-auto text-center text-white">
    <h2 className="text-3xl font-bold mb-3">Our Services</h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
     <small>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</small>
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    {/*Card-1 */}
    <div className="bg-white hover:bg-[#C7F36B] transition-all duration-300 p-6 rounded-2xl shadow-lg cursor-pointer">
      <div className="flex justify-center mb-3">
        <img src={serviceImg} className="w-12" />
      </div>
      <h3 className="text-center text-xl font-semibold text-secondary">Express & Standard Delivery</h3>
      <p className="text-center text-neutral  mt-2">
        <small>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</small>
      </p>
    </div>

       {/*Card-2 */}
    <div className="bg-white hover:bg-[#C7F36B] transition-all duration-300 p-6 rounded-2xl shadow-lg cursor-pointer">
      <div className="flex justify-center mb-3">
        <img src={serviceImg} className="w-12" />
      </div>
      <h3 className="text-center text-xl font-semibold text-secondary">Nationwide Delivery</h3>
      <p className="text-center text-neutral  mt-2">
       <small> We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.</small>
      </p>
    </div>

       {/*Card-3 */}
    <div className="bg-white hover:bg-[#C7F36B] transition-all duration-300 p-6 rounded-2xl shadow-lg cursor-pointer">
      <div className="flex justify-center mb-3">
        <img src={serviceImg} className="w-12" />
      </div>
      <h3 className="text-center text-xl font-semibold text-secondary ">Fulfillment Solution</h3>
      <p className="text-center text-neutral  mt-2">
       <small> We also offer customized service with inventory management support, online order processing, packaging, and after sales support. </small>
      </p>
    </div>

       {/*Card-4 */}
    <div className="bg-white hover:bg-[#C7F36B] transition-all duration-300 p-6 rounded-2xl shadow-lg cursor-pointer">
      <div className="flex justify-center mb-3">
        <img src={serviceImg} className="w-12" />
      </div>
      <h3 className="text-center text-xl font-semibold text-secondary">Cash on Home Delivery</h3>
      <p className="text-center text-neutral  mt-2">
        <small>  100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product. </small>
      </p>
    </div>

       {/*Card-5 */}
    <div className="bg-white hover:bg-[#C7F36B] transition-all duration-300 p-6 rounded-2xl shadow-lg cursor-pointer">
      <div className="flex justify-center mb-3">
        <img src={serviceImg} className="w-12" />
      </div>
      <h3 className="text-center text-xl font-semibold text-secondary">
        Corporate Service / Contract Logistics
      </h3>
      <p className="text-center text-neutral  mt-2">
       <small> Customized corporate services which includes warehouse and inventory management support. </small>
      </p>
    </div>

       {/*Card-6 */}
    <div className="bg-white hover:bg-[#C7F36B] transition-all duration-300 p-6 rounded-2xl shadow-lg cursor-pointer">
      <div className="flex justify-center mb-3">
        <img src={serviceImg} className="w-12" />
      </div>
      <h3 className="text-center text-xl font-semibold text-secondary">Parcel Return</h3>
      <p className="text-center text-neutral mt-2">
        <small>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</small>
      </p>
    </div>

  </div>
     </section>

       </section>
        
    );
};

export default OurServices;