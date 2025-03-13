import React, { useState } from "react";
import NotificationTab from "../components/notifications/NotificationTab";

const Notifications = () => {
  const [currentTab, setCurrentTab] = useState("1");
  return (
    <>
      <div className="text-left  md:ml-56 ">
        <h1 className="text-2xl p-10 font-bold mb-4">
          Notifications & Alerts Management
        </h1>

        <div className="flex gap-4 m-4">
          <button
            onClick={() => setCurrentTab("1")}
            className={`px-4 py-2 ${
              currentTab == "1" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            System Notifications
          </button>
          <button
            onClick={() => setCurrentTab("2")}
            className={`px-4 py-2 ${
              currentTab == "2" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Users Alerts{" "}
          </button>
          <button
            onClick={() => setCurrentTab("3")}
            className={`px-4 py-2 ${
              currentTab == "3" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Auto Alerts{" "}
          </button>
        </div>

        <NotificationTab currentTab={currentTab} />
      </div>
    </>
  );
};

export default Notifications;
