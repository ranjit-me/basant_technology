import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "./Day2/Student";
import MapProductes from "./Day2/MapProducts";
import MovieBooking from "./Day3/MovieBooking";
import Day4 from "./Day4/Day4";
import Day5 from "./Day5/day5";
import Day6 from "./Day6/day6";
import Day7 from "./Day7/day7";
const PropRoute = () => {
  const students = [
    { name: "Ranjit", age: "20", isStudent: true },
    { name: "Rahul", age: 22, isStudent: true },
    { name: "Priya", age: 21, isStudent: false },
  ];

  const products = [
    {
      name: "Google Pixel 9A (Porcelain, 256 GB)",
      rating: "4.5 ⭐ 8,289 Ratings & 548 Reviews",
      price: "₹39,999",
      oldprice: "₹49,999",
      offer: "20% off",
      image:
        "https://smpl-prod-app-v2.gumlet.io/product_img/18699/1744790011_YUU.jpg",
      details: [
        "8 GB RAM | 256 GB ROM",
        "15.96 cm (6.28 inch) Full HD+ Display",
        "48MP + 12MP Camera",
        "5100 mAh Battery",
        "Tensor G4 Processor",
        "1 Year Warranty",
      ],
    },
    {
      name: "Google Pixel 9A (Porcelain, 256 GB)",
      rating: "4.5 ⭐ 8,289 Ratings & 548 Reviews",
      price: "₹39,999",
      oldprice: "₹49,999",
      offer: "20% off",
      image:
        "https://smpl-prod-app-v2.gumlet.io/product_img/18699/1744790011_YUU.jpg",
      details: [
        "8 GB RAM | 256 GB ROM",
        "15.96 cm (6.28 inch) Full HD+ Display",
        "48MP + 12MP Camera",
        "5100 mAh Battery",
        "Tensor G4 Processor",
        "1 Year Warranty",
      ],
    },
    {
      name: "Google Pixel 9A (Porcelain, 256 GB)",
      rating: "4.5 ⭐ 8,289 Ratings & 548 Reviews",
      price: "₹39,999",
      oldprice: "₹49,999",
      offer: "20% off",
      image:
        "https://smpl-prod-app-v2.gumlet.io/product_img/18699/1744790011_YUU.jpg",
      details: [
        "8 GB RAM | 256 GB ROM",
        "15.96 cm (6.28 inch) Full HD+ Display",
        "48MP + 12MP Camera",
        "5100 mAh Battery",
        "Tensor G4 Processor",
        "1 Year Warranty",
      ],
    },
  ];

  const Moviedata = [
    {
      name: "Captain America",
      des: "The Winter solder",
      imageurl:
        "https://c4.wallpaperflare.com/wallpaper/328/294/532/iron-man-and-captain-america-civil-war-movie-hd-desktop-wallpaper-2560×1440-wallpaper-preview.jpg",
      desc: "Steve Rogers teams up with Natasha Romanoff, aka Black Widow, to battle a powerful yet shadowy enemy in present-day Washington, D.C.",
    },
  ];

  return (
    <div>
      <Routes>
        <Route
          path="/student"
          element={
            <div>
              {students.map((item, index) => (
                <Student
                  key={index}
                  name={item.name}
                  age={item.age}
                  isStudent={item.isStudent}
                />
              ))}
            </div>
          }
        />
        <Route path="/product" element={<MapProductes products={products} />} />
        <Route path="/movie" element={<MovieBooking obj={Moviedata} />} />
        <Route path="/dayfour" element={<Day4 />} />
        <Route path="/dayfive" element={<Day5 />} />
        <Route path="/daysix" element={<Day6 />} />
        <Route path="/dayseven" element={<Day7 />} />
      </Routes>
    </div>
  );
};

export default PropRoute;
