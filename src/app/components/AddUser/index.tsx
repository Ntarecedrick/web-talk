import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/Dialog";
import Button from "../Button";
import { IconPlus } from "@tabler/icons-react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { trpc } from "@/app/_trpc/client";

export default function AddUser({ user_id }: { user_id: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutate, isLoading } = trpc.addUser.create.useMutation({
    onSuccess: () => {
      reset();
    },
  });

  const handleInviteUser = () => {
    mutate({
      space_id: "7114be6b-ffa9-43fa-b8cd-d95ded485f43",
      addedUser: "88994ec1-114c-4a72-aed6-9522f42a1ed1",
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          label="Add user"
          buttonStyles="flex items-center gap-x-2 bg-wt-darkgray-500/95 px-2 py-1 text-xs cursor-pointer rounded-sm hover:bg-wt-darkgray-500"
          Icon={<IconPlus size={16} />}
        />
      </DialogTrigger>
      <DialogContent className="bg-wt-darkgray-300 border-wt-darkgray-50">
        <DialogHeader className="text-sm text-gray-300 flex flex-col items-center justify-center">
          <h1 className="font-bold text-wt-darkgray-500 text-lg">
            {" "}
            Add Your friend
          </h1>
          <p>make your space more fun </p>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleInviteUser)}>
          <Input
            className=""
            type="text"
            register={register}
            placeholder="Email"
            name="userEmail"
          />
          <Button
            label="Add User"
            buttonStyles="bg-wt-darkgray-500/95 hover:bg-wt-darkgray-500 rounded-sm text-xs text-gray-300 py-1.5 w-full my-2.5 "
            type="submit"
            isLoading={isLoading}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
