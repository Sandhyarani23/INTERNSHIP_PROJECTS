import React from 'react'
import UserReports from './UserReports'
import ExamPerformance from './ExamPerformance'
import Transactions from './Transactions'
import SuspiciousActivity from './SuspiciousActivity'

const TabContent = ({currtab}) => {
  return (
    <>
      {currtab == "1" ? (
        <UserReports/>
      ) : currtab == "2" ? (
        <ExamPerformance/>
      ) : currtab=="3" ? (
        <Transactions/>
      ): (
        <SuspiciousActivity/>
      ) }
    </>
  )
}

export default TabContent
