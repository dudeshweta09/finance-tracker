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
import Dbcontroller from "../db-controller";
import { existInc, existExp, expValues, incValues } from "../db-controller";
import {ExpDisplay, IncDisplay} from "@/components/trans-display";
import { IncomeType, ExpenseType } from "../../../schema";
import { useRouter } from "next/navigation";
import IncomeForm from "@/components/income-form";
import ExpenseForm from "@/components/expense-form";

const TrackerPage = () => {
  const [incomeReceived, setIncomeReceived] = useState("0");
  const [isExpclicked, setIsExpClicked] = useState(false);
  const [isIncClicked, setIsIncClicked] = useState(false);
  const [existIncome, setExistIncome] = useState(existInc);
  const router = useRouter();
  useEffect(() => {
    let temp1 = existIncome.map(function (item: any) {
      return parseFloat(item.amount);
    });
    let temp2 = existExp.map(function (item: any) {
      return parseFloat(item.amount);
    });
    let sum1 = temp1.reduce(function (prev: any, next: any) {
      return prev + next;
    }, 0);
    let sum2 = temp2.reduce(function (prev: any, next: any) {
      return prev + next;
    }, 0);
    let sum3 = sum1 - sum2;
    setIncomeReceived(sum3.toString());
  }, [incomeReceived,setIncomeReceived,existExp,existIncome]);

  const onExpense = () => {
      setIsExpClicked(true);
  };
  const onIncome = () => {
    setIsIncClicked(true);
  };

  return (
    <>
      {isIncClicked && (
        <Model show={isIncClicked} onClose={setIsIncClicked}>
          <IncomeForm onSubmit={(data:IncomeType)=>{
           const updatedIncome = Dbcontroller.onAddInc(data,()=>{
              console.log(data);
              setIsIncClicked(false)
              setTimeout(() => {
                router.push("/trackerpage")
              }, 1000);
            })
            setExistIncome(updatedIncome);
          }} />
        </Model>
      )}
      {isExpclicked && (
        <Model show={isExpclicked} onClose={setIsExpClicked}>
          <ExpenseForm onSubmit={Dbcontroller.onAddExp}/>
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
                {incValues.map((income: any) => {
                  return (
                    <IncDisplay title={income.title} amount={income.amount} />
                  );
                })}
              </div>
              <div className="py-6">
                <h3 className="text-2xl">My Expense</h3>
                {expValues.map((expense: any) => {
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
  );
};

export default TrackerPage;
