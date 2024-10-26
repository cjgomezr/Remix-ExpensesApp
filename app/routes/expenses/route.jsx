import { Outlet } from "@remix-run/react";
import expensesStyles from "/app/styles/expenses/expenses.css?url";

export default function expensesLayout() {
  return (
    <main>
      <p>Shared element!</p>
      <Outlet />
    </main>
  );
}

export function links() {
  return [{ rel: "stylesSheet", href: expensesStyles }];
}
