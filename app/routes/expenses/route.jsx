import { Outlet } from "@remix-run/react";

export default function expensesLayout() {
  return (
    <main>
      <h1>shared expenses navbar</h1>
      <Outlet/>
    </main>
  );
}