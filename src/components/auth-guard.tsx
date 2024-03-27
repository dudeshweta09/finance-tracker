"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const loggedIn = localStorage.getItem("Fin_LoggeIn_ Key") ?? "false";
    if (loggedIn == "true") {
      setLoggedIn(true);
      router.push("/trackerpage");
      return;
    }
    router.push("/home-page");
  }, [loggedIn]);
  return <>{children}</>;
}