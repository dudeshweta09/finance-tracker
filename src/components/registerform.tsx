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
import { RegisterSchema, RegisterType } from "../../schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import CardWrapper from "./card-wrapper";
import { existAccount } from "@/app/db-controller";

const RegisterForm = () => {
  const { toast } = useToast();
  const router = useRouter();

const onRegistration = (value: RegisterType) => {

    if (existAccount) {
      const emailValue = Object.values(existAccount);
      for (const id of emailValue) {
        if (id.email == value.email) {
          return toast({
        variant: "destructive",
        description: "Account already exist",
      });
        }
      }
    }
    existAccount.push(value);
    localStorage.setItem("Fin_Add_Account", JSON.stringify(existAccount));
    toast({
        variant: "destructive",
        description: "Registration submitted successfully",
      });
      router.push("/");
  };

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password:"",
      confirmpassword:"",
    },
  });

    return (
    <CardWrapper label="Create an account" title="Register" backbuttonhref="/" backbuttonlabel="Back to login">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onRegistration)}>
        <div>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="first name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="last name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Re-enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
        type="submit"
          className=" mt-2"
        >
          Submit
        </Button>
      </form>
    </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
