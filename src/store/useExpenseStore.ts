import { create } from "zustand";

interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
  getTotal: () => number;
}

const useExpenseStore = create<ExpenseStore>((set, get) => ({
  expenses: [],

  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),

  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((exp) => exp.id !== id),
    })),

  getTotal: () => get().expenses.reduce((acc, exp) => acc + exp.amount, 0),
}));

export default useExpenseStore;
