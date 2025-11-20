import React from 'react';

import bookingIcon from '../../../assets/bookingIcon.png';

const Work = () => {
    return (

        <div className='max-w-5xl h-[332px] mx-auto'>
            <div>
            <h1 className='text-secondary text-2xl font-bold mb-4 mt-[100px]'>How it Works</h1>
           </div>

          <div className='flex gap-3'>

         
           {/*Card-1 */}
           <div className="card w-[302px] h-[262px] bg-base-100 card-md shadow-lg hover-3d rounded-2xl">
            <div className="card-body">
              {/* Booking Icon image */ }
              <img className='w-[47px] h-[49px]' src={bookingIcon} alt="" />
              <h1 className='text-secondary font-bold'>Booking Pick & Drop</h1>

            <p className='text-neutral'>From personal packages to <br />business shipments — we deliver <br /> on time, every time.</p>
            
            </div>
            </div>

            {/*Card-2 */}
              <div className="card w-[302px] h-[262px] bg-base-100 card-md shadow-lg hover-3d rounded-2xl">
            <div className="card-body">
              {/* Booking Icon image */ }
              <img className='w-[47px] h-[49px]' src={bookingIcon} alt="" />
              <h1 className='text-secondary font-bold'>Cash On Delivery</h1>

            <p className='text-neutral'>From personal packages to <br />business shipments — we deliver <br /> on time, every time.</p>
            
            </div>
            </div>
            
             {/*Card-3 */}
              <div className="card w-[302px] h-[262px] bg-base-100 card-md shadow-lg hover-3d rounded-2xl">
            <div className="card-body">
              {/* Booking Icon image */ }
              <img className='w-[47px] h-[49px]' src={bookingIcon} alt="" />
              <h1 className='text-secondary font-bold'>Delivery Hub</h1>

            <p className='text-neutral'>From personal packages to <br />business shipments — we deliver <br /> on time, every time.</p>
            
            </div>
            </div>
            
             {/*Card-4 */}
            <div className="card w-[302px] h-[262px] bg-base-100 card-md shadow-lg hover-3d rounded-2xl">
            <div className="card-body">
              {/* Booking Icon image */ }
              <img className='w-[47px] h-[49px]' src={bookingIcon} alt="" />
              <h1 className='text-secondary font-bold'>Booking SME & Corporate</h1>

            <p className='text-neutral'>From personal packages to <br />business shipments — we deliver <br /> on time, every time.</p>
            
            </div>
            </div>



          </div>

        </div>
    );
};

export default Work;