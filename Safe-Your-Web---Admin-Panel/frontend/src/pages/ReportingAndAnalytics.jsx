import React, { useState } from "react";
import TabContent from "../components/ReportingAndAnalytics/TabContent";

const ReportingAndAnalytics = () => {
  const [currtab, setcurrtab] = useState("3");
  console.log(currtab);

  return (
    <>
      <div className="text-left  md:ml-56 ">
        <h1 className="text-2xl p-10 font-bold mb-4">
          Reporting And Analytics
        </h1>

        <div className="flex gap-4 m-4">
          <button
            onClick={() => setcurrtab("1")}
            className={`px-4 py-2 ${
              currtab == "1" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            User Reports
          </button>
          <button
            onClick={() => setcurrtab("2")}
            className={`px-4 py-2 ${
              currtab == "2" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Exam Performance
          </button>
          <button
            onClick={() => setcurrtab("3")}
            className={`px-4 py-2 ${
              currtab == "3" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Transactions
          </button>
          <button
            onClick={() => setcurrtab("4")}
            className={`px-4 py-2 ${
              currtab == "4" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Suspicious Acivity
          </button>
        </div>

        <TabContent currtab={currtab} />
      </div>
    </>
  );
};

export default ReportingAndAnalytics;
