import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState('')
  const{user, logIn}=UserAuth()

  const navigate=useNavigate()

  const handleSubmit= async (e)=>{
      e.preventDefault();
      setError('')
      try{
        await logIn(email,password);
        setError(error.message)
        navigate('/')
      }catch(error){
        console.log(error)
      }
  }

  return (
    <>
    <div className='w-full h-screen relative'>
    <img
      className='hidden sm:block absolute w-full h-full object-cover'
      src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
      alt="bg"
    />
    <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-8 z-50 bg-black/75 text-white rounded-lg shadow-lg'>
      <div className='max-w-[450px] mx-auto'>
        <h1 className='text-3xl font-nsans-bold text-center'>LogIn</h1>
        {error ? <p className='p-3 bg-red-400 my-2'>{error}</p>: null}
        <form onClick={handleSubmit} className='mt-8'>
          <input 
            onChange={(e)=> setEmail(e.target.value)}
            className='w-full px-4 py-3 my-2 bg-gray-700 rounded-lg placeholder-gray-500 text-white focus:outline-none focus:ring focus:border-blue-300'
            type="email" 
            placeholder='Enter your Email' 
            autoComplete='email'
          />
          <input 
            onChange={(e)=> setPassword(e.target.value)}
            className='w-full px-4 py-3 my-2 bg-gray-700 rounded-lg placeholder-gray-500 text-white focus:outline-none focus:ring focus:border-blue-300'
            type="password" 
            placeholder='Enter Your Password' 
            autoComplete='current-password'
          />
          <button 
            className='w-full bg-red-600 py-3 mt-4 rounded-lg font-nsans-bold text-white focus:outline-none focus:ring focus:border-red-300 hover:bg-red-700 transition duration-300'
            type="submit"
          >
            Sign In
          </button>
          <div className='flex justify-between items-center text-sm text-gray-600 mt-4'>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox text-red-500 rounded" />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-red-500 hover:underline">Need Help?</a>
          </div>
          <p className='mt-6 text-sm text-gray-600 text-center'>
            <span className='mr-1'>New to Netflix?</span>
            <Link to="/signup" className="text-white hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Login
