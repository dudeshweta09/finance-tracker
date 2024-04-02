"use client";
import HeaderComp from "@/components/header-comp";
import ChartStats from "@/components/chart";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Model from "@/components/modal";
import Dbcontroller from "../../components/db-controller";
import {ExpDisplay, IncDisplay} from "@/components/trans-display";
import { IncomeType, ExpenseType } from "../../../schema";
import { useRouter } from "next/navigation";
import IncomeForm from "@/components/income-form";
import ExpenseForm from "@/components/expense-form";
import AuthGuard from "@/components/auth-guard";

const TrackerPage = () => {
  const dbController = new Dbcontroller();

  const [incomeReceived, setIncomeReceived] = useState("0");
  const [isExpclicked, setIsExpClicked] = useState(false);
  const [isIncClicked, setIsIncClicked] = useState(false);
  const [existIncome, setExistIncome] = useState(
    dbController.getCurrentExistingIncome()
  );
  const [existExp, setExistExp] = useState(
    dbController.getCurrentExistingExpense()
  )
  const router = useRouter();

    useEffect(() => {
    const currentIncome  = dbController.getCurrentExistingIncome()
    const currentExpense = dbController.getCurrentExistingExpense()

    const totalIncome = currentIncome.reduce((prev:any, next:any)=>{
      return prev + parseFloat(next.amount)
    },0)

    const totalExpense = currentExpense.reduce((prev:any, next:any)=>{
      return prev + parseFloat(next.amount)
    },0)

    const balance = totalIncome - totalExpense
    setIncomeReceived(balance.toString())
    }, [dbController.existingIncome,
    dbController.existingExpense,
  setIncomeReceived,
  ]);

  const onExpense = () => {
      setIsExpClicked(true);
  };
  const onIncome = () => {
    setIsIncClicked(true);
  };

  return (
    <AuthGuard>
    <>
      {isIncClicked && (
        <Model show={isIncClicked} onClose={setIsIncClicked}>
          <IncomeForm onSubmit={(data:IncomeType)=>{
           dbController.onAddInc(data,()=>{
              setIsIncClicked(false)
              setExistIncome(dbController.getCurrentExistingIncome())
              router.refresh()
            })
          }} />
        </Model>
      )}
      {isExpclicked && (
        <Model show={isExpclicked} onClose={setIsExpClicked}>
          <ExpenseForm onSubmit={(data:ExpenseType)=>{
            dbController.onAddExp(data,()=>{
              setIsExpClicked(false)
              setExistExp(dbController.getCurrentExistingExpense())
              router.refresh()
            })
          }}/>
        </Model>
      )}
      <div className="bg-slate-900 h-full text-white">
        <HeaderComp />
        <main className="container max-w-2xl px-6 mx-auto">
          <section className="py-6">
            <small className="text-gray-400 text-md">My Balance:</small>
            <h2 className="text-4xl font-bold">
              <FontAwesomeIcon className="" icon={faIndianRupeeSign} />
              {incomeReceived}
            </h2>
          </section>
          <section className="flex items-center gap-2 py-3">
            <Button
              onClick={() => onIncome()}
              className="border border-green-300 text-green-300 hover:text-white transition-all duration-500 gap-1"
            >
              <FontAwesomeIcon icon={faArrowUp} />
              Incomes
            </Button>
            <Button
              onClick={() => onExpense()}
              className="border border-red-500 text-red-500 hover:text-white transition-all duration-500 gap-1"
            >
              <FontAwesomeIcon icon={faArrowDown} />
              Expenses
            </Button>
          </section>
          <section>
            <div className="grid grid-cols-2 gap-8">
              <div className="py-6">
                <h3 className="text-2xl">My Income</h3>
                {existIncome.map((income: any) => {
                  return (
                    <IncDisplay title={income.title} amount={income.amount} />
                  );
                })}
              </div>
              <div className="py-6">
                <h3 className="text-2xl">My Expense</h3>
                {existExp.map((expense: any) => {
                  return (
                    <ExpDisplay title={expense.title} amount={expense.amount} />
                  );
                })}
              </div>
            </div>
          </section>
          <h2 className=" text-2xl">Stats</h2>
          <div className=" py-2 w-1/2 mx-auto">
            <ChartStats />
          </div>
          <section></section>
        </main>
      </div>
    </>
    </AuthGuard>
  );
};

export default TrackerPage;
