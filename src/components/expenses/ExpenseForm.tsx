import { useState } from "react";

interface ExpenseFormProps {
  onAddExpense: (
    expense: {
      title: string;
      amount: number;
      category: string;
    }
  ) => void;
}

const ExpenseForm = ({
  onAddExpense,
}: ExpenseFormProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onAddExpense({
      title,
      amount: Number(amount),
      category,
    });

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Name"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="">
          Select Category
        </option>

        <option value="Food">
          Food
        </option>

        <option value="Travel">
          Travel
        </option>

        <option value="Shopping">
          Shopping
        </option>

        <option value="Bills">
          Bills
        </option>
      </select>

      <button type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;