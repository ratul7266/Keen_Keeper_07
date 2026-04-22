import React from "react";
import { Links } from "react-router";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-error">404!</h1>

        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
          Oops! Page not found
        </p>

        <p className="text-gray-500 mt-2 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-800 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
