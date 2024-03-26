"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IncomeSchema} from "../../schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
// import { useToast } from "@/components/ui/use-toast";
// import { useRouter } from "next/navigation";

const IncomeForm = ({ onSubmit }: any) => {
  // const { toast } = useToast();
  // const router = useRouter();
  // const handleToast = () => {
  //   toast({
  //     variant: "destructive",
  //     title: "Entry",
  //     description: "Entry submitted successfully",
  //   });
  //   router.push("/");
  // };
  const form = useForm<z.infer<typeof IncomeSchema>>({
    resolver: zodResolver(IncomeSchema),
    defaultValues: {
      title: "",
      description: "",
      amount: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Provide your exp title"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Describe to remeber the details"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter the amount"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit"
          className=" mt-2"
                 >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default IncomeForm;
