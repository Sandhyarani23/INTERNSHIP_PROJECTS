import React from "react";

const CreateExam = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-1">Create New Exam</h2>
        <p className="text-gray-600 mb-6">Set up a new certification exam</p>

        <form>
          <div className=" flex gap-10 flex-col">
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Exam Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="enter exam title"
                required
                className="mt-1 p-2 border border-gray-300 rounded outline-none"
              />
            </div>
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Total number of questions
              </label>
              <input
                type="number"
                name="title"
                placeholder="enter questions"
                required
                className="mt-1 p-2 border border-gray-300 rounded outline-none"
              />
            </div>
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Time Limit
              </label>
              <input
                type="number"
                name="title"
                placeholder="enter time limit"
                required
                className="mt-1 p-2 border border-gray-300 rounded outline-none"
              />
            </div>
            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Passing Criteria (%)
              </label>
              <input
                type="text"
                name="title"
                placeholder="enter pasing criteria"
                required
                className="mt-1 p-2 border border-gray-300 rounded outline-none"
              />
            </div>

            <div className=" flex flex-col  ">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                spellCheck="true"
                rows="5"
                placeholder="Description"
                className="mt-1 p-2 border border-gray-300 rounded outline-none"
              />
            </div>
            <button className="font-bold text-xl bg-gray-900 rounded-lg text-white p-3">
              Create Exam
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateExam;
