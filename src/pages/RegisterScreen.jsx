import React from 'react'
import blue from '../assets/imgs/blue.png'
import { Link, useNavigate } from 'react-router-dom';
import darkLogo from '../assets/imgs/dark-logo.png'
import lightLogo from '../assets/imgs/light-full-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../services/slices/userApiSlice';
import { setCredentiald } from '../services/slices/authSlice.js';

const RegisterScreen = () => {

    const {theme} = useSelector((state) => state.theme)
    const [register,{ isLoading, data, error }] = useRegisterMutation();
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async(event) => {
        event.preventDefault();
        let registerData = {
          firstName:event.target.firstname.value,
          lastName:event.target.lastname.value,
          username:event.target.username.value,
          email:event.target.email.value,
          password:event.target.password.value,
        
        }
       await register(registerData)
        .unwrap()
        .then((response) => {
          // Handle successful user creation
          dispatch(setCredentiald(response.result));
          navigate('/')

        })
        .catch((error) => {
          // Handle user creation error
        });
       
      };
      
  return (
    
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      <section className=" ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="w-8 h-8 mr-2" src={theme == 'dark' ? darkLogo : lightLogo} alt="logo" />
      Socio
    </a>
    <div className="w-full bg-white rounded-lg shadow   md:mt-0 sm:max-w-md xl:p-0 dark:bg-secondary-dark dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
          <div className='grid grid-flow-col grid-cols-2 gap-3'>
           <div className="">
           <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">first Name  </label>
            <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joe" required />
           </div>
           <div className="">
           <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">last  Name  </label>
            <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="My" required />
           </div>
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-primary-dark dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-btn-yellow" href="#">Terms and Conditions</a></label>
            </div>
          </div>
          {
            isLoading ? 
          <button type="submit" className="w-full text-white bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-btn-gray  dark:focus:ring-primary-800">Creating...</button>
            
            
            :
          <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-btn-yellow  dark:focus:ring-primary-800">Create an account</button>

          }
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-btn-yellow">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default RegisterScreen