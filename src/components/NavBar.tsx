import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavBar: FC = () => {
  return (
    <header className="sticky h-14 backdrop-blur-sm  inset-x-0 top-0 z-30  w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="max-w flex items-center justify-between h-full">

      <Link
        href={"/"}
        className={cn(buttonVariants({ variant: "link" }), "p-0 hover:no-underline")}
      >
        <Image
          src={"/images/convodoc-logo.svg"}
          alt="Convo Doc"
          width={32}
          height={32}
        />
        <p className="font-bold no-underline text-xl ml-2">Convo Doc</p>
      </Link>

      {/* TODO: add mobile menu */}

      <nav className="hidden md:flex items-center space-x-2">
        <Link
          href={"/"}
          className={cn("font-semibold", buttonVariants({ variant: "ghost" }))}
        >
          Home
        </Link>
        <Link
          href={"/pricing"}
          className={cn("font-semibold", buttonVariants({ variant: "ghost" }))}
        >
          Pricing
        </Link>
        <Link
          href={"/sign-in"}
          className={cn("font-semibold", buttonVariants({ variant: "ghost" }))}
        >
          Sign In
        </Link>
        <Link
          href={"/sign-up"}
          className={cn(
            "font-semibold",
            buttonVariants({ variant: "default" })
          )}
        >
          Get Stared for free
        </Link>
      </nav>
      </div>
    </header>
  );
};

export default NavBar;
