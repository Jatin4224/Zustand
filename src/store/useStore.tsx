import { create } from "zustand";

interface Chai {
  id: number;
  type: string; // "Masala", "Adrak", "Elaichi"
  size: "small" | "medium" | "large";
  extraSugar: boolean;
}

interface ChaiStore {
  orders: Chai[];
  addOrder: (chai: Chai) => void;
  cancelOrder: (id: number) => void;
}

const useChaiStore = create<ChaiStore>((set) => ({
  orders: [],
  addOrder: (chai) => set((state) => ({ orders: [...state.orders, chai] })),
  cancelOrder: (id) =>
    set((state) => ({ orders: state.orders.filter((c) => c.id !== id) })),
}));

export default useChaiStore;
