import React from "react";
import { NavLink } from "react-router-dom";
import blog02 from "./assets/blog02.png";
import blog04 from "./assets/blog04.png";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center">
        <div className="w-full bg-white p-8 shadow-md">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold mb-4">
              Welcome to Albinism Detection
            </h1>
            <p className="text-gray-700 mb-6">
              This project aims at detecting albinism using advanced genetic
              data analysis. By analyzing specific genetic markers, our
              sophisticated algorithm provides accurate insights into an
              individual's likelihood of having albinism.
            </p>
            <div className="mb-8">
              <img
                src={blog02}
                alt="Laboratory"
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <NavLink
                to="/albinism-detector"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-decoration-none"
              >
                {"       Explore our Algorithm"}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div id="algorithm-section" className="bg-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Our Advanced Genetic Algorithm
          </h2>
          <p className="text-gray-700 mb-6">
            Our algorithm analyzes genetic markers associated with albinism. It
            uses NavLink tolex genetic model to accurately predict the
            likelihood of albinism in individuals. With NavLink tok record of
            high accuracy, our algorithm is trusted by experts in genetics and
            medical fields.
          </p>
          <div className="mb-8">
            <img src={blog04} alt="Laboratory" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      <div id="contact-section" className="bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Want to Learn More?</h2>
          <p className="text-gray-700 mb-6">
            If you have questions or would like to know more about our project
            and algorithm, please don't hesitate to get in touch. Our team is
            here to provide you with the information you need.
          </p>
          <div className="flex justify-center">
            <NavLink
              to="mailto:contact@albinismdetection.com"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-decoration-none "
            >
              Contact Us
            </NavLink>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
