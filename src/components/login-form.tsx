import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoggedInSchema, LogggedInType, RegisterType } from "../../schema";
import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import Dbcontroller, { existAccount } from "@/app/db-controller";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const onLoggIn = (value: LogggedInType) => {
    const loggIn =
      existAccount?.filter((ud: RegisterType) => {
        return (
          ud.email == value.email &&
          ud.password == value.password &&
          ud.confirmpassword == ud.password
        );
      })?.length > 0;
    if (loggIn) {
      localStorage.setItem("Fin_LoggeIn_ Key", JSON.stringify(true));
      toast({
        variant: "destructive",
        description: "Log-In successfully",
      });
      router.push("http://localhost:3000/trackerpage");
    } else {
      toast({
        variant: "destructive",
        description: "Invalid Credentials",
      });
    }
  };

  const form = useForm<z.infer<typeof LoggedInSchema>>({
    resolver: zodResolver(LoggedInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <CardWrapper
      label="Login to your account"
      title="LogIn Now"
      backbuttonhref="/register"
      backbuttonlabel="New User! Register Now"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onLoggIn)}>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
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
          </div>
          <Button type="submit">Log In</Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
