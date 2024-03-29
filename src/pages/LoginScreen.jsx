import React, { useState } from "react";
import blue from "../assets/imgs/blue.png";
import { Link, useNavigate } from "react-router-dom";
import darkLogo from "../assets/imgs/dark-logo.png";
import lightLogo from "../assets/imgs/light-full-logo.png";
import { UilEye } from "@iconscout/react-unicons";
import { UilEyeSlash } from "@iconscout/react-unicons";

import { useDispatch, useSelector } from "react-redux";
import {Input} from "@nextui-org/react";
import { useLoginMutation } from "../services/slices/authApiSlice";
import { setCredentiald } from "../services/slices/authSlice";
const LoginScreen = () => {
  const { theme } = useSelector((state) => state.theme);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch()
  const [login, {isLoading, error}] = useLoginMutation()
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Xử lý dữ liệu form đăng nhập tại đây
    let loginData = {
      email:event.target.email.value,
      password:event.target.password.value,
    
    }
   await login(loginData).unwrap()
   .then((response) => {
    // Handle successful user creation
    dispatch(setCredentiald(response.result));
    navigate('/')

  })
  .catch((error) => {
    // Handle user creation error
  });

    // Chuyển hướng đến '/'
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      <section className=" ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src={theme == "dark" ? darkLogo : lightLogo}
              alt="logo"
            />
            Socio
          </a>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-secondary-dark dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <p className="text-danger text-sm">        {error ?  'Email or password is invalid' : ''}
</p>
           
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-primary-dark dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-btn-yellow"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${isLoading ? 'dark:bg-btn-gray' : 'dark:bg-btn-yellow'}   dark:focus:ring-primary-800`}
                >
                 {isLoading ? 'Logging...' : 'Login'} 
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have account?{" "}
                  <Link
                    to={"/register"}
                    className="font-medium text-primary-600 hover:underline dark:text-btn-yellow"
                  >
                    Create an account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
