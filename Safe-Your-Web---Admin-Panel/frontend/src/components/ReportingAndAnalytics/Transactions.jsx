import React from 'react';
import {  transaction } from './content';

const Transactions = () => {
  return (
    <div className=" w-full flex justify-center items-center p-4">
      <div className="bg-white w-full  p-6 md:p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2 text-center md:text-left">Transaction Reports</h1>
        <p className="text-gray-500 mb-6 text-center md:text-left">Detailed Transaction Reports</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-gray-600 font-semibold">Transaction ID</th>
                <th className="py-2 px-4 text-gray-600 font-semibold">Date</th>
                <th className="py-2 px-4 text-gray-600 font-semibold">Type</th>
                <th className="py-2 px-4 text-gray-600 font-semibold">Amount</th>
                <th className="py-2 px-4 text-gray-600 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{transaction.transactionId}</td>
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.type}</td>
                  <td className="py-2 px-4">{transaction.amount}</td>
                  <td className="py-2 px-4">{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center md:justify-end mt-4">
          <button className="flex items-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 4h5m-5 0v12M5 20h14"
              />
            </svg>
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
