import * as z from 'zod';

export const ExInSchema = z.object({
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

export type ExInType = z.infer<typeof ExInSchema>