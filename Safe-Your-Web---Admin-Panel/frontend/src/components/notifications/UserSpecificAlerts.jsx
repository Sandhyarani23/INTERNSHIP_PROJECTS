import React from "react";
import autoalers from "./autoalers";

const UserSpecificAlerts = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User-Specific Alerts</h2>
        <p className="text-gray-600 mb-6">Send alerts to specific users</p>

        <form>
          <div className=" flex gap-10 flex-col">
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                User Email
              </label>
              <input
                type="email"
                name="title"
                placeholder="enter email"
                required
                className="mt-1 p-2 border border-gray-300 rounded outline-none"
              />
            </div>
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Alert Message
              </label>
              <textarea
                spellCheck="true"
                rows="5"
                placeholder="Alert Message"
                className="mt-1 p-2 border border-gray-300 rounded outline-none"
              />
            </div>
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Schedule Date
              </label>
              <input
                type="date"
                name="title"
                placeholder="Notification Title"
                required
                className="mt-1 p-2 border border-gray-300 rounded outline-none cursor-pointer"
              />
            </div>
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Target Users
              </label>
              <select
                name="examType"
                // value={filters.examType}
                // onChange={handleFilterChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              >
                <option value="">All Users</option>
                <option value="General">Premium Users </option>
                <option value="Specialized">Free Users </option>
              </select>
            </div>
          </div>
          <button className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800 my-5">
            Create Notification
          </button>
        </form>
      </div>
    </>
  );
};

export default UserSpecificAlerts;
