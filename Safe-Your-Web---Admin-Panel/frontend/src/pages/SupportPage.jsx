import React, { useState } from "react";
import SupportTab from "../components/supports/SupportTab";

const SupportPage = () => {
  const [currentTab, setcurrtab] = useState("2");
  return (
    <>
      <div className="text-left  md:ml-56 ">
        <h1 className="text-2xl p-10 font-bold mb-4">
          Support & Help Desk Management
        </h1>

        <div className="flex gap-4 m-4">
          <button
            onClick={() => setcurrtab("1")}
            className={`px-4 py-2 ${
              currentTab == "1" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Support Tickets
          </button>
          <button
            onClick={() => setcurrtab("2")}
            className={`px-4 py-2 ${
              currentTab == "2" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            FAQ Mangement
          </button>
        </div>

        <SupportTab currentTab={currentTab} />
      </div>
    </>
  );
};

export default SupportPage;
