'use client'
import HeaderComp from '@/components/header-comp'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import ExpDisplay from '@/components/exp-display';
import Model from '@/components/model';
import InputForm from '@/components/inp-form';
import { onAddExp } from '../db-controller';
import { onAddInc } from '../db-controller';


const TrackerPage = () => {
  const [isExpclicked, setIsExpClicked] = useState(false)
  const [isIncClicked, setIsIncClicked] = useState(false)
  const onExpense = () =>{
    setIsExpClicked(true);
  }
  const onIncome = () =>{
    setIsIncClicked(true);
  }
  return (
    <>
    {isIncClicked && (
      <Model show={isIncClicked} onClose={setIsIncClicked}>
        <InputForm onSubmit={onAddInc}/>
      </Model>
    )}
    {isExpclicked && (
      <Model show={isExpclicked} onClose={setIsExpClicked}>
        <InputForm onSubmit={onAddExp}/>
      </Model>
    )}
    <div className='bg-slate-900 h-screen text-white'>
<HeaderComp/>
<main className='container max-w-2xl px-6 mx-auto'>
<section className='py-6'>
  <small className='text-gray-400 text-md'>My Balance:</small>
  <h2 className='text-4xl font-bold'>
    <FontAwesomeIcon icon={faIndianRupeeSign}/>
    5000</h2>
</section>
<section className='flex items-center gap-2 py-3'>
  <Button
  onClick={()=>onIncome()}
  className='border border-green-300 text-green-300 hover:text-white transition-all duration-500 gap-1'>
    <FontAwesomeIcon icon={faArrowUp}/>
    Incomes 
  </Button>
  <Button
  onClick={()=>onExpense()}
  className='border border-red-500 text-red-500 hover:text-white transition-all duration-500 gap-1'>
    <FontAwesomeIcon icon={faArrowDown}/>
    Expenses
  </Button>
</section>

</main>
    </div>
    </>
  )
}

export default TrackerPage
