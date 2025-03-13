import React from "react";
import SystemNotification from "./SystemNotification";
import UserSpecificAlerts from "./UserSpecificAlerts";
import AutoAlerts from "./AutoAlerts";

const NotificationTab = ({ currentTab }) => {
  return (
    <>
      {currentTab == "1" ? (
        <SystemNotification />
      ) : currentTab == "2" ? (
        <UserSpecificAlerts />
      ) : (
        <AutoAlerts />
      )}
    </>
  );
};

export default NotificationTab;
