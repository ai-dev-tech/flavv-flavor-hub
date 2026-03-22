import { useState } from "react";
import { Plus } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { menuItems, categories } from "@/lib/menuData";
import { useCart } from "@/contexts/CartContext";

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const { addToCart } = useCart();

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="container">
          <ScrollReveal>
            <h1 className="font-heading text-5xl sm:text-6xl text-primary neon-text text-center mb-4 leading-[1.1]">
              Our Menu
            </h1>
            <p className="text-muted-foreground text-center mb-10">
              Tap the + button to add items to your cart
            </p>
          </ScrollReveal>

          {/* Category tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`font-heading text-sm tracking-wide px-5 py-2 rounded-full border transition-all duration-200 active:scale-[0.97] ${
                    active === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={(i % 6) * 0.06}>
                <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_20px_hsl(355,78%,56%,0.15)] transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="text-xs font-heading tracking-wider text-primary-foreground bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        #{String(item.id).padStart(2, "0")}
                      </span>
                      {item.popular && (
                        <span className="text-xs font-heading tracking-wider text-secondary-foreground bg-secondary/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-heading text-xl tracking-wide text-foreground leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-heading text-2xl text-secondary shrink-0 leading-none">
                        Rs. {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-sm tracking-wide px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2"
                    >
                      <Plus size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
