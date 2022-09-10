import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Cart() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen mx-16 bg-white sm:flex sm:items-center sm:justify-center">
        <div className="flex gap-8 w-full">
            <div className="flex-grow">
                <div className="bg-zinc-200 w-full min-h-[300px]">

                </div>
            </div>
            <div className="w-72">
                <div className="bg-zinc-200 w-full h-full min-h-[300px]">

                </div>
            </div>
        </div>
    </main>
  );
}
