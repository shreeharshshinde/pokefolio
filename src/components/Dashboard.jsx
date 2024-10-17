import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#0a0118]">
      <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user?.username}!</h1>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
