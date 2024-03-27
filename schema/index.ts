import * as z from 'zod';

export const RegisterSchema = z.object({
    firstName: z.string().min(1,{
        message: "Enter Your First Name"
    }),
    lastName: z.string().min(1,{
        message: "Enter Your Last Name"
    }),
    email: z.string().email({
        message: "Enter your E-mail"
    }),
    password: z.string().min(6,{
        message: "Password must be of 6 characters."
    }),
    confirmpassword: z.string().min(6,{
        message: "Password must be of 6 characters."
    }),
}).refine((data)=>{
    return data.password === data.confirmpassword
},{
    message: "Passwords do not match",
    path: ["confirmpassword"]
})

export const LoggedInSchema = z.object({
    email: z.string().email({
        message: "E-mail is required"
    }),
    password: z.string().min(6,{
        message: "Password must be of 6 characters."
    })
})

export const IncomeSchema = z.object({
    title: z.string().min(1,{
        message: "Please enter a title."
    }),
    description: z.string().min(1,{
        message:"Describe to remember."
    }),
    amount: z.string().min(1,{
        message: "Enter your amount"
    }),
})

export const ExpenseSchema = z.object({
    title: z.string().min(1,{
        message: "Please enter a title."
    }),
    description: z.string().min(1,{
        message:"Describe to remember."
    }),
    amount: z.string().min(1,{
        message: "Enter your amount"
    }),
    category: z.enum(["Entertainment","Food","Fuel","Others"]),
})

export type ExpenseType = z.infer<typeof ExpenseSchema>
export type IncomeType = z.infer<typeof IncomeSchema>
export type RegisterType = z.infer<typeof RegisterSchema>
export type LogggedInType = z.infer<typeof LoggedInSchema>