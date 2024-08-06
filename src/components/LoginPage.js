import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const validate = () => {
    let errors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    else if (password.length < 8) errors.password = 'Password must be at least 8 characters long';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, redirect to home page
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center pb-48 justify-center min-h-screen bg-gray-100">
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-6">
        <FaUserCircle
          id="account-icon"
          className="text-4xl text-gray-600"
        />
      </div>
      <div className="max-w-sm w-full bg-white p-6 border border-gray-300 rounded-lg shadow-lg mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && <p className="mt-1 text-red-500 text-xs">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href='/login'
            className="text-indigo-600 hover:text-indigo-700 text-sm"
          >
            Forgot Password?
          </a>
          <div className="mt-2">
            <span className="text-gray-600 text-sm">Don't have an account?</span>
            <a
              href='/login'
              className="text-indigo-600 hover:text-indigo-700 text-sm ml-1"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
