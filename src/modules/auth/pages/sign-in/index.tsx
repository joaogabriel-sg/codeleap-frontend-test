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

import { useSignInController } from "./sign-in.controller";

export function SignInPage() {
  const { disabled, form, handleSubmit } = useSignInController();

  return (
    <Form {...form}>
      <form
        className="w-full max-w-[31.25rem]"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle>Login to CodeLeap network</CardTitle>
          </CardHeader>

          <CardContent>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g.: John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-sm text-muted-foreground mt-4">
              Don't have an account?{" "}
              <NavLink
                className="text-blue-500 inline-block"
                to="/auth/sign-up"
              >
                Sign up here
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
