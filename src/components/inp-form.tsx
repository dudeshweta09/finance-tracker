"use client";
import CardWrapper from "./card-wrapper";
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
import { ExInSchema } from "../../schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";

const InputForm = ({ onSubmit }: any) => {
  const {toast} = useToast();
  const form = useForm<z.infer<typeof ExInSchema>>({
    resolver: zodResolver(ExInSchema),
    defaultValues: {
      title: "",
      description: "",
      amount: "",
    },
  });
  return (
    <CardWrapper label="" title="">
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
          <Button
          variant="outline"
          onClick={() => {
        toast({
          variant: "destructive",
          title: "Entry",
          description: "Entry submitted successfully",
        })
      }}
          >Submit</Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default InputForm;
