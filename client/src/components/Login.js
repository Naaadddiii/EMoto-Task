import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-indigo-600 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold">BASE</h1>
        <div className="flex space-x-4 mt-8">
          <a href="#" className="text-white text-2xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-white text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white text-2xl">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center px-16">
        <h2 className="text-3xl font-semibold mb-6">Sign In</h2>

        <button
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mb-4 hover:bg-gray-300"
          onClick={() =>
            (window.location.href = "http://localhost:5000/auth/google")
          }
        >
          Sign in with Google
        </button>

        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 py-2 px-4 w-full rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 py-2 px-4 w-full rounded-md mb-4"
        />

        <a href="#" className="text-blue-500 text-sm mb-4">
          Forgot password?
        </a>

        <button
          className="bg-indigo-600 text-white py-2 px-4 w-full rounded-md"
          onClick={handleLogin}
        >
          Sign In
        </button>

        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
