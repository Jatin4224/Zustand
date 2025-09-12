import { create } from "zustand";

// 1. Define the shape of your store
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// 2. Create the store with proper typing
const useCounter = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounter;
