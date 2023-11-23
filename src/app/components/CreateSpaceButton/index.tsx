"use client";

import React from "react";
import { IconPlus } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import Input from "../Input";
import { FieldValues, useForm } from "react-hook-form";
import { trpc } from "@/app/_trpc/client";
import { useToast } from "../ui/UseToast";

export default function CreateSpace() {
  const { toast } = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading } = trpc.createSpace.create.useMutation({
    onSuccess:(data)=>{
      reset()
      toast({
        description: (
          <div>
            <h1 className="text-wt-green-500 text-sm font-bold text-center">
              Space Created successfully{" "}
            </h1>
            <p className="text-xs text-gray-300">
              <span className="font-bold text-wt-darkgray-700">
                {data[0].name}
              </span>{" "}
              is created, we are happy to have you here, enjoy your chat with your
              friend
            </p>
          </div>
        ),
      });
    }
  });
  const hadnleCreateSpace = (data: FieldValues) => {
     mutate({
      name: data.spaceName,
     })

  };
  return (
    <Dialog>
      <DialogTrigger className="bg-wt-darkgray-700 flex px-3 py-1.5 rounded-md gap-2 m-2 text-gray-200  ">
        <IconPlus />
        <p className="text-sm">Create your Talk space</p>
      </DialogTrigger>
      <DialogContent className="bg-wt-darkgray-300 text-gray-300 border-wt-darkgray-50">
        <DialogTitle className="text-xs flex flex-col items-center justify-center gap-y-3 text-gray-200">
          <h1 className="font-bold text-wt-darkgray-700 text-xl">
            Welcome to Web Chatter
          </h1>
          <p>enjoy your chat with friends</p>
        </DialogTitle>
        <form action="" onSubmit={handleSubmit(hadnleCreateSpace)}>
          <Input
            placeholder="Space Name"
            register={register}
            name="spaceName"
            className=""
            type="text"
          />
          <button
            type="submit"
            className="w-full py-1.5 rounded-md bg-wt-darkgray-500 text-sm my-2.5"
          >
            Create space name
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
