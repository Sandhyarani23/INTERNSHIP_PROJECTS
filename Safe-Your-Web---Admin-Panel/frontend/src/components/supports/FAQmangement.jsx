import React from "react";

const FAQmangement = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-1">Support Tickets</h2>
        <p className="text-gray-600 mb-6">
          Manage and respond to user support requests
        </p>

        <button className="font-bold text-white text-xl bg-black py-1 px-3 rounded-md">
          + Add New FAQ
        </button>

        <div>
          <div className="w-full   shadow-2xl border-black border-2 rounded-md shadow-gray-300 mt-10 p-4">
            <h1 className=" font-bold text-3xl ">
              How do I reset my password?
            </h1>
            <p>
              You can reset your password by clicking on the 'Forgot Password'
              link on the login page.
            </p>
            <div className=" flex  justify-end gap-5">
              <button className=" text-black bg-green-400 px-3 py-1 rounded-md font-bold">
                Edit
              </button>
              <button className=" text-black bg-red-400 px-3 py-1 rounded-md font-bold">
                Delete
              </button>
            </div>
          </div>
          <div className="w-full   shadow-2xl border-black border-2 rounded-md shadow-gray-300 mt-10 p-4">
            <h1 className=" font-bold text-3xl ">
              How do I reset my password?
            </h1>
            <p>
              You can reset your password by clicking on the 'Forgot Password'
              link on the login page.
            </p>
            <div className=" flex  justify-end gap-5">
              <button className=" text-black bg-green-400 px-3 py-1 rounded-md font-bold">
                Edit
              </button>
              <button className=" text-black bg-red-400 px-3 py-1 rounded-md font-bold">
                Delete
              </button>
            </div>
          </div>
          <div className="w-full   shadow-2xl border-black border-2 rounded-md shadow-gray-300 mt-10 p-4">
            <h1 className=" font-bold text-3xl ">
              How do I reset my password?
            </h1>
            <p>
              You can reset your password by clicking on the 'Forgot Password'
              link on the login page.
            </p>
            <div className=" flex  justify-end gap-5">
              <button className=" text-black bg-green-400 px-3 py-1 rounded-md font-bold">
                Edit
              </button>
              <button className=" text-black bg-red-400 px-3 py-1 rounded-md font-bold">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQmangement;
