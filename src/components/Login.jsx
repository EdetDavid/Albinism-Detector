import React, { useState, useEffect } from "react";
import APIService from "./APIService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [isLogin, setLogin] = useState(true);
  let [errorMessage, setErrorMessage] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (token["mytoken"] && token["mytoken"] !== "undefined") {
      navigate("/");
    }
  }, [token, navigate]);

  const loginBtn = () => {
    APIService.loginUser({ username, password })
      .then((resp) => setToken("mytoken", resp.token))
      .catch((error) => console.log(error) && setErrorMessage("Invalid Logins"));
  };

  const RegisterBtn = () => {
    APIService.RegisterUser({ username, email, password })
      .then(() => {
        loginBtn();
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Username or Email Already Taken");
      });
  };

  return (
    <div className="container">
      <div
        id="login-form"
        className=" flex flex-col justify-center items-center bg-gray-400 w-50 mx-auto rounded-5 shadow "
      >
        <br />
        <br />

        {isLogin ? (
          <>
            <h1 id="text-heading" className="text-red-500 font-bold">
              {"   Please Login"}
            </h1>

            <div className="mb-3 w-75">
              <label htmlFor="username" className="form-label text-white-50">
                {"  Username:"}
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control"
                id="username"
                placeholder="Please Enter Username"
                value={username}
              />
            </div>

            <div className="mb-3 w-75">
              <label htmlFor="password" className="form-label text-white-50">
                {"Password:"}
              </label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="form-control"
                id="password"
                placeholder="Please Enter Password"
                value={password}
              />
            </div>
          </>
        ) : (
          <>
            <h1 id="text-heading" className="text-red-500 font-bold">
              {" Please Register"}
            </h1>

            <div className="mb-3 w-75">
              <label htmlFor="username" className="form-label text-white-50">
                {"  Username:"}
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control"
                id="username"
                placeholder="Please Enter Username"
                value={username}
              />
            </div>

            <div className="mb-3 w-75">
              <label htmlFor="email" className="form-label text-white-50">
                {"  Email:"}
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="email"
                placeholder="Please Enter Email"
                value={email}
              />
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="password" className="form-label text-white-50">
                {"Password:"}
              </label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="form-control"
                David
                id="password"
                placeholder="Please Enter Password"
                value={password}
              />
            </div>
          </>
        )}

        {/* Submit Button */}

        {isLogin ? (
          <button
            id="submit-btn"
            onClick={loginBtn}
            className="  bg-gray-300 rounded p-2 mt-2 hover:text-red-500 mb-1"
          >
            {"Login"}
          </button>
        ) : (
          <button
            id="submit-btn"
            onClick={RegisterBtn}
            className="  bg-gray-300 rounded p-2 mt-2 hover:text-red-500 mb-1"
          >
            {"Register"}
          </button>
        )}

        <div className="mb-3">
          <br />
          {isLogin ? (
            <>
              <h6>
                {" Don't Have Account? Please: "}

                <button
                  onClick={() => setLogin(false)}
                  className="bg-red-800 p-2 text-white rounded hover:bg-red-400"
                >
                  {" Register "}
                </button>
              </h6>
            </>
          ) : (
            <>
              <h6>
                {" Have Account? Please:"}

                <button
                  onClick={() => setLogin(true)}
                  className="bg-red-800 p-2 text-white rounded hover:bg-red-400"
                >
                  {"Login "}
                </button>
              </h6>
            </>
          )}
        </div>
      </div>
      {errorMessage && (
        <h5 className="text-danger text-center mt-1 ">{errorMessage}</h5>
      )}
      <div className=" d-flex justify-content-center align-items-center  text-center  mt-5 ">
        <p className="text-center nav-link text-white">
          &copy; All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
