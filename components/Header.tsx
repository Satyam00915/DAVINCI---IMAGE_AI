"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[60px] bg-black border-b border-white/60 flex justify-between items-center p-3">
      <Link href="/">
        <h2 className="font-bold text-xl">DAVINCI</h2>
      </Link>
      <div>
        <Button
          onClick={() => signIn("google")}
          className="__menu bg-white text-black"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
