import React from "react";
import SupportTickets from "./SupportTickets";
import FAQmangement from "./FAQmangement";

const SupportTab = ({ currentTab }) => {
  return <>{currentTab == 1 ? <SupportTickets /> : <FAQmangement />}</>;
};

export default SupportTab;
