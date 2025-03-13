import React, { useState } from "react";

const Voucherform = () => {
  const [inputs, setinputs] = useState({
    voucherName: "",
    examType: "",
    examCode: "",
    validityPeriod: "",
    price: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.voucherName &&
      inputs.examType &&
      inputs.examCode &&
      inputs.validityPeriod &&
      inputs.price
    ) {
      alert("Form Submitted");
      setinputs({
        voucherName: "",
        examType: "",
        examCode: "",
        validityPeriod: "",
        price: 0,
      });
    } else {
      alert("Fill in all the fields");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setinputs({
      voucherName: "",
      examType: "",
      examCode: "",
      validityPeriod: "",
      price: 0,
    });
  };

  return (
    <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-1">Create Voucher</h2>
      <p className="text-gray-600 mb-6">Create a new voucher for exams</p>
      <form onSubmit={handleSubmit} className="pr-10">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Voucher Name
          </label>
          <input
            type="text"
            placeholder="Enter voucher name"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={inputs.voucherName}
            onChange={(e) =>
              setinputs({ ...inputs, voucherName: e.target.value })
            }
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Exam Type
          </label>
          <select
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={inputs.examType}
            onChange={(e) => setinputs({ ...inputs, examType: e.target.value })}
          >
            <option value="" className="hover:cursor-pointer">
              Select exam type
            </option>
            <option value="General" className="hover:cursor-pointer">
              General
            </option>
            <option value="Specialized" className="hover:cursor-pointer">
              Specialized
            </option>
          </select>
        </div>

        <div className="mb-6">
          <label>Exam Code</label>
          <input
            type="text"
            placeholder="Enter coupon code"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={inputs.examCode}
            onChange={(e) => setinputs({ ...inputs, examCode: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Validity Period
          </label>
          <input
            type="date"
            placeholder="Enter validity period"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={inputs.validityPeriod}
            onChange={(e) =>
              setinputs({ ...inputs, validityPeriod: e.target.value })
            }
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter validity period"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={inputs.price}
            onChange={(e) =>
              setinputs({ ...inputs, price: Number(e.target.value) })
            }
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
          >
            Create Voucher
          </button>
        </div>
      </form>
    </div>
  );
};

export default Voucherform;
