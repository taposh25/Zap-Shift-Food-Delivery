import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import Casio from '../../../assets/brands/casio.png';
import Moonstar from '../../../assets/brands/moonstar.png';
import Randstad from '../../../assets/brands/randstad.png';
import Star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';



const brandLogos = [Amazon, amazon_vector, Casio ,Moonstar, Randstad, Star, start_people  ];
const Brands = () => {
    return (

        <div className='mt-20'>

        <div>
            <h1 className='text-#03373D text-xl font-bold text-center mb-6'>We've helped thousands of sales teams</h1>
        </div>
    
        <div>
            <Swiper
        modules={[Autoplay]}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        
        >

         {
            brandLogos.map((logo, index) => <SwiperSlide key={index}>
                <img src={logo} alt="" />
            </SwiperSlide> )
         }

        
       

        </Swiper>
        </div>
        </div>
    );
};

export default Brands;