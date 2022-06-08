import React from "react";
import Header from "../components/Headers/Header";

export default function Auth({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
