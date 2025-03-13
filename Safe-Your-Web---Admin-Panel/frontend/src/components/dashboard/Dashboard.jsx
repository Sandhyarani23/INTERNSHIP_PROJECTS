import React from "react";
import { FaUsers } from "react-icons/fa6";
import { PiExam } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa6";
import { PiCurrencyInrBold } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { RiCoupon2Fill } from "react-icons/ri";
import DashCards from "./dashCards/DashCards";

const Dashboard = () => {
  return (
    <div className=" text-white bg-black min-h-[100vh] md:ml-48 p-10">
      <div className="flex items-center justify-center   flex-wrap gap-10">
        <DashCards
          heading={"Total users"}
          numbers={"500"}
          nexPage={"View all users"}
          nav={"/users"}
          icons={<FaUsers className="text-3xl" />}
        />
        <DashCards
          heading={"Scheduled exams"}
          numbers={"120"}
          nexPage={"Manage exams"}
          nav={"/exams"}
          icons={<PiExam className="text-3xl" />}
        />
        <DashCards
          heading={"Active vouchers"}
          numbers={"500"}
          nexPage={"Manage vouchers"}
          nav={"/voucher"}
          icons={<RiCoupon2Fill className="text-3xl" />}
        />
        <DashCards
          heading={"Transactions"}
          numbers={"500"}
          nexPage={"View all transactions"}
          nav={"/reports-analytics"}
          icons={<PiCurrencyInrBold className="text-3xl" />}
        />
        <DashCards
          heading={"Exams results"}
          numbers={"1000"}
          nexPage={"View all results"}
          nav={"/"}
          icons={<FaCalendarCheck className="text-3xl" />}
        />
        <DashCards
          heading={"Support requests"}
          numbers={"1000"}
          nexPage={"View support tickets"}
          nav="/support"
          icons={<BiSupport className="text-3xl" />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
