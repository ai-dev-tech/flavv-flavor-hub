const PHONE = "923273366851";

export const openWhatsAppOrder = (dishName: string, dishNumber: number) => {
  const msg = `Hello FLAVV! 🍔 I'd like to place an order.

🏪 Restaurant: FLAVV — Feel The Flavor
📍 My Delivery Address: [Please type your address here]

🛒 My Order:
- ${dishName} — #${String(dishNumber).padStart(2, "0")}

Please confirm my order. Thank you!`;

  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
};

export const openWhatsApp = () => {
  const msg = `Hello! I want to order from FLAVV 🍔`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
};
