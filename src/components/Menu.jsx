import React from "react";
import { Categories, meals } from "../assets/assets";

const Menu = () => {
  return (
    <>
      <section className="flex w-11/12 mx-auto justify-between py-12">
        <div className=" w-1/5">
          <h1 className="text-3xl mb-4">Filters</h1>
          <h2 className="text-2xl mb-4">Categories</h2>
          <ul className="space-y-4">
            {Categories.map((category, index) => (
              <li key={index} className="flex text-sm gap-3 items-center">
                <input type="checkbox" className="" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 flex flex-wrap gap-16">
          {meals.map(({ mealImage, title, description, price }, index) => (
            <div key={index} className="w-[45%] p-4 rounded-lg shadow-sm">
              <div className="h-80">
                <img src={mealImage} alt="food" />
              </div>
              <h1 className="text-2xl mb-2">{title}</h1>
              <p className="text-xs leading-6">{description}</p>
              <div className="flex justify-between items-end mt-4">
                <p className="text-2xl text-primary font-bold">{price}</p>
                <button className="bg-primary py-2 px-4 rounded-lg text-white text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
