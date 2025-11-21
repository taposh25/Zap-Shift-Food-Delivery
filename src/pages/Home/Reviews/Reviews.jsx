import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import customer_top from '../../../assets/customer-top.png'
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
        <div className='mt-30'>
            <div className='text-center mb-10'>
                <div className='flex items-center justify-center mb-4'>
                    <img src={customer_top} alt="" />
                </div>
                <h3 className='text-center text-#03373D text-2xl font-bold mb-2'>What our customers are sayings</h3>
                <p><small>
                Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
                </small></p>
            </div>

        <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
       {
        reviews.map(review =>  <SwiperSlide key={review.id} >
          <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
       }
      
      </Swiper>
            
        </div>
    );
};

export default Reviews;