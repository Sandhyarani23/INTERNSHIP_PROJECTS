import React from "react";
import courses from "./courses";

const EditExam = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-1">Create Voucher</h2>
        <p className="text-gray-600 mb-6">Create a new voucher for exams</p>

        <div className="overflow-x-auto mt-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-center p-3 border-b border-gray-700">
                  Exam title
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Total Question
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Duration
                </th>
                <th className="text-center p-3 border-b border-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((user, index) => (
                <tr key={index}>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.course}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.questions}
                  </td>
                  <td className="text-center p-3 border-b border-gray-700">
                    {user.duration}
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

export default EditExam;
