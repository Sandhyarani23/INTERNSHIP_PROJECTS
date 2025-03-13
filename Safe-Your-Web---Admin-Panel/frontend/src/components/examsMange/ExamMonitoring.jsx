import React from "react";
import monitoring from "./monitoring";

const ExamMonitoring = () => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-center p-3 border-b border-gray-700">Name</th>
            <th className="text-center p-3 border-b border-gray-700">Email</th>
            <th className="text-center p-3 border-b border-gray-700">
              Registration Date
            </th>
            <th className="text-center p-3 border-b border-gray-700">Status</th>
            <th className="text-center p-3 border-b border-gray-700">
              Exam Taken
            </th>
            <th className="text-center p-3 border-b border-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {monitoring.map((user, index) => (
            <tr key={index}>
              <td className="text-center p-3 border-b border-gray-700">
                {user.examTitle}
              </td>
              <td className="text-center p-3 border-b border-gray-700">
                {user.user}
              </td>
              <td className="text-center p-3 border-b border-gray-700">
                {user.startTime}
              </td>
              <td className="text-center p-3 border-b border-gray-700">
                {user.proctoring}
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
  );
};

export default ExamMonitoring;
