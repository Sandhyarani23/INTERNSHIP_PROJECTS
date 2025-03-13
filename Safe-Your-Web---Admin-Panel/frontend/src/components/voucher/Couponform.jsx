import React, { useState } from "react";

const Couponform = () => {
  const [inputs, setinputs] = useState({
    couponcode: "",
    discountAmount: 0,
    validityPeriod: "",
    examType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.couponcode &&
      inputs.discountAmount &&
      inputs.validityPeriod &&
      inputs.examType
    ) {
      alert("Form Submitted");
      setinputs({
        couponcode: "",
        discountAmount: 0,
        validityPeriod: "",
        examType: "",
      });
    } else {
      alert("Fill in all the fields");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setinputs({
      couponcode: "",
      discountAmount: 0,
      validityPeriod: "",
      examType: "",
    });
  };

  return (
    <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-1">Create Coupon</h2>
      <p className="text-gray-600 mb-6">
        Create a new coupon code for discounts
      </p>
      <form onSubmit={handleSubmit} className="pr-10">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Coupon Code
          </label>
          <input
            type="text"
            placeholder="Enter coupon code"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={inputs.couponcode}
            onChange={(e) =>
              setinputs({ ...inputs, couponcode: e.target.value })
            }
          />
        </div>

        <div>
          <label>Discount Amount(%)</label>
          <input
            type="number"
            placeholder="Enter coupon code"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={inputs.discountAmount}
            onChange={(e) =>
              setinputs({ ...inputs, discountAmount: Number(e.target.value) })
            }
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
            Applicable Exam
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
            Create coupon
          </button>
        </div>
      </form>
    </div>
  );
};

export default Couponform;
