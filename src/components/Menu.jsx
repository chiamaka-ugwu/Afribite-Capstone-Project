import React, { useState } from "react";
import { Categories, meals, menuDetails } from "../assets/assets";
import MenuDetailModal from "./MenuDetailModal";

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const selectedDetail = menuDetails.find((item) => item.id === selectedId);

  return (
    <>
      {modalOpen && selectedDetail && (
        <MenuDetailModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          detail={selectedDetail}
        />
      )}
      <section className="flex flex-col md:flex-row w-11/12 mx-auto justify-between py-12">
        <div className="hidden md:block w-1/5">
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
        <div className="md:w-3/4 flex flex-col md:flex-row md:flex-wrap gap-16">
          {meals.map(({ mealImage, title, description, price }, index) => (
            <div
              key={index}
              className=" w-full md:w-[45%] p-4 rounded-lg shadow-sm"
              onClick={() => {
                // For demo, use index+1 as id; in real use, match with your menuDetails id
                setSelectedId(menuDetails[index]?.id || index + 1);
                setModalOpen(true);
              }}
            >
              <div className="h-80">
                <img src={mealImage} alt="food" />
              </div>
              <h1 className="text-2xl mb-2">{title}</h1>
              <p className="text-xs leading-6">{description}</p>
              <div className="flex justify-between items-end mt-4">
                <p className="text-2xl text-primary font-bold">€{price}</p>
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
