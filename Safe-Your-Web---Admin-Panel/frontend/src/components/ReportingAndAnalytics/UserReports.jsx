import React from 'react';

const UserReports = () => {
  return (
    <div className="w-full pr-10 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h1 className="text-2xl font-bold">User Reports</h1>
        <p className="text-gray-500">Overview of user statistics</p>

        <div className="flex items-center mt-4">
          <select className="border border-gray-300 rounded-md p-2 text-gray-700">
            <option value="CSV">CSV</option>
            <option value="PDF">PDF</option>
            <option value="Excel">Excel</option>
          </select>
          <button className="ml-4 flex items-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 4h5m-5 0v12M5 20h14"
              />
            </svg>
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserReports;
