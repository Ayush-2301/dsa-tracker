"use client";
import { AppDispatch } from "@/redux/store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/actions/auth";
export default function Logout() {
  const supabase = createClientComponentClient();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logout());
    router.refresh();
  };
  return (
    <div className="w-full" onClick={handleLogout}>
      Logout
    </div>
  );
}
