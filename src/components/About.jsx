import React from "react";

const About = () => {
  return (
    <>
      <div className="flex-column bg-gray-100 min-h-screen flex items-center justify-center mt-5 p-5">
        <div className="bg-white rounded-lg p-8 shadow-md max-w-3xl w-full mb-5">
          <h1 className="text-2xl font-bold mb-4">About</h1>
          <p className="text-gray-700 mb-6">
            This project is a groundbreaking initiative aimed at leveraging the
            power of Genetic Algorithms to enhance our understanding of
            albinism.
          </p>
          <p className="text-gray-700 mb-6">
            Albinism is a genetic condition that affects the melanin production
            in the human body, resulting in a lack of pigmentation in the skin,
            hair, and eyes. It is a complex and diverse genetic disorder, and
            predicting its occurrence can be challenging.
          </p>
          <p className="text-gray-700 mb-6">
            Our research and development team has developed an innovative
            approach to predict the likelihood of albinism based on an
            individual's genetic markers. We utilize state-of-the-art Genetic
            Algorithm techniques to analyze genetic data and provide valuable
            insights for medical professionals, researchers, and individuals
            affected by albinism.
          </p>
          <p className="text-gray-700">
            Join us in our mission to make strides in albinism research and
            provide better tools for early diagnosis and personalized treatment
            options.
          </p>
        </div>
      </div>
      <footer
        style={{ backgroundColor: "#0f172a" }}
        className=" p-4 text-white text-center w-100  w-100 "
      >
        &copy; 2023 All Rights Reserved
      </footer>
    </>
  );
};

export default About;
