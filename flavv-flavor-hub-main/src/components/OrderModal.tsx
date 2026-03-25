import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const PHONE = "923103425717";

interface Props {
  open: boolean;
  onClose: () => void;
}

const OrderModal = ({ open, onClose }: Props) => {
  const { items, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) return;

    const itemLines = items
      .map((i) => `- ${i.name} x${i.qty} = Rs. ${i.price * i.qty}`)
      .join("\n");

    const msg = `NEW ORDER - FLAVV

Name: ${name.trim()}
Phone: ${phone.trim()}
Address: ${address.trim()}

Items:
${itemLines}

Total: Rs. ${total}
${notes.trim() ? `Note: ${notes.trim()}` : ""}

Please confirm my order. Thank you!`;

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
    clearCart();
    setName("");
    setPhone("");
    setAddress("");
    setNotes("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] grid place-items-center px-4 sm:px-6 py-6"
          >
            <div className="w-full max-w-xl bg-background border border-border rounded-2xl overflow-hidden flex flex-col max-h-[85vh] shadow-[0_25px_80px_-50px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="font-heading text-2xl tracking-wide text-foreground">Place Your Order</h2>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1 active:scale-95">
                  <X size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4">
                {/* Order summary */}
                <div className="bg-card border border-border rounded-xl p-4 space-y-2">
                  <p className="font-heading text-sm tracking-wider text-muted-foreground">ORDER SUMMARY</p>
                  {items.map((i) => (
                    <div key={i.id} className="flex justify-between text-sm">
                      <span className="text-foreground">{i.name} x {i.qty}</span>
                      <span className="text-secondary font-heading tabular-nums">Rs. {i.price * i.qty}</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-heading text-lg text-foreground">Total</span>
                    <span className="font-heading text-xl text-secondary">Rs. {total}</span>
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-sm tracking-wider text-muted-foreground mb-1.5">FULL NAME *</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={100}
                    className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-heading text-sm tracking-wider text-muted-foreground mb-1.5">PHONE *</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    maxLength={20}
                    className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder="03XX XXXXXXX"
                  />
                </div>

                <div>
                  <label className="block font-heading text-sm tracking-wider text-muted-foreground mb-1.5">DELIVERY ADDRESS *</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    maxLength={300}
                    rows={2}
                    className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    placeholder="Your delivery address"
                  />
                </div>

                <div>
                  <label className="block font-heading text-sm tracking-wider text-muted-foreground mb-1.5">SPECIAL INSTRUCTIONS</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={500}
                    rows={2}
                    className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    placeholder="Extra sauce, no onions, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-500 text-foreground font-heading text-lg tracking-wide py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2 mt-2"
                >
                  <MessageCircle size={20} /> Send Order via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
