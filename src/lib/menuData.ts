export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
}

export const categories = ["All", "Burgers", "Snacks & Sides", "Specials", "Café Drinks", "Desserts"];

export const menuItems: MenuItem[] = [
  { id: 1, name: "Classic FLAVV Burger", category: "Burgers", description: "Our signature juicy beef patty with fresh lettuce, tomato & secret sauce." },
  { id: 2, name: "Crispy Chicken Burger", category: "Burgers", description: "Golden crispy chicken fillet with creamy coleslaw." },
  { id: 3, name: "Double Smash Burger", category: "Burgers", description: "Two thin-crust smashed patties with melted cheese." },
  { id: 4, name: "BBQ Beef Burger", category: "Burgers", description: "Smoky BBQ glazed beef with caramelized onions." },
  { id: 5, name: "Zinger Burger", category: "Burgers", description: "Spicy breaded chicken fillet with jalapeno mayo." },
  { id: 6, name: "Loaded Fries", category: "Snacks & Sides", description: "Crispy fries topped with cheese sauce, jalapeños & beef bits." },
  { id: 7, name: "Crispy Wings (6 pcs)", category: "Snacks & Sides", description: "Golden fried wings tossed in your choice of sauce." },
  { id: 8, name: "Onion Rings", category: "Snacks & Sides", description: "Crunchy battered onion rings with dipping sauce." },
  { id: 9, name: "Garlic Bread", category: "Snacks & Sides", description: "Toasted bread with garlic butter and herbs." },
  { id: 10, name: "FLAVV Special Platter", category: "Specials", description: "A feast for two — burgers, wings, fries & drinks." },
  { id: 11, name: "Midnight Meal Deal", category: "Specials", description: "Late night combo: burger, fries & cold coffee." },
  { id: 12, name: "Student Combo", category: "Specials", description: "Budget-friendly burger with fries & drink." },
  { id: 13, name: "Cold Coffee", category: "Café Drinks", description: "Rich blended coffee with cream and ice." },
  { id: 14, name: "Mojito", category: "Café Drinks", description: "Refreshing mint and lime mocktail." },
  { id: 15, name: "Oreo Shake", category: "Café Drinks", description: "Thick creamy milkshake loaded with Oreo crumbles." },
  { id: 16, name: "Strawberry Smoothie", category: "Café Drinks", description: "Fresh blended strawberry with yogurt." },
  { id: 17, name: "Hot Cappuccino", category: "Café Drinks", description: "Classic Italian-style cappuccino with frothy milk." },
  { id: 18, name: "Brownie with Ice Cream", category: "Desserts", description: "Warm fudge brownie topped with vanilla ice cream." },
  { id: 19, name: "Nutella Waffle", category: "Desserts", description: "Crispy Belgian waffle drizzled with Nutella." },
  { id: 20, name: "Gulab Jamun Cheesecake", category: "Desserts", description: "A fusion dessert — creamy cheesecake meets gulab jamun." },
];
