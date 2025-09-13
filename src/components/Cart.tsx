import useCartStore from "../store/cartStore";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
  } = useCartStore();

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h1>

      {/* Product Example Button */}
      <button
        onClick={() =>
          addToCart({ id: 1, name: "Chai", price: 50, quantity: 1 })
        }
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Add Chai
      </button>

      {/* Cart Items */}
      <ul className="space-y-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white px-4 py-2 rounded-lg shadow"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  updateQuantity(
                    item.id,
                    item.quantity > 1 ? item.quantity - 1 : 1
                  )
                }
                className="px-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Cart Footer */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-bold">Total: ₹{getTotal()}</p>
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
