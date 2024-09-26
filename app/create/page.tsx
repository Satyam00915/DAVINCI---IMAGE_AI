"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  prompt: z
    .string()
    .min(7, { message: "Prompt must be atleast 7 characters long" }),
});

const Page = () => {
  const [outputImg, setOutputImg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const text = "Your prompt below to create any image you can imagine";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full p-3 h-dvh flex justify-start text-white items-center pt-[72px] flex-col">
      <div className="w-full border border-red-500 p-3">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.35 }}
          className="text-center font-bold text-white text-4xl"
        >
          Create
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center text-white/60"
        >
          Generate Stunning Images With DAVINCI AI
        </motion.p>
      </div>
      <div className="flex  w-full gap-3 h-full">
        <div className="__form flex-[2] gap-6 flex justify-center items-start flex-col">
          <p className="text-left font-bold text-xl p-5 text-white/80">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.05,
                  delay: 0.85 + index * 0.05, // Delay each letter
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}{" "}
          </p>
          <div className="flex gap-2 w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex gap-2"
              >
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="w-full h-[50px]  max-w-[70%]">
                      <FormControl>
                        <Input
                          placeholder="a cat sitting over a sofa ..."
                          className="w-full transition-all border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-white h-full text-black">
                  Generate
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="__output flex-[1] bg-white/5 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Page;
