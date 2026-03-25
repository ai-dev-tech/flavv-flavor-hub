import { X, Plus, Minus, Trash2, ShoppingBag, Clock3, Sparkles } from "lucide-react";
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
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background/95 backdrop-blur-xl border-l border-border/70 shadow-[0_20px_50px_-30px_rgb(0,0,0,0.7)] z-50 flex flex-col"
            >
              {/* Header */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent blur-3xl" aria-hidden />
                <div className="flex items-center justify-between p-5 border-b border-border relative">
                  <div className="space-y-1">
                    <p className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-heading tracking-[0.18em] uppercase">
                      <Sparkles size={14} /> Live Cart
                    </p>
                    <div className="flex items-center gap-2">
                      <ShoppingBag size={22} className="text-primary" />
                      <div>
                        <h2 className="font-heading text-2xl tracking-wide text-foreground">Your Cart</h2>
                        <p className="text-xs text-muted-foreground">You have {count} item{count === 1 ? "" : "s"} selected</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground p-1 transition-colors active:scale-95">
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 bg-card/60 border border-dashed border-border rounded-2xl">
                    <ShoppingBag size={52} className="text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">Your cart is empty right now</p>
                    <button onClick={() => setIsOpen(false)} className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:brightness-110 transition-all active:scale-[0.97]">
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="group flex gap-3 bg-card/80 border border-border rounded-xl p-3 shadow-[0_8px_30px_-24px_rgb(0,0,0,0.6)] hover:border-primary/50 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 ring-1 ring-border group-hover:ring-primary/50 transition-all"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-heading text-base tracking-wide text-foreground leading-tight truncate">{item.name}</p>
                          <p className="font-heading text-sm text-secondary tabular-nums whitespace-nowrap">Rs. {item.price * item.qty}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">Rs. {item.price} each</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => removeOne(item.id)}
                            className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary/15 transition-colors active:scale-95"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-heading text-base tabular-nums w-8 text-center rounded-md bg-background border border-border/70">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                            className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary/15 transition-colors active:scale-95"
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
                <div className="p-5 border-t border-border space-y-4 bg-gradient-to-t from-background/95 via-background to-background/70">
                  <div className="flex items-center gap-3 bg-card/80 border border-border rounded-2xl p-4">
                    <div>
                      <p className="text-xs font-heading tracking-[0.18em] text-muted-foreground uppercase flex items-center gap-1">
                        <Clock3 size={14} /> Est. delivery
                      </p>
                      <p className="text-sm text-foreground">25 - 35 mins</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-xs text-muted-foreground">Total</p>
                      <p className="font-heading text-3xl text-secondary tabular-nums">Rs. {total}</p>
                      <p className="text-[11px] text-muted-foreground">Taxes included</p>
                    </div>
                  </div>

                  <button
                    onClick={() => { setIsOpen(false); setOrderOpen(true); }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-wide py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97] shadow-[0_12px_35px_-18px_rgba(220,38,38,0.7)]"
                  >
                    Proceed to Checkout
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
