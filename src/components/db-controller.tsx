"use client";
import {
  IncomeType,
  ExpenseType,
  LogggedInType,
  RegisterSchema,
  RegisterType,
} from "../../schema";

export const existExp = JSON.parse(localStorage.getItem("Fin_Exp_Add") || "[]");
export const existInc = JSON.parse(localStorage.getItem("Fin_Inc_Add") || "[]");
export const existAccount = JSON.parse(
  localStorage.getItem("Fin_Add_Account") || "[]"
);
export const expValues = Object.values(existExp);
export const incValues = Object.values(existInc);
export const accValues = Object.values(existAccount);

export default class Dbcontroller {
  static onAddExp = (value: ExpenseType) => {
    if (existExp) {
      const emailValue = Object.values(existExp);
      for (const id of emailValue) {
        if (id.title == value.title) {
          return;
        }
      }
    }
    existExp.push(value);
    localStorage.setItem("Fin_Exp_Add", JSON.stringify(existExp));
  };

  static onDeleteExp = (value: ExpenseType) => {
    let expData = JSON.parse(localStorage.getItem("Fin_Exp_Add")!)
    const updateExpense = {
      ...expData,
    }
    localStorage.setItem("Fin_Exp_Add", JSON.stringify(updateExpense));
  };

  static onAddInc = (value: IncomeType, callBack: () => void) => {
    if (existInc) {
      const emailValue = Object.values(existInc);
      for (const id of emailValue) {
        if (id.title == value.title) {
          return;
        }
      }
    }
    existInc.push(value);
    localStorage.setItem("Fin_Inc_Add", JSON.stringify(existInc));
    callBack();
    return existInc;
  };

  static onLogout = () => {
    localStorage.setItem("Fin_LoggeIn_ Key", JSON.stringify(false));
  };

  static onRegistration = (value: RegisterType) => {
    if (existAccount) {
      const emailValue = Object.values(existAccount);
      for (const id of emailValue) {
        if (id.email == value.email) {
          return alert("Account already exist");
        }
      }
    }
    existAccount.push(value);
    localStorage.setItem("Fin_Add_Account", JSON.stringify(existAccount));
  };

  static onLoggIn = (value: LogggedInType) => {
    const loggIn =
      existAccount?.filter((ud: RegisterType) => {
        return ud.email == value.email && ud.password == value.password;
      })?.length > 0;
    if (loggIn) {
      localStorage.setItem("Fin_LoggeIn_ Key", JSON.stringify(true));
    } else {
      alert("Invalid credentials");
    }
  };
}
