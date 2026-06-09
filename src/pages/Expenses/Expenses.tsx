import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import ExpenseForm from "../../components/expenses/ExpenseForm";
import ExpenseTable from "../../components/expenses/ExpenseTable";

import type { Expense } from "../../types/expense.types";
const Expenses = () => {
  const [expenses, setExpenses] =
    useState<Expense[]>([]);

  const addExpense = (
    expenseData: {
      title: string;
      amount: number;
      category: string;
    }
  ) => {
    const newExpense: Expense = {
      id: Date.now(),
      ...expenseData,
    };

    setExpenses([
      ...expenses,
      newExpense,
    ]);
  };

  return (
    <MainLayout>
      <h1>Expenses</h1>

      <ExpenseForm
        onAddExpense={addExpense}
      />

      <ExpenseTable
        expenses={expenses}
      />
    </MainLayout>
  );
};

export default Expenses;