import React, { useState } from "react";

const ManageVoucher = () => {
  const vouchers = [
    {
      voucherName: "Basic Exam Voucher",
      examType: "General",
      examCode: "GEN101",
      validity: "2023-12-31",
      price: "$50",
      status: "Unused",
    },
    {
      voucherName: "Advanced Exam Voucher",
      examType: "Specialized",
      examCode: "SPE201",
      validity: "2023-12-31",
      price: "$100",
      status: "Used",
    },
  ];

  const [filters,setFilters]=useState({
    examType:"",
    status:""
  })

  const handleFilterChange=(e)=>{
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));

  }

  const filteredVouchers = vouchers.filter((voucher) => {
    const matchesExamType =
      filters.examType === "" || voucher.examType === filters.examType;
    const matchesStatus =
      filters.status === "" || voucher.status === filters.status;
    return matchesExamType && matchesStatus;
  });

  const handleRefund = (voucherName) => {
    alert(`Cancel/Refund for ${voucherName}`);
  };

  const handleBulkUpload = () => {
    alert(`Bulk Upload`);
  };

  const handleEmailVouchers = () => {
    alert(`Email Vouchers`);
  };

  return (
    <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Manage Voucher</h2>
      <p className="text-gray-600 mb-6">View and manage existing vouchers.</p>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <button
            className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
            onClick={handleBulkUpload}
          >
            Bulk Upload
          </button>
          <button
            className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
            onClick={handleEmailVouchers}
          >
            Email Vouchers
          </button>
        </div>
        <div className="mb-6 p-4  ">
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Exam Type</label>
            <select
              name="examType"
              value={filters.examType}
              onChange={handleFilterChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">All</option>
              <option value="General">General</option>
              <option value="Specialized">Specialized</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">All</option>
              <option value="Unused">Unused</option>
              <option value="Used">Used</option>
            </select>
          </div>
        </div>
      </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-4">Voucher Name</th>
              <th className="border-b p-4">Exam Type</th>
              <th className="border-b p-4">Exam Code</th>
              <th className="border-b p-4">Validity</th>
              <th className="border-b p-4">Price</th>
              <th className="border-b p-4">Status</th>
              <th className="border-b p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredVouchers.map((voucher, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="p-4">{voucher.voucherName}</td>
                <td className="p-4">{voucher.examType}</td>
                <td className="p-4">{voucher.examCode}</td>
                <td className="p-4">{voucher.validity}</td>
                <td className="p-4">{voucher.price}</td>
                <td className="p-4">{voucher.status}</td>
                <td className="p-4">
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => handleRefund(voucher.voucherName)}
                  >
                    Cancel/Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageVoucher;
