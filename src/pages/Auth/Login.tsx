import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks";
import { loginSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Login = () => {
  const { login } = useAuth();
  // Define form
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Define submit handler
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    login(values.username, values.password);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-100">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/4 space-y-5 rounded-lg border-zinc-500 bg-white p-6"
        >
          <h1 className="text-center text-3xl font-bold uppercase">Login</h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormDescription>Input your username</FormDescription>
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
                  <Input placeholder="password" {...field} type="password" />
                </FormControl>
                <FormDescription>Input your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <Button type="submit">Login</Button>
            <a href="/" className="text-sm text-blue-500 underline">
              Back to home page
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
};
