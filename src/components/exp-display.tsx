import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const ExpDisplay = () => {
  return (
    <div className='py-6'>
      <h3 className='text-2xl'>My Expense</h3>
      <div>
        <div className='flex items-center justify-between px-4 py-4 bg-slate-600 rounded-3xl'>
            <div className='flex items-center gap-2'>
            <div className='w-[20px] h-[20px] rounded-full bg-red-400'/>
            <h4 className=' capitalize'>Exp.title</h4>
            </div>
            <p>
                <FontAwesomeIcon icon={faIndianRupeeSign}/>500
            </p>
        </div>
      </div>
    </div>
  )
}

export default ExpDisplay
