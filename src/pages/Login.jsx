import React from "react";
import { assets } from "../assets/assets";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row w-full relative">
        <div className="hidden md:block md:h-screen md:fixed">
          <img
            src={assets.deliciousMeal2}
            className="h-auto md:h-screen w-full md:rounded-br-2xl md:rounded-tr-2xl object-cover"
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
        <div className="flex justify-center w-full md:w-2/3 md:absolute md:top-8 md:left-1/4 ">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Login;
