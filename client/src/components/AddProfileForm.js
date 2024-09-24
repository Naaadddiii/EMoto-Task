import React, { useState } from "react";

const AddProfileForm = ({ initialData, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <>
      {step === 1 ? (
        <>
          <h2 className="text-xl font-bold mb-4">Add New Profile</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={profileData.name}
            onChange={handleInputChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profileData.email}
            onChange={handleInputChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={profileData.phone}
            onChange={handleInputChange}
            className="border p-2 mb-4 w-full"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <input
            type="text"
            name="instagram"
            placeholder="Instagram ID"
            value={profileData.instagram}
            onChange={handleInputChange}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            name="twitter"
            placeholder="Twitter ID"
            value={profileData.twitter}
            onChange={handleInputChange}
            className="border p-2 mb-4 w-full"
          />
          <div className="flex justify-between">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => onSubmit(profileData)}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default AddProfileForm;
