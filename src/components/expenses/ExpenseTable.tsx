import type { Expense } from "../../types/expense.types";
interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable = ({
  expenses,
}: ExpenseTableProps) => {
  return (
    <table
      style={{
        width: "100%",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.title}</td>
            <td>
              ₹{expense.amount}
            </td>
            <td>
              {expense.category}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;