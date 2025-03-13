import React, { useState } from "react";
import { users } from "./content";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Filter users based on the search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <div className=" min-h-[100vh] md:ml-48 p-10">
        <h1 className='text-2xl ml-10  pb-10 font-bold mb-4'>User Management</h1>
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
                  Name
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Email
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Registration Date
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Status
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Exam Taken
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
                    {user.name}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.email}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.registratinoDate}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.status}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.examTaken}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    <button
                      onClick={() => handleEditClick(user)}
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

        {/* Popup for user options */}
        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="bg-gray-400 p-6 rounded-lg w-[300px]">
              <h2 className="text-lg font-bold mb-4">
                Actions for {selectedUser.name}
              </h2>
              <ul>
                <li
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => alert("View Profile clicked")}
                >
                  View profile
                </li>
                <li
                  className="cursor-pointer hover:text-blue-500 mt-2"
                  onClick={() => alert("Suspend User clicked")}
                >
                  Suspend user
                </li>
                <li
                  className="cursor-pointer hover:text-blue-500 mt-2"
                  onClick={() => alert("Delete User clicked")}
                >
                  Delete user
                </li>
              </ul>
              <button
                onClick={handleClosePopup}
                className="mt-4 text-blue-500 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserManagement;
