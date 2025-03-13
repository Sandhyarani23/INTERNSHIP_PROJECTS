import React from "react";
import autoalers from "./autoalers";
import { useState } from "react";

const AutoAlerts = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Auto Alerts</h2>
        <p className="text-gray-600 mb-6">
          Configure automatic alerts for specific events
        </p>

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
            {autoalers.map((user, index) => (
              <tr key={index}>
                <td className="text-center p-3 border-b border-gray-700">
                  {user.title}
                </td>
                <td className="text-center p-3 border-b border-gray-700">
                  {user.details}
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

        {/* later will see  */}
        {/* <div className="flex items-center space-x-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isToggled}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div
              className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 
            peer-checked:bg-black transition-all`}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform
              ${isToggled ? "translate-x-5" : "translate-x-0"}
            `}
              ></div>
            </div>
          </label>
          <span className="text-sm font-medium">
            {isToggled ? "ON" : "OFF"}
          </span>
        </div> */}
      </div>
    </>
  );
};

export default AutoAlerts;
