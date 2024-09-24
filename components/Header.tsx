"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BiLoaderCircle } from "react-icons/bi";

const Header = () => {
  const { data: session, status } = useSession();
  const [initialLoading, setinitialLoading] = useState<boolean>(true);

  useEffect(() => {
    if (status !== "loading") {
      setinitialLoading(false);
    }
  }, [status, session]);
  console.log(session);

  return (
    <div className="fixed top-0 w-full h-[60px] bg-black border-b border-white/60 flex justify-between items-center p-3">
      <Link href="/">
        <h2 className="font-bold text-xl">DAVINCI</h2>
      </Link>
      {initialLoading && status === "loading" ? (
        <BiLoaderCircle className="animate-spin mr-3" />
      ) : !session ? (
        <div>
          <Button
            onClick={() => signIn("google")}
            className="__menu bg-white text-black"
          >
            Login
          </Button>
        </div>
      ) : (
        <Avatar>
          <AvatarImage src={session.user?.image || ""} alt="Glogo" />
        </Avatar>
      )}
    </div>
  );
};

export default Header;
