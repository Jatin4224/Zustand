// import { create } from "zustand";

// interface Chai {
//   id: number;
//   type: string; // "Masala", "Adrak", "Elaichi"
//   size: "small" | "medium" | "large";
//   extraSugar: boolean;
// }

// interface ChaiStore {
//   orders: Chai[];
//   addOrder: (chai: Chai) => void;
//   cancelOrder: (id: number) => void;
// }

// const useChaiStore = create<ChaiStore>((set) => ({
//   orders: [],
//   addOrder: (chai) => set((state) => ({ orders: [...state.orders, chai] })),
//   cancelOrder: (id) =>
//     set((state) => ({ orders: state.orders.filter((c) => c.id !== id) })),
// }));

// export default useChaiStore;
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Order = {
  id: number;
  type: string;
  size: "small" | "medium" | "large";
  extraSugar: boolean;
};

type ChaiStore = {
  orders: Order[];
  points: number;
  streak: number;
  addOrder: (order: Order) => void;
  cancelOrder: (id: number) => void;
  calculatePoints: () => void;
};

const useChaiStore = create<ChaiStore>()(
  persist(
    (set, get) => ({
      orders: [],
      points: 0,
      streak: 0,
      addOrder: (order) => {
        set({ orders: [...get().orders, order] });
        get().calculatePoints();
      },
      cancelOrder: (id) => {
        set({ orders: get().orders.filter((o) => o.id !== id) });
        get().calculatePoints();
      },
      calculatePoints: () => {
        // Simple gamification logic
        const totalOrdersToday = get().orders.filter(
          (o) => o.id > Date.now() - 1000 * 60 * 60 * 24
        ).length;

        let points = get().points;
        let streak = get().streak;

        if (totalOrdersToday <= 3) {
          // reward for not over-ordering
          points += 5;
          streak += 1;
        } else {
          streak = 0;
        }

        set({ points, streak });
      },
    }),
    { name: "chai-orders-storage" }
  )
);

export default useChaiStore;
