import React from "react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <>
        <section className="flex w-full">
          <div className="h-screen relative ">
            <img
              src={assets.deliciousMeal2}
              className="h-screen w-full rounded-br-2xl rounded-tr-2xl object-cover"
              alt="delicious meal"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="font-semibold text-white text-xl">
                Savoring Life, One Bite at a Time.
              </h1>
              <p className="text-white mt-2 text-sm leading-5">
                Food is not just nourishment, but a connection to people,
                places, and memories that make life delicious.
              </p>
            </div>
          </div>
          <div></div>
        </section>
    </>
  );
};

export default Login;
