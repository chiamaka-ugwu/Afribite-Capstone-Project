import logo from "./logo.png";
import arrow_down from "./keyboard_arrow_down.png";
import search from "./search.png";
import dinner_plate from "./dinner-food.png";
import deliciousMeal1 from "./delicious-meal-1.png";
import deliciousMeal2 from "./delicious-meal-2.png";
import menuLogo from "./logo2.png";
import whiteArrow from "./white-arrow-down.png";
import whiteSearch from "./white-search.png";
import person from "./person-coloured.png";
import cartCloured from "./cart-coloured.png";
import amala from './Amala.png'
import eba from "./Eba.png";
import fufu from "./Fufu.jpg";
import jollof from "./Jollof-rice.jpg";
import moimoi from "./Moimoi.jpg";
import wheat from "./Wheat.png";
import google from "./google.png";
import show from "./show.png";
import hide from "./hide.png";
import mail from "./mail.png";
import lock from "./lock.png";
import category from "./category.png";
import personBlack from "./person.png";
import cart from "./cart.png";


export const assets = {
  logo,
  arrow_down,
  search,
  dinner_plate,
  deliciousMeal1,
  deliciousMeal2,
  menuLogo,
  whiteArrow,
  whiteSearch,
  person,
  cartCloured,
  google,
  show,
  hide,
  mail,
  lock,
  category,
  personBlack,
  cart,
};

export const Categories = [
  "All",
  "Swallow",
  "Soups",
  "Rice",
  "Proteins",
  "BBQ",
  "Grilled",
  "Sides",
  "Snacks",
];

export const meals  = [
  {
    mealImage: amala,
    title: "Amala +Ewedu +Gbegiri +2...",
    description:
      "A delicious bowl of hot sizling bowl of Amala & Ewedu with proteins",
    price: "50.00",
  },
  {
    mealImage: eba,
    title: "Garri + Afang soup",
    description:
      "One large portion of hot garri with afang soup + variety of protein.",
    price: "95.00",
  },
  {
    mealImage: fufu,
    title: "Fufu + Efo riro",
    description:
      "A delicious bowl of hand pounded fufu and a combination of freshly picked efo with proteins",
    price: "85.00",
  },
  {
    mealImage: jollof,
    title: "Jollof rice & green peas",
    description:
      "A delicious one portion of hot spicy jollof rice & green peas vegetable.",
    price: "30.00",
  },
  {
    mealImage: moimoi,
    title: "Moin moin + Fish + Egg",
    description:
      "One medium sized portion of freshy baked moin-moin and titus fish and eggs.",
    price: "30.00",
  },
  {
    mealImage: wheat,
    title: "Wheat + Vegetable soup",
    description:
      "A tantalizing and appealing bowl of wheat and  organic vegetables with a variety of proteins. ",
    price: "90.00",
  },
];

export const menuDetails = [
  {
    id: 1,
    image: amala,
    title: "Amala, Ewedu and Gbegiri",
    calories: "180",
    fat: "10.3g",
    carb: "7g",
    protein: "18.49g",
    description:
      "There are 180 calories in a plate of amala, ewedu and gbegiri.",
    warning: "Palm oil is an ingredient.",
  },
  {
    id: 2,
    image: eba,
    title: "Garri and Afang soup",
    calories: "180",
    fat: "10.3g",
    carb: "7g",
    protein: "18.49g",
    description: "There are 180 calories in a plate of garri and afang soup.",
    warning: "Palm oil is an ingredient.",
  },
  {
    id: 3,
    image: fufu,
    title: "Fufu and Efo riro",
    calories: "180",
    fat: "10.3g",
    carb: "7g",
    protein: "18.49g",
    description: "There are 180 calories in a plate of fufu and efo riro.",
    warning: "Palm oil is an ingredient.",
  },
  {
    id: 4,
    image: jollof,
    title: "Jollof rice and chicken",
    calories: "180",
    fat: "10.3g",
    carb: "7g",
    protein: "18.49g",
    description:
      "There are 180 calories in a plate of jollof rice and chicken.",
    warning: "Groundnut oil is an ingredient.",
  },
  {
    id: 5,
    image: moimoi,
    title: "Moin moin, Fish and Egg",
    calories: "180",
    fat: "10.3g",
    carb: "7g",
    protein: "18.49g",
    description: "There are 180 calories in a plate of moin moin.",
    warning: "Groundnut oil is an ingredient.",
  },
  {
    id: 6,
    image: wheat,
    title: "Wheat and Vegetable soup",
    calories: "180",
    fat: "10.3g",
    carb: "7g",
    protein: "18.49g",
    description: "There are 180 calories in a plate of wheat and vegetable soup.",
    warning: "Palm oil is an ingredient.",
  },
];

