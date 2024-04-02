"use client";
import {
  IncomeType,
  ExpenseType,
  LogggedInType,
  RegisterType,
} from "../../schema";

export default class Dbcontroller {

  existingIncome: IncomeType[] = []
  existingExpense: ExpenseType[] = []
  existingAccount: RegisterType[] = []

  constructor(){
    this.existingIncome = JSON.parse(localStorage.getItem("Fin_Inc_Add")!) || []
    this.existingExpense = JSON.parse(localStorage.getItem("Fin_Exp_Add")!) || []
    this.existingAccount = JSON.parse(localStorage.getItem("Fin_Add_Account")!) || []
  }
  onAddExp = (value: ExpenseType, callBack: ()=> void) => {
    if (this.existingExpense) {
      const expValue = Object.values(this.existingExpense);
      for (const id of expValue) {
        if (id.title == value.title) {
          return alert("title exist")
        }
      }
    }
    this.existingExpense.push(value);
    localStorage.setItem("Fin_Exp_Add", JSON.stringify(this.existingExpense));
    callBack();
  };

  onDeleteExp = (title: string, callBack: ()=> void) => {
    let expData = JSON.parse(localStorage.getItem("Fin_Exp_Add")! || "[]")
  this.existingExpense = expData.filter((ud:ExpenseType)=>{
    return ud.title !== title
  })
  localStorage.setItem("Fin_Exp_Add", JSON.stringify(this.existingExpense))
  callBack();
  };

  
  onAddInc = (value: IncomeType, callBack: () => void) => {
    if (this.existingIncome) {
      const incValue = Object.values(this.existingIncome);
      for (const id of incValue) {
        if (id.title == value.title) {
          return alert("title already exist")
        }
      }
    }
    this.existingIncome.push(value);
    localStorage.setItem("Fin_Inc_Add", JSON.stringify(this.existingIncome));
    callBack();
  };

   onLogout = () => {
    localStorage.setItem("Fin_LoggeIn_ Key", JSON.stringify(false));
  };

  onRegistration = (value: RegisterType, callBack: () => void) => {
    if (this.existingAccount) {
      const accValue = Object.values(this.existingAccount);
      for (const id of accValue) {
        if (id.email == value.email) {
          return alert("Account already exist");
        }
      }
    }
    this.existingAccount.push(value);
    localStorage.setItem("Fin_Add_Account", JSON.stringify(this.existingAccount));
  };

  onLoggIn = (value: LogggedInType, callBack: () => void) => {
    const loggIn =
      this.existingAccount?.filter((ud: RegisterType) => {
        return ud.email == value.email && ud.password == value.password;
      })?.length > 0;
    if (loggIn) {
      localStorage.setItem("Fin_LoggeIn_ Key", JSON.stringify(true));
    } else {
      alert("Invalid credentials");
    }
    callBack();
  };

  getCurrentExistingIncome = () => {
    return this.existingIncome
  }

  getCurrentExistingExpense = () => {
    return this.existingExpense
  }
}
