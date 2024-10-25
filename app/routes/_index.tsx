import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ExpensesApp" },
    { name: "description", content: "Expenses app!" },
  ];
};

export default function Index() {
  return <h1>Home Page</h1>;
}
