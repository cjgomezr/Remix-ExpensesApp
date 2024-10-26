const DUMMY_EXPENSES = [
    {
        id:"e1",
        title:"First Expense",
        amount:12.99,
        date: new Date().toISOString()
    },
    {
        id:"e2",
        title:"Second Expense",
        amount:10.99,
        date: new Date().toISOString()
    }
];

import ExpenseStatistics from "./ExpenseStatistics";
import Chart from "./Chart";

export default function ExpensesAnalysis() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
