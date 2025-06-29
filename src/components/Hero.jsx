import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row w-[85%] mx-auto justify-between mt-12 gap-8 md:gap-0">
        <div className="mt-16 w-full text-center md:text-left md:w-2/5">
          <h1 className="text-4xl font-bold text-primary md:leading-12    ">
            Discover people & <br /> places through food
          </h1>
          <p className="leading-6 text-sm mt-4">
            Join a community of foodies, explore local eats, and make every meal
            unforgettable.
          </p>
          <Link to="/menu">
            <button className="mt-12 bg-primary px-6 py-3 rounded-4xl text-white text-sm">
              Make your order now
            </button>
          </Link>
        </div>
        <div className="w-full  md:w-3/5">
          <img src={assets.dinner_plate} alt="dinner_plate" />
        </div>
      </section>
    </>
  );
}

export default Hero