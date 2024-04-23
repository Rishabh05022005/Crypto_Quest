import { React } from 'react';
import img1 from '../assets/hero.png';

const LoginForm = () => (
    <form action="#" method="POST" className="space-y-4">
    <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-500 transition-colors duration-300"/>
    </div>
    <div >
        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-500 transition-colors duration-300"/>
    </div>
        <div >
        <button type="submit" className="w-full mt-8 bg-yellow-500 text-white p-2 rounded-full shadow-lg ">Sign Up</button>
    </div>
    </form>
);

const Login = () => (
    <div className="flex h-screen">
    <div className="w-full bg-[#1A1916] lg:w-1/2 flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-semibold mb-3 text-white text-center">Welcome</h1>
        <h1 className="text-sm font-semibold mb-6 text-white text-center">Please Login to your accoount </h1>
        <LoginForm />
      </div>
    </div>
    <div className="hidden lg:flex items-center justify-center flex-1 bg-[#F3F3F369] text-black">
      <div className="max-w-md text-center">
        <img src={img1} alt="Crypto Quest Image" className="w-full h-auto" />
      </div>
    </div>
  </div>
);

export default Login;