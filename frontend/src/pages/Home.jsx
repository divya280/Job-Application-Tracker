import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-royalblue text-white flex flex-col">
      {/* Top Header Section */}
      <header className="w-full flex justify-end p-6 space-x-4">
        <button
          onClick={() => navigate("/signup")}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-200"
        >
          Wanna Join?
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-200"
        >
          Login
        </button>
      </header>

      {/* Center Content */}
      <main className="flex-grow flex flex-col justify-top items-center text-center px-4 gap-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Job Application Tracker
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl">
          Track your job applications easily — add, edit, and monitor your progress
          all in one place.
        </p>
      </main>

      {/* Footer */}
     
    </div>
  );
};

export default Home;
