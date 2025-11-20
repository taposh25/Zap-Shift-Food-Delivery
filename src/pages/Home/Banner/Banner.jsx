import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png"
import { FaCircleArrowLeft } from 'react-icons/fa6';

const Banner = () => {
    return (
         
            <Carousel autoPlay={true}
                  infiniteLoop={true}
                  
                  >
                
     
                <div>
                    <img src={bannerImg1} />
                

                   <div className='flex items-center -mt-35 ml-20'>
                     <button className="btn btn-accent rounded-3xl font-bold text-secondary text-2xl">Track Your Parcel</button>
                     <p className='rotate-120 text-3xl mb-4'><FaCircleArrowLeft /></p>
                     <button className="btn font-bold text-secondary text-2xl">Be A Rider</button>
                   </div>
                    
                </div>
                <div>
                    <img src={bannerImg2} />

                     <div className='flex items-center -mt-35 ml-20'>
                     <button className="btn btn-accent rounded-3xl font-bold text-secondary text-2xl">Track Your Parcel</button>
                     <p className='rotate-120 text-3xl mb-4'><FaCircleArrowLeft /></p>
                     <button className="btn font-bold text-secondary text-2xl">Be A Rider</button>
                   </div>
                    
                </div>
                <div>
                    <img src={bannerImg3} />

                     <div className='flex items-center -mt-35 ml-20'>
                     <button className="btn btn-accent rounded-3xl font-bold text-secondary text-2xl">Track Your Parcel</button>
                     <p className='rotate-120 text-3xl mb-4'><FaCircleArrowLeft /></p>
                     <button className="btn font-bold text-secondary text-2xl">Be A Rider</button>
                   </div>
                    
                </div>
            
            </Carousel>
            
            
    
           
            
    );
};

export default Banner;