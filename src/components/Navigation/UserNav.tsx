"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserMetadata } from "@supabase/supabase-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Logout from "../Auth/Logout";
import { useAppSelector } from "@/redux/store";

export default function UserNav({ session: user }: UserMetadata) {
  // const user: UserData = useAppSelector((state) => state.auth.user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="relative h-11 w-11 rounded-full select-none focus-visible:outline-none "
        >
          <Avatar className="inline-flex items-center justify-center overflow-hidden select-none w-11 h-11 rounded-full ">
            <AvatarImage
              className="w-full h-full object-cover"
              src={user.avatar_url}
              alt="@shadcn"
            />
            <AvatarFallback className="w-full h-full flex items-center justify-center">
              SC
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-max" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.user_name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="cursor-pointer w-full">
            <Logout />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
