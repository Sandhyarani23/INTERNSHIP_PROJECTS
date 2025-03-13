import React from "react";
import scheduled from "./scheduled.js";

const Scheduled = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-1">Scheduled Exams</h2>
        <p className="text-gray-600 mb-6">View and manage upcoming exams</p>

        <div className="overflow-x-auto mt-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-center p-3 border-b border-gray-700">
                  Exam title
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Scheduled Date
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Status
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduled.map((user, index) => (
                <tr key={index}>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.course}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.date}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.status}
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

export default Scheduled;
