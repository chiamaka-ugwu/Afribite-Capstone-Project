import React from "react";

const MenuDetailModal = ({ open, onClose, detail }) => {
  // if (!open || !detail) return null;

  return (
    <div
      className="bg-modal fixed w-full h-screen top-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-11/12 max-w-md mx-auto rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-b from-[#D94B8A] via-[#F15A29] to-white p-0">
          <div className="flex flex-col items-center pt-8 pb-4">
            <h2 className="text-white text-2xl font-semibold text-center mb-2">
              {detail.title}
            </h2>
            <div className="text-white text-xl font-bold mb-2">
              <span className="text-3xl">{detail.calories}</span> Calories
            </div>
          </div>
          <div className="flex justify-center -mb-16 z-10 relative">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-72 h-48 object-cover rounded-2xl border-4 border-white shadow-lg"
            />
          </div>
          <div className="bg-white rounded-t-3xl pt-20 pb-8 px-6 mt-[-2rem] shadow-lg">
            <p className="text-gray-600 text-center mb-6">
             {detail.description}
            </p>
            <div className="flex justify-between text-center mb-6">
              <div>
                <p className="text-gray-500 font-semibold">Fat</p>
                <p className="text-primary font-bold text-lg">{detail.fat}</p>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">Carb</p>
                <p className="text-primary font-bold text-lg">{detail.carb}</p>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">Protein</p>
                <p className="text-primary font-bold text-lg">
                  {detail.protein}
                </p>
              </div>
            </div>
            <p className="text-red-500 text-center font-semibold text-sm">
              Allergy Warning: {detail.warning}
            </p>
          </div>
          <button
            className="absolute top-1 right-2 text-white text-3xl font-medium z-20"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailModal;
