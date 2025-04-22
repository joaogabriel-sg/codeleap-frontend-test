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
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";

import { useCreatePostFormController } from "./create-post-form.controller";

export function CreatePostForm() {
  const { createPostForm, handleCreatePost, isCreatingPost } =
    useCreatePostFormController();

  return (
    <Form {...createPostForm}>
      <form onSubmit={createPostForm.handleSubmit(handleCreatePost)}>
        <Card>
          <CardHeader>
            <CardTitle>What&apos;s on your mind?</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <FormField
              control={createPostForm.control}
              disabled={isCreatingPost}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g.: Hello World" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={createPostForm.control}
              disabled={isCreatingPost}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="E.g.: This is my first post!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button
              disabled={!createPostForm.formState.isValid || isCreatingPost}
              type="submit"
            >
              {isCreatingPost && <Loader2Icon className="animate-spin" />}
              Create
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
