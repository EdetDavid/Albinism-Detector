import React, { useState } from "react";
import axios from "axios"; 

const Optimize = () => {
  const [formData, setFormData] = useState({
    populationSize: "",
    mutationRate: "",
    generations: "",
  });
  const [optimizationResult, setOptimizationResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOptimize = (formData) => {
    axios
      .post("http://localhost:8000/api/optimize/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          return response.data;
        } else {
          throw new Error("Optimization request failed");
        }
      })
      .then((data) => {
        setOptimizationResult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOptimize(formData);

    setFormData({
      populationSize: "",
      mutationRate: "",
      generations: "",
    });
  };

  return (
    <div className="container mx-auto p-4  ">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Genetic Algorithm Optimization
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
        <div className="mb-4">
          <label className="block text-lg text-white">Population Size:</label>
          <input
            type="number"
            name="populationSize"
            value={formData.populationSize}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-white">Mutation Rate:</label>
          <input
            type="number"
            step="0.01"
            name="mutationRate"
            value={formData.mutationRate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-white">Generations:</label>
          <input
            type="number"
            name="generations"
            value={formData.generations}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover-bg-blue-700"
          >
            Optimize
          </button>
        </div>
      </form>

      {optimizationResult && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Optimization Result</h2>
          <pre className="p-4 border rounded bg-gray-100">
            {JSON.stringify(optimizationResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Optimize;
