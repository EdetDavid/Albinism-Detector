import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./footer";
import "../App.css";

const Form = () => {
  const [populationSize, setPopulationSize] = useState("");
  const [numGenerations, setNumGenerations] = useState("");
  const [numSelected, setNumSelected] = useState("");
  const [mutationRate, setMutationRate] = useState("");
  const [geneLength, setGeneLength] = useState("");
  const [Individuals, setIndividuals] = useState([]);
  const [showDiv, setShowDiv] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDiv(true);
    const data = {
      population_size: populationSize,
      num_generations: numGenerations,
      num_selected: numSelected,
      mutation_rate: mutationRate,
      gene_length: geneLength,
    };

    axios
      .post("https://albinism-detector.onrender.com/api/individuals/", data)
      .then((response) => {
        console.log(response.data.message); // Print the success message
        setPopulationSize("");
        setNumGenerations("");
        setNumSelected("");
        setMutationRate("");
        setGeneLength("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://albinism-detector.onrender.com/api/individuals/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setIndividuals(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [Individuals]);

  return (
    <>
      <div className="row overflow-hidden">
        <div className="col-7">
          <div
            id="form-wrapper"
            className="container mt-5 w-75 text-white bg-gray-400 rounded my-5 rounded-5  shadow"
          >
            <form onSubmit={handleSubmit} className="w-75 mx-auto">
              <div className="mb-3">
                <label
                  htmlFor="population-size text-dark"
                  className="form-label mt-5"
                >
                  Population Size:
                </label>
                <input
                  type="number"
                  id="population-size"
                  className="form-control"
                  value={populationSize}
                  onChange={(event) => setPopulationSize(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="num-generations" className="form-label">
                  Number of Generations:
                </label>
                <input
                  type="number"
                  id="num-generations"
                  className="form-control"
                  value={numGenerations}
                  onChange={(event) => setNumGenerations(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="num-selected" className="form-label">
                  Number of Selected Individuals:
                </label>
                <input
                  type="number"
                  id="num-selected"
                  className="form-control"
                  value={numSelected}
                  onChange={(event) => setNumSelected(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mutation-rate" className="form-label">
                  Mutation Rate:
                </label>
                <input
                  type="number"
                  id="mutation-rate"
                  step="0.01"
                  className="form-control"
                  value={mutationRate}
                  onChange={(event) => setMutationRate(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gene-length" className="form-label">
                  Gene Length:
                </label>
                <input
                  type="number"
                  id="gene-length"
                  className="form-control"
                  value={geneLength}
                  onChange={(event) => setGeneLength(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-light btn-outline-secondary mb-3"
              >
                {"Run"}
              </button>
            </form>

            <div>
              <br></br>
            </div>
          </div>
        </div>
        <div id="output" className="col-5 pe-3">
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center mx-auto">
            {showDiv && (
              <>
                <h2 className="text-dark mt-3  text-decoration-underline fw-bold mb-5 text-white">
                  {" Solutions"}
                </h2>
              </>
            )}
            <div className="  grid grid-cols-3 gap-4 justify-center justify-content-center align-items-center mx-auto overflow-auto  h-screen">
              {showDiv &&
                Individuals.map((individual) => (
                  <div className=" text-gray-200" key={individual.id}>
                    <p className=" text-gray-200">
                      {"ID: "} {individual.id}
                    </p>
                    <p className=" text-gray-200">
                      {" Gene Length: "} {individual.genes}
                    </p>
                    <p className=" text-gray-200">
                      {" Fitness Score: "}
                      {individual.fitness_score}
                    </p>
                    <p className=" text-gray-200">
                      {" Generation : "} {individual.generation}
                    </p>
                    <p className=" text-gray-200">
                      {"Has Albinism: "} {String(individual.has_albinism)}
                    </p>
                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Form;
