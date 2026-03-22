export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
}

const img = (id: string) => `https://images.unsplash.com/${id}?w=480&h=360&fit=crop&auto=format&q=80`;

export const categories = ["All", "Burgers 🍔", "Snacks 🍟", "Specials ⭐", "Drinks ☕", "Desserts 🍰"];

const categoryMap: Record<string, string> = {
  "Burgers": "Burgers 🍔",
  "Snacks & Sides": "Snacks 🍟",
  "Specials": "Specials ⭐",
  "Café Drinks": "Drinks ☕",
  "Desserts": "Desserts 🍰",
};

export const menuItems: MenuItem[] = [
  { id: 1,  name: "Classic FLAVV Burger",     category: "Burgers 🍔",   description: "Our signature juicy beef patty with fresh lettuce, tomato & secret sauce.", price: 350, image: img("photo-1568901346375-23c9450c58cd"), popular: true },
  { id: 2,  name: "Crispy Chicken Burger",    category: "Burgers 🍔",   description: "Golden crispy chicken fillet with creamy coleslaw.", price: 320, image: img("photo-1606755962773-d324e0a13086") },
  { id: 3,  name: "Double Smash Burger",      category: "Burgers 🍔",   description: "Two thin-crust smashed patties with melted cheese.", price: 550, image: img("photo-1553979459-d2229ba7433b"), popular: true },
  { id: 4,  name: "BBQ Beef Burger",          category: "Burgers 🍔",   description: "Smoky BBQ glazed beef with caramelized onions.", price: 420, image: img("photo-1594212699903-ec8a3eca50f5") },
  { id: 5,  name: "Zinger Burger",            category: "Burgers 🍔",   description: "Spicy breaded chicken fillet with jalapeno mayo.", price: 300, image: img("photo-1621178217049-0ab4bc5e59a2") },
  { id: 6,  name: "Loaded Fries",             category: "Snacks 🍟",    description: "Crispy fries topped with cheese sauce, jalapeños & beef bits.", price: 220, image: img("photo-1573080496219-bb080dd4f877") },
  { id: 7,  name: "Crispy Wings (6 pcs)",     category: "Snacks 🍟",    description: "Golden fried wings tossed in your choice of sauce.", price: 380, image: img("photo-1527477396000-e27163b481c2"), popular: true },
  { id: 8,  name: "Onion Rings",              category: "Snacks 🍟",    description: "Crunchy battered onion rings with dipping sauce.", price: 180, image: img("photo-1639024471283-03518883512d") },
  { id: 9,  name: "Garlic Bread",             category: "Snacks 🍟",    description: "Toasted bread with garlic butter and herbs.", price: 150, image: img("photo-1619531040576-f9416740661e") },
  { id: 10, name: "FLAVV Special Platter",    category: "Specials ⭐",   description: "A feast for two — burgers, wings, fries & drinks.", price: 900, image: img("photo-1565299507177-b0ac66763828"), popular: true },
  { id: 11, name: "Midnight Meal Deal",       category: "Specials ⭐",   description: "Late night combo: burger, fries & cold coffee.", price: 650, image: img("photo-1610970881699-44a5587cabec") },
  { id: 12, name: "Student Combo",            category: "Specials ⭐",   description: "Budget-friendly burger with fries & drink.", price: 450, image: img("photo-1586190848861-99aa4a171e90") },
  { id: 13, name: "Cold Coffee",              category: "Drinks ☕",     description: "Rich blended coffee with cream and ice.", price: 220, image: img("photo-1461023058943-07fcbe16d735") },
  { id: 14, name: "Mojito",                   category: "Drinks ☕",     description: "Refreshing mint and lime mocktail.", price: 200, image: img("photo-1551538827-9c037cb4f32a") },
  { id: 15, name: "Oreo Shake",               category: "Drinks ☕",     description: "Thick creamy milkshake loaded with Oreo crumbles.", price: 280, image: img("photo-1572490122747-3968b75cc699") },
  { id: 16, name: "Strawberry Smoothie",      category: "Drinks ☕",     description: "Fresh blended strawberry with yogurt.", price: 250, image: img("photo-1553530666-ba11a7da3888") },
  { id: 17, name: "Hot Cappuccino",           category: "Drinks ☕",     description: "Classic Italian-style cappuccino with frothy milk.", price: 200, image: img("photo-1534778101976-62847782c213") },
  { id: 18, name: "Brownie with Ice Cream",   category: "Desserts 🍰",  description: "Warm fudge brownie topped with vanilla ice cream.", price: 280, image: img("photo-1606313564200-e75d5e30476c") },
  { id: 19, name: "Nutella Waffle",           category: "Desserts 🍰",  description: "Crispy Belgian waffle drizzled with Nutella.", price: 320, image: img("photo-1598214886806-c97b55ada777") },
  { id: 20, name: "Gulab Jamun Cheesecake",   category: "Desserts 🍰",  description: "A fusion dessert — creamy cheesecake meets gulab jamun.", price: 350, image: img("photo-1567171466814-4d4a3b5a7e4b") },
];
