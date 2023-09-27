"use client";
import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import UserNav from "./UserNav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setUserData } from "@/redux/actions/auth";
export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (session !== null) {
      dispatch(setUserData({ session }));
    }
  }, []);
  return session ? (
    <UserNav session={session.user.user_metadata} />
  ) : (
    <Link href="/auth/login">
      <Button variant="outline">Login</Button>
    </Link>
  );
}
