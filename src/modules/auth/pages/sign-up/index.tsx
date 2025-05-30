import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router";

import { useSignUpController } from "./sign-up.controller";

export function SignUpPage() {
  const { disabled, form, handleSubmit } = useSignUpController();

  return (
    <Form {...form}>
      <form
        className="w-full max-w-[31.25rem]"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle>Welcome to CodeLeap network!</CardTitle>
          </CardHeader>

          <CardContent>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please enter your username</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g.: John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-sm text-muted-foreground mt-4">
              Already have an account?{" "}
              <NavLink
                className="text-blue-500 inline-block"
                to="/auth/sign-in"
              >
                Sign in here
              </NavLink>
            </p>
          </CardContent>

          <CardFooter className="flex justify-end ">
            <Button disabled={disabled} type="submit">
              Enter
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
