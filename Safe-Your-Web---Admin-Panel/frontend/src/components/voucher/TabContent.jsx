import React from "react";
import ManageVoucher from "./ManageVoucher";
import Couponform from "./Couponform";
import Voucherform from "./Voucherform";

const TabContent = ({ currtab }) => {
  return (
    <>
      {currtab == "3" ? (
        <ManageVoucher/>
      ) : currtab == "2" ? (
        <Couponform/>
      ) : (
        <Voucherform/>
      )}
    </>
  );
};

export default TabContent;
