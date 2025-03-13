import React, { useState } from "react";
import ExamsTab from "../components/examsMange/ExamsTab";

const ExamMangement = () => {
  const [currtab, setcurrtab] = useState("4");
  return (
    <>
      <div className="text-left  md:ml-56 ">
        <h1 className="text-2xl p-10 font-bold mb-4">Exam Mangement</h1>

        <div className="flex gap-4 m-4">
          <button
            onClick={() => setcurrtab("1")}
            className={`px-4 py-2 ${
              currtab == "1" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Create Exam
          </button>
          <button
            onClick={() => setcurrtab("2")}
            className={`px-4 py-2 ${
              currtab == "2" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Edit Exam
          </button>
          <button
            onClick={() => setcurrtab("3")}
            className={`px-4 py-2 ${
              currtab == "3" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Monitoring
          </button>
          <button
            onClick={() => setcurrtab("4")}
            className={`px-4 py-2 ${
              currtab == "4" ? "bg-blue-500" : "bg-gray-200"
            }  rounded`}
          >
            Scheduled
          </button>
        </div>

        <ExamsTab currtab={currtab} />
      </div>
    </>
  );
};

export default ExamMangement;
