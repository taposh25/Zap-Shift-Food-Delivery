import React from 'react';
import Banner from '../Banner/Banner';
import Work from '../Work/Work';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Delibery from '../Delivery/Delibery';
import Reviews from '../Reviews/Reviews';


const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Work></Work>
           <OurServices></OurServices>
           <Brands></Brands>
           <Delibery></Delibery>
           <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;