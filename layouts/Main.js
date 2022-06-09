import React, { useEffect } from "react";
import Header from "../components/Headers/HomeHeader";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthProvider";

export default function Auth({ children }) {
  const router = useRouter();
  const { currentUser, loading } = useAuth();
  // protect the page from unauthorized users
  useEffect(() => {
    if (!loading && !currentUser) router.push("/");
  }, [currentUser, loading]);

  if (!currentUser) return "loading...";
  if (currentUser)
    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    );
}
