import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';

const ReviewCard = ({review}) => {
    const {userName, review: testimonial, user_photoURL} = review;
    return (
       <div className="p-6 md:p-8">
      <div className="card bg-base-100 shadow-lg rounded-2xl border border-transparent hover:border-gray-200 transition-all">
        <div className="p-6 md:p-8">
          {/* Quotation icon */}
          <div className="text-4xl md:text-5xl text-teal-200">
            <FaQuoteLeft />
          </div>

          {/* Quote text */}
          <p className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg max-w-prose">
           {testimonial}
          </p>

          {/* dashed separator */}
          <div className="mt-6">
            <hr className="border-dashed border-t-2 border-teal-100" />
          </div>

          {/* Author area */}
          <div className="mt-6 flex items-center gap-4">
            {/* circular avatar (uses uploaded image path) */}
            <img
              src={user_photoURL}
              alt="avatar"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-4 border-teal-800"
            />

            <div>
              <h3 className="text-teal-900 font-bold text-sm md:text-base">{userName}</h3>
              <p className="text-gray-500 text-xs md:text-sm">Senior Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;