"use client";
import HeaderComp from "@/components/header-comp";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Model from "@/components/model";
import InputForm from "@/components/inp-form";
import Dbcontroller from "../db-controller";
import { existInc, expValues, incValues } from "../db-controller";
import ExpDisplay from "@/components/exp-display";
import IncDisplay from "@/components/inc-display";

const TrackerPage = () => {
  const [incomeReceived, setIncomeReceived] = useState("0");
  const [isExpclicked, setIsExpClicked] = useState(false);
  const [isIncClicked, setIsIncClicked] = useState(false);
  useEffect(() => {
    let temp = existInc.map(function (item: any) {
      return parseFloat(item.amount);
    });
    let sum = temp.reduce(function (prev: any, next: any) {
      return prev + next;
    }, 0);
    setIncomeReceived(sum);
  }, [incomeReceived]);

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
          <InputForm onSubmit={Dbcontroller.onAddInc} />
        </Model>
      )}
      {isExpclicked && (
        <Model show={isExpclicked} onClose={setIsExpClicked}>
          <InputForm onSubmit={Dbcontroller.onAddExp}></InputForm>
        </Model>
      )}
      <div className="bg-slate-900 h-screen text-white">
        <HeaderComp />
        <main className="container max-w-2xl px-6 mx-auto">
          <section className="py-6">
            <small className="text-gray-400 text-md">My Balance:</small>
            <h2 className="text-4xl font-bold">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
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
              {incValues.map((income:any) => {
                return (
                  <IncDisplay title={income.title} amount={income.amount} />
                );
              })}
            </div>
            <div className="py-6">
              <h3 className="text-2xl">My Expense</h3>
              {expValues.map((expense:any) => {
                return (
                  <ExpDisplay title={expense.title} amount={expense.amount} />
                );
              })}
            </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TrackerPage;
