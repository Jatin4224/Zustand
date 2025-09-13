import { create } from "zustand";

// Cart item interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Store interface
interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  // Add item (if exists, increase quantity)
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),

  // Remove item by id
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),

  // Update item quantity
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((i) => (i.id === id ? { ...i, quantity } : i)),
    })),

  // Clear full cart
  clearCart: () => set({ cart: [] }),

  // Calculate total price
  getTotal: () =>
    get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));

export default useCartStore;
