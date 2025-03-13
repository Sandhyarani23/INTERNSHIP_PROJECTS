import React from "react";
import system from "./System";

const SystemNotification = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">System Notifications</h2>
        <p className="text-gray-600 mb-6">
          Create and manage system-wide notifications
        </p>
        <form>
          <div className=" flex gap-10 flex-col">
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Notification Title"
                required
                className="mt-1 p-2 border border-gray-300 rounded outline-none"
              />
            </div>
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                spellCheck="true"
                rows="5"
                placeholder="Description"
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

        <div className="overflow-x-auto mt-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-center p-3 border-b border-gray-700">
                  Title
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Message
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Scheduled
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Target
                </th>
              </tr>
            </thead>
            <tbody>
              {system.map((user, index) => (
                <tr key={index}>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.title}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.details}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.impact}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    <button
                      // onClick={() => handleEditClick(user)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SystemNotification;
