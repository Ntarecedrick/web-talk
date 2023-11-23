"use client";

import React from "react";
import Input from "../Input";
import SendButton from "./SendButton";
import { useForm } from "react-hook-form";
import { trpc } from "@/app/_trpc/client";
import useGetLoggedInUser from "@/hooks/useGetLoggedInUser";

export default function SendMessage() {
  const { userId } = useGetLoggedInUser();
  const { refetch } = trpc.getSingleUserMessages.fetch.useQuery({
    userId: "88994ec1-114c-4a72-aed6-9522f42a1ed1",
  });
  const { data, mutate } = trpc.SendMessage.create.useMutation({
    onSuccess: (data) => {
      refetch();
    },
    onError: (error) => {
      console.log("an error occured:", error);
    },
  });
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset
  } = useForm();
  const handleSendMessage = (data: any) => {
    mutate({
      message: data.message,
      messageFrom: userId,
      messageTo: "88994ec1-114c-4a72-aed6-9522f42a1ed1",
    });
    reset()
  };
  return (
    <form
      className="fixed bottom-0 flex items-center w-[78%] gap-x-4 pb-3"
      onSubmit={handleSubmit(handleSendMessage)}
    >
      <Input
        type="text"
        className="col-span-6"
        placeholder="type your message"
        register={register}
        name="message"
      />
      <SendButton />
    </form>
  );
}
