import React from "react";
import { NavLink } from "react-router-dom";
import dash from "../../assets/icons/dash.png";
import exam from "../../assets/icons/exam.png";
import profile from "../../assets/icons/profile.png";
import results from "../../assets/icons/results.png";
import setting from "../../assets/icons/setting.png";
import user from "../../assets/icons/user.png";
import voucher from "../../assets/icons/voucher.png";
// import transaction from "../../assets/icons/transaction.png";
import support from "../../assets/icons/support.png";
import transaction from "../../assets/icons/trans.png";
import reports from "../../assets/icons/reports.jpeg";
import proctoring from "../../assets/icons/proctoring.png";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`fixed z-40 h-full bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          sm:w-56 w-72 md:translate-x-0`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col gap-10 mt-5">
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/">
              <img src={dash} alt="" className="rounded-md" />
            </NavLink>
            <NavLink to="/">
              <span className="">Dashboard</span>
            </NavLink>
          </div>
          {/* User */}
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/users">
              <img src={user} alt="user" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="/users">
              <span className="">Users</span>
            </NavLink>
          </div>
          {/* Other Links */}
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/exams">
              <img src={exam} alt="exams" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="/exams">
              <span className="">Exams</span>
            </NavLink>
          </div>
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/voucher">
              <img src={voucher} alt="voucher" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="/voucher">
              <span className="">Vouchers</span>
            </NavLink>
          </div>
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/payment">
              <img
                src={transaction}
                alt="results"
                className="rounded-md w-10"
              />
            </NavLink>
            <NavLink to="/payment">
              <span className="">Payment & Transaction</span>
            </NavLink>
          </div>
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/proctoring">
              <img src={proctoring} alt="results" className="rounded-md w-10" />
            </NavLink>
            <NavLink to="/proctoring">
              <span className="">Proctoring Management</span>
            </NavLink>
          </div>
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/reports-analytics">
              <img
                src={reports}
                alt="reportsanalysis"
                className="rounded-md w-8"
              />
            </NavLink>
            <NavLink to="/reports-analytics">
              <span className="">Reporting and Analytics</span>
            </NavLink>
          </div>
          <div
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
          >
            <NavLink to="/support">
              <img src={support} alt="support" className="rounded-md w-8" />
            </NavLink>
            <NavLink to="/support">
              <span className="">Support Requests</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Overlay for mobile to close sidebar */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
