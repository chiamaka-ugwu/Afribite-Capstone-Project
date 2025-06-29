import React from "react";
import SignUpForm from "../components/SignUpForm";
import { assets } from "../assets/assets";

const SignUp = () => {
  return (
    <>
      <section className="flex w-full relative">
        <div className="h-screen fixed ">
          <img
            src={assets.deliciousMeal1}
            className="h-screen w-full rounded-br-2xl rounded-tr-2xl object-cover"
            alt="delicious meal"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="font-semibold text-white text-2xl">
              Food that warms the heart, memories that last.
            </h1>
            <p className="text-white mt-2 text-sm">
              Gather, eat, and make moments unforgettable.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-2/3 absolute left-1/4">
          <SignUpForm />
        </div>
      </section>
    </>
  );
};

export default SignUp;
