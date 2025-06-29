import React from "react";
import { assets } from "../assets/assets";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <section className="flex w-full relative">
        <div className="h-screen fixed ">
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
              Food is not just nourishment, but a connection to people, places,
              and memories that make life delicious.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-2/3 absolute left-1/4">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Login;
