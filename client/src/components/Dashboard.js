import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import Modal from "./Modal";
import AddProfileForm from "./AddProfileForm";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    twitter: "",
  });

  // Fetch user profile
  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user data", err));
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:5000/logout", {
      credentials: "include",
    })
      .then(() => {
        window.location.href = "http://localhost:3000";
      })
      .catch((err) => console.error("Error logging out", err));
  };

  const handleSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/profile/save-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Profile saved successfully!");
        setShowModal(false);
      } else {
        alert("Failed to save profile.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Guest",
        data: [300, 400, 250, 500],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "User",
        data: [200, 300, 450, 350],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-blue-600 text-white w-1/5 flex flex-col justify-between p-6">
        <div className="text-3xl font-bold">Board.</div>
        <nav>
          <ul className="space-y-4">
            <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              Dashboard
            </li>
            <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              Transactions
            </li>
            <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              Schedules
            </li>
            <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              Users
            </li>
            <li className="hover:bg-blue-700 p-2 rounded-md cursor-pointer">
              Settings
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-center cursor-pointer">Help</p>
          <p className="text-center cursor-pointer">Contact Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-scroll">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="relative">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg px-4 py-2"
              />

              {user ? (
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="rounded-full cursor-pointer w-10 h-10"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
              ) : (
                <div>Loading...</div>
              )}
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Total Revenues</h3>
            <p className="text-2xl font-bold">$2,129,430</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Total Transactions</h3>
            <p className="text-2xl font-bold">1,520</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Total Likes</h3>
            <p className="text-2xl font-bold">9,721</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Total Users</h3>
            <p className="text-2xl font-bold">892</p>
          </div>
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Activities</h2>
            <Bar data={barData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Top Products</h2>
            <Doughnut data={doughnutData} />
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-6 py-2 rounded-lg"
        >
          Add New Profile
        </button>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddProfileForm initialData={profileData} onSubmit={handleSubmit} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
