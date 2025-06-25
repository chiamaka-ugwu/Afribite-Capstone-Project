import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <>
      <section className="flex w-[85%] mx-auto justify-between mt-12">
        <div className='mt-16 w-2/5'>
          <h1 className='text-4xl font-bold text-primary leading-12    '>Discover people & <br /> places through food</h1>
          <p className='leading-6 text-sm mt-4'>
            Join a community of foodies, explore local eats, and make every meal
            unforgettable.
          </p>
          <button className="mt-12 bg-primary px-6 py-3 rounded-4xl text-white text-sm">
            Make your order now
          </button>
        </div>
        <div className='w-3/5'>
          <img src={assets.dinner_plate} alt="dinner_plate" />
        </div>
      </section>
    </>
  );
}

export default Hero