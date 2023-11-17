import Image from "next/image";
import CreateSPaceButton from "@/app/components/CreateSpaceButton";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center h-screen text-gray-400">
      <div className="text-center">
        <h1 className="text-xl font-semibold">welcome to your Space Talk</h1>
        <p className="text-sm pt-2 ">
          A space to chat and have fun at the same time
        </p>
      </div>
      <CreateSPaceButton />
    </div>
  );
}
