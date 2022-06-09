import React, { useEffect } from "react";
import Header from "../components/Headers/Header";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthProvider";

export default function Auth({ children }) {
  const { currentUser, loading } = useAuth();
  const router = useRouter();
  // protect the page from authorized users
  useEffect(() => {
    if (!loading && currentUser) router.push("/home");
  }, [currentUser, loading]);
  if (!currentUser && !loading)
    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    );
}
