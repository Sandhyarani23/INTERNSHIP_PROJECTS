import React from "react";
import CreateExam from "./CreateExam.jsx";
import EditExam from "./EditExam.jsx";
import ExamMonitoring from "./ExamMonitoring.jsx";
import Scheduled from "./Scheduled.jsx";

const ExamsTab = ({ currtab }) => {
  return (
    <>
      {currtab == "1" ? (
        <CreateExam />
      ) : currtab == "2" ? (
        <EditExam />
      ) : currtab == "3" ? (
        <ExamMonitoring />
      ) : (
        <Scheduled />
      )}
    </>
  );
};

export default ExamsTab;
