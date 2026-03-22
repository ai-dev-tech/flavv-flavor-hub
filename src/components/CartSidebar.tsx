import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import OrderModal from "./OrderModal";

const CartSidebar = () => {
  const { items, isOpen, setIsOpen, addToCart, removeOne, removeItem, clearCart, total, count } = useCart();
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-50"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background border-l border-border z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="font-heading text-2xl tracking-wide text-foreground flex items-center gap-2">
                  <ShoppingBag size={22} className="text-primary" />
                  Your Cart ({count})
                </h2>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground p-1 transition-colors active:scale-95">
                  <X size={22} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingBag size={48} className="text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <button onClick={() => setIsOpen(false)} className="mt-4 text-primary font-heading tracking-wide text-lg hover:underline">
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-3 bg-card border border-border rounded-xl p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-heading text-base tracking-wide text-foreground truncate">{item.name}</p>
                        <p className="font-heading text-lg text-secondary">Rs. {item.price}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => removeOne(item.id)}
                            className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors active:scale-95"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-heading text-lg tabular-nums w-6 text-center">{item.qty}</span>
                          <button
                            onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                            className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors active:scale-95"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-muted-foreground hover:text-destructive transition-colors active:scale-95"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-5 border-t border-border space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-heading text-3xl text-secondary">Rs. {total}</span>
                  </div>
                  <button
                    onClick={() => { setIsOpen(false); setOrderOpen(true); }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-wide py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97]"
                  >
                    Place Order
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-muted-foreground hover:text-foreground font-heading text-sm tracking-wide py-2 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
};

export default CartSidebar;
