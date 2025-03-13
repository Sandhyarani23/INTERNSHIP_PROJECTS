import React, { useState } from "react";
import sprt from "./Support";

const SupportTickets = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on the search term
  const filteredUsers = sprt.filter(
    (user) =>
      user.Priority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.Status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.User.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-1">Support Tickets</h2>
        <p className="text-gray-600 mb-6">
          Manage and respond to user support requests
        </p>

        <div>
          <input
            type="text"
            placeholder="Search by name, email, or status"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 border-gray p-2 rounded-md w-[80%] md:w-[40%] outline-none"
          />
        </div>

        <div className="overflow-x-auto mt-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-center p-3 border-b border-gray-700">
                  User
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Subject
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Priority
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
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.User}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.Subject}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.Priority}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.Status}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.Actions.map((action, index) => {
                      return (
                        <button
                          key={index}
                          className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded-full mx-1"
                        >
                          {action}
                        </button>
                      );
                    })}
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

export default SupportTickets;
