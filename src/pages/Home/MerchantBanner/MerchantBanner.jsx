import React from 'react';
import merchants from '../../../assets/location-merchant.png'

const MerchantBanner = () => {
    return (
          <div className="w-full flex justify-center bg-[#E8E9EA] py-10">
      <div className="w-[90%] md:w-[85%] bg-[#003D48] rounded-3xl p-10 text-white relative overflow-hidden">

        {/* Background Light Effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="bg-gradient-to from-cyan-400/40 to-blue-500/40 w-full h-full blur-3xl"></div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 items-center gap-10">

          {/* Left Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>

            <p className="mt-3 text-gray-200 text-sm leading-relaxed md:w-[85%]">
              We offer the lowest delivery charge with the highest value along with
              100% safety of your product. ZapShift courier delivers your parcels in every
              corner of Bangladesh right on time.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <button className="bg-[#C7F461] text-black px-6 py-2 rounded-full font-semibold">
                Become a Merchant
              </button>

              <button className="border border-[#C7F461] text-[#C7F461] px-6 py-2 rounded-full font-semibold">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Illustration (You can replace with SVG or Image) */}
          <div className="flex justify-center md:justify-end">
            <img
              src={merchants}
              className="w-64 md:w-80 opacity-90"
              alt="Parcel Illustration"
            />
          </div>

        </div>
      </div>
    </div>
    );
};

export default MerchantBanner;