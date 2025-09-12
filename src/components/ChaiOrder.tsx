import { useState } from "react";
import useChaiStore from "../store/useStore"; // Zustand store

const ChaiOrder = () => {
  const { orders, addOrder, cancelOrder } = useChaiStore();
  const [type, setType] = useState<string>("");
  const [size, setSize] = useState<"small" | "medium" | "large">("small");
  const [extraSugar, setExtraSugar] = useState<boolean>(false);

  const handleAdd = () => {
    if (!type) return alert("Please enter chai type ☕");
    const newOrder = {
      id: Date.now(),
      type,
      size,
      extraSugar,
    };
    addOrder(newOrder);
    setType("");
    setSize("small");
    setExtraSugar(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#1c0f0a] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-400 mb-6">
        Tayyari Chai Ki, Order Abhi Kijiye☕
      </h1>

      <div className="bg-[#111] border border-[#2a1d14] rounded-2xl shadow-lg p-6 w-full max-w-md">
        {/* Input Fields */}
        <div className="space-y-4 mb-5">
          <input
            type="text"
            placeholder="Enter chai type (Masala, Adrak...)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <select
            value={size}
            onChange={(e) =>
              setSize(e.target.value as "small" | "medium" | "large")
            }
            className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={extraSugar}
              onChange={(e) => setExtraSugar(e.target.checked)}
              className="w-4 h-4 accent-orange-400"
            />
            <span className="text-gray-300">Extra Sugar</span>
          </label>
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-orange-500 text-white font-semibold px-4 py-3 rounded-lg hover:bg-orange-600 transition-all"
        >
          ➕ Add Order
        </button>
      </div>

      {/* Orders List */}
      <div className="mt-8 w-full max-w-md space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center bg-[#1a1a1a] border border-[#2a1d14] p-4 rounded-xl shadow"
          >
            <span>
              <span className="font-semibold text-orange-400">
                {order.type}
              </span>{" "}
              ({order.size}) {order.extraSugar ? "🍬" : ""}
            </span>
            <button
              onClick={() => cancelOrder(order.id)}
              className="text-red-400 hover:text-red-500"
            >
              ❌ Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChaiOrder;
