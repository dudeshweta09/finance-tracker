import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const IncDisplay = ({title, amount}) => {
  return (
          <div>
        <div className='flex items-center justify-between px-4 py-4 bg-slate-600 rounded-3xl my-2'>
            <div className='flex items-center gap-2'>
            <div className='w-[20px] h-[20px] rounded-full bg-green-400'/>
            <h4 className=' capitalize'>{title}</h4>
            </div>
                <p><FontAwesomeIcon icon={faIndianRupeeSign}/>{amount}</p>
        </div>
      </div>
  )
}

export default IncDisplay