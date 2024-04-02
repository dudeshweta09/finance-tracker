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
import Dbcontroller from "@/components/db-controller";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const dbController = new Dbcontroller()
  const { toast } = useToast();
  const router = useRouter();

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
        <form onSubmit={form.handleSubmit((data:LogggedInType)=>{
          dbController.onLoggIn(data,()=>{
            toast({
              description: "Loggin Successfully"
            })
            router.push("/trackerpage")
          })
        })}>
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
