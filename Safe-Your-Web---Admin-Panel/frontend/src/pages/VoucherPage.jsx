import React, { useState } from 'react'
import TabContent from '../components/voucher/TabContent';

const VoucherPage = () => {

  const [currtab,setcurrtab]=useState("3");
  console.log(currtab)

  return (
    <>
        <div className='text-left  md:ml-56 '>
            <h1 className='text-2xl p-10 font-bold mb-4'>Voucher Management</h1>

            <div className='flex gap-4 m-4'>
                <button onClick={()=>setcurrtab("1")} className={`px-4 py-2 ${currtab=="1"?'bg-blue-500':'bg-gray-200'}  rounded`}>Create Voucher</button>
                <button onClick={()=>setcurrtab("2")} className={`px-4 py-2 ${currtab=="2"?'bg-blue-500':'bg-gray-200'}  rounded`}>Create Coupon</button>
                <button onClick={()=>setcurrtab("3")} className={`px-4 py-2 ${currtab=="3"?'bg-blue-500':'bg-gray-200'}  rounded`}>Manage Voucher</button>
            </div>

            <TabContent currtab={currtab}/>
        </div>
    </>
  )
}

export default VoucherPage
