import { ExpenseType } from "../../schema";

export const existExp = JSON.parse(
      localStorage.getItem("Fin_Exp_Add") || "[]"
    );

export const existInc = JSON.parse(
      localStorage.getItem("Fin_Inc_Add") || "[]"
    );

export const onAddExp = (value:ExpenseType) =>{
    if (existExp) {
      const emailValue = Object.values(existExp);
      for (const id of emailValue) {
        if (id.title == value.title) {
            return
        }
      }
    }
    existExp.push(value);
    localStorage.setItem("Fin_Exp_Add", JSON.stringify(existExp));
}

export const onAddInc = (value:ExpenseType) =>{
    if (existInc) {
      const emailValue = Object.values(existInc);
      for (const id of emailValue) {
        if (id.title == value.title) {
            return
        }
      }
    }
    existInc.push(value);
    localStorage.setItem("Fin_Inc_Add", JSON.stringify(existInc));
}



