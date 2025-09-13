// import { useState } from "react";
// import useChaiStore from "../store/useStore"; // Zustand store

// const ChaiOrder = () => {
//   const { orders, addOrder, cancelOrder } = useChaiStore();
//   const [type, setType] = useState<string>("");
//   const [size, setSize] = useState<"small" | "medium" | "large">("small");
//   const [extraSugar, setExtraSugar] = useState<boolean>(false);

//   const handleAdd = () => {
//     if (!type) return alert("Please enter chai type ☕");
//     const newOrder = {
//       id: Date.now(),
//       type,
//       size,
//       extraSugar,
//     };
//     addOrder(newOrder);
//     setType("");
//     setSize("small");
//     setExtraSugar(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-[#1c0f0a] text-white flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-400 mb-6">
//         Tayyari Chai Ki, Order Abhi Kijiye☕
//       </h1>

//       <div className="bg-[#111] border border-[#2a1d14] rounded-2xl shadow-lg p-6 w-full max-w-md">
//         {/* Input Fields */}
//         <div className="space-y-4 mb-5">
//           <input
//             type="text"
//             placeholder="Enter chai type (Masala, Adrak...)"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:ring-2 focus:ring-orange-400 outline-none"
//           />

//           <select
//             value={size}
//             onChange={(e) =>
//               setSize(e.target.value as "small" | "medium" | "large")
//             }
//             className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:ring-2 focus:ring-orange-400 outline-none"
//           >
//             <option value="small">Small</option>
//             <option value="medium">Medium</option>
//             <option value="large">Large</option>
//           </select>

//           <label className="flex items-center space-x-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={extraSugar}
//               onChange={(e) => setExtraSugar(e.target.checked)}
//               className="w-4 h-4 accent-orange-400"
//             />
//             <span className="text-gray-300">Extra Sugar</span>
//           </label>
//         </div>

//         <button
//           onClick={handleAdd}
//           className="w-full bg-orange-500 text-white font-semibold px-4 py-3 rounded-lg hover:bg-orange-600 transition-all"
//         >
//           ➕ Add Order
//         </button>
//       </div>

//       {/* Orders List */}
//       <div className="mt-8 w-full max-w-md space-y-3">
//         {orders.map((order) => (
//           <div
//             key={order.id}
//             className="flex justify-between items-center bg-[#1a1a1a] border border-[#2a1d14] p-4 rounded-xl shadow"
//           >
//             <span>
//               <span className="font-semibold text-orange-400">
//                 {order.type}
//               </span>{" "}
//               ({order.size}) {order.extraSugar ? "🍬" : ""}
//             </span>
//             <button
//               onClick={() => cancelOrder(order.id)}
//               className="text-red-400 hover:text-red-500"
//             >
//               ❌ Cancel
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChaiOrder;
// import { useState } from "react";
// import useChaiStore from "../store/useStore"; // chai store
// import useExpenseStore from "../store/useExpenseStore"; // expense store

// const ChaiOrder = () => {
//   const { orders, addOrder, cancelOrder } = useChaiStore();
//   const { expenses, addExpense, removeExpense, getTotal } = useExpenseStore();

//   const [type, setType] = useState<string>("");
//   const [size, setSize] = useState<"small" | "medium" | "large">("small");
//   const [extraSugar, setExtraSugar] = useState<boolean>(false);

//   // price logic (basic example)
//   const getPrice = () => {
//     if (size === "small") return 20;
//     if (size === "medium") return 30;
//     if (size === "large") return 40;
//     return 25;
//   };

//   const handleAdd = () => {
//     if (!type) return alert("Please enter chai type ☕");

//     const newOrder = {
//       id: Date.now(),
//       type,
//       size,
//       extraSugar,
//     };

//     // add to chai orders
//     addOrder(newOrder);

//     // add to expenses
//     addExpense({
//       id: Date.now(),
//       description: `${size} ${type} chai`,
//       amount: getPrice(),
//     });

//     // reset form
//     setType("");
//     setSize("small");
//     setExtraSugar(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-[#1c0f0a] text-white flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-400 mb-6">
//         Tayyari Chai Ki, Order Abhi Kijiye☕
//       </h1>

//       {/* Form */}
//       <div className="bg-[#111] border border-[#2a1d14] rounded-2xl shadow-lg p-6 w-full max-w-md">
//         <div className="space-y-4 mb-5">
//           <input
//             type="text"
//             placeholder="Enter chai type (Masala, Adrak...)"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:ring-2 focus:ring-orange-400 outline-none"
//           />

//           <select
//             value={size}
//             onChange={(e) =>
//               setSize(e.target.value as "small" | "medium" | "large")
//             }
//             className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:ring-2 focus:ring-orange-400 outline-none"
//           >
//             <option value="small">Small - ₹20</option>
//             <option value="medium">Medium - ₹30</option>
//             <option value="large">Large - ₹40</option>
//           </select>

//           <label className="flex items-center space-x-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={extraSugar}
//               onChange={(e) => setExtraSugar(e.target.checked)}
//               className="w-4 h-4 accent-orange-400"
//             />
//             <span className="text-gray-300">Extra Sugar</span>
//           </label>
//         </div>

//         <button
//           onClick={handleAdd}
//           className="w-full bg-orange-500 text-white font-semibold px-4 py-3 rounded-lg hover:bg-orange-600 transition-all"
//         >
//           ➕ Add Order
//         </button>
//       </div>

//       {/* Orders */}
//       <div className="mt-8 w-full max-w-md space-y-3">
//         {orders.map((order) => (
//           <div
//             key={order.id}
//             className="flex justify-between items-center bg-[#1a1a1a] border border-[#2a1d14] p-4 rounded-xl shadow"
//           >
//             <span>
//               <span className="font-semibold text-orange-400">
//                 {order.type}
//               </span>{" "}
//               ({order.size}) {order.extraSugar ? "🍬" : ""}
//             </span>
//             <button
//               onClick={() => {
//                 cancelOrder(order.id);
//                 removeExpense(order.id); // also remove expense when canceling chai
//               }}
//               className="text-red-400 hover:text-red-500"
//             >
//               ❌ Cancel
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Expenses */}
//       <div className="mt-10 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-orange-300 mb-3">
//           💸 Your Expenses
//         </h2>
//         {expenses.map((exp) => (
//           <div
//             key={exp.id}
//             className="flex justify-between items-center bg-[#1a1a1a] border border-[#2a1d14] p-3 rounded-lg mb-2"
//           >
//             <span>{exp.description}</span>
//             <span className="text-orange-400">₹{exp.amount}</span>
//           </div>
//         ))}
//         <div className="mt-4 text-xl font-semibold text-orange-400">
//           Total: ₹{getTotal()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChaiOrder;
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
    <div className="min-h-screen bg-gradient-to-br from-black to-[#1c0f0a] text-white flex items-center justify-center p-6">
      {/* Container with form on left, image on right */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl">
        {/* Left Side - Chai Form & Orders */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-orange-400 mb-6">
            Order Karo Sasti Chai, Mehengi Yaadein Free Milegi ❤️☕
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

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="data:image/png;base64,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" // <-- Replace with your image link
            alt="Chai Illustration"
            className="animate-bounce w-120 h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChaiOrder;
