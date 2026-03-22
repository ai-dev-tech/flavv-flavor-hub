import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { menuItems, categories } from "@/lib/menuData";
import { openWhatsAppOrder } from "@/lib/whatsapp";

const MenuPage = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <Layout>
      <section className="py-24 px-4">
        <div className="container">
          <ScrollReveal>
            <h1 className="font-heading text-5xl sm:text-6xl text-primary neon-text text-center mb-4">
              Our Menu
            </h1>
            <p className="text-muted-foreground text-center mb-10">
              Tap any dish to order directly on WhatsApp
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
                <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(355,78%,56%,0.15)] transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-heading tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                      #{String(item.id).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl tracking-wide text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {item.description}
                  </p>
                  <button
                    onClick={() => openWhatsAppOrder(item.name, item.id)}
                    className="w-full bg-green-600 hover:bg-green-500 text-foreground font-heading text-sm tracking-wide px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-[0.97] group-hover:animate-pulse-glow flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} /> Order on WhatsApp
                  </button>
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
