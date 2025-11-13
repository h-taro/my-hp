"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  name: z.string().min(1, "必須です"),
  email: z.string().email("メール形式で入力してください"),
  message: z.string().min(10, "10文字以上で入力してください").max(1000),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お名前</FormLabel>
              <FormControl>
                <Input placeholder="山田 太郎" {...field} />
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
              <FormLabel>メール</FormLabel>
              <FormControl>
                <Input type="email" placeholder="taro@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メッセージ</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-32"
                  placeholder="お問い合わせ内容"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          送信
        </Button>
      </form>
    </Form>
  );
}
