import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, MessageCircle, Plus, MapPin, Utensils } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { openWhatsApp } from "@/lib/whatsapp";
import { menuItems } from "@/lib/menuData";
import { useCart } from "@/contexts/CartContext";
import heroBg from "@/assets/hero-bg.jpg";

const reviews = [
  { text: "Best burger in Hyderabad!", author: "Ahmed K." },
  { text: "The ambiance is fire 🔥, perfect for hangouts", author: "Sara M." },
  { text: "Late night cravings sorted! FLAVV never disappoints.", author: "Bilal R." },
];

const fanFavorites = menuItems.filter((i) => i.popular).slice(0, 4);

const stats = [
  { value: "484+", label: "Happy Customers" },
  { value: "20+", label: "Dishes" },
  { value: "3 AM", label: "Open Till" },
];

const Index = () => {
  const { addToCart } = useCart();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-7xl sm:text-9xl text-primary neon-text-strong leading-none"
          >
            FLAVV
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-2xl sm:text-3xl text-secondary tracking-[0.3em] mt-2"
          >
            Feel The Flavor
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-wide px-8 py-3 rounded-lg transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2"
            >
              <Utensils size={20} /> Order Now
            </Link>
            <Link
              to="/gallery"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading text-lg tracking-wide px-8 py-3 rounded-lg transition-all duration-200 active:scale-[0.97]"
            >
              View Gallery
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl sm:text-4xl text-foreground">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-4">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <h2 className="font-heading text-4xl sm:text-5xl text-primary neon-text mb-6 leading-[1.1]">
                  About FLAVV
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  FLAVV is Hyderabad's boldest café experience — where every bite tells a story.
                  From sizzling burgers to café classics, we serve flavor with attitude.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock size={18} className="text-secondary shrink-0" />
                    <span>Open 6:30 PM – 3:00 AM daily</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin size={18} className="text-secondary shrink-0" />
                    <span>Main Qasimabad Road, Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MessageCircle size={18} className="text-secondary shrink-0" />
                    <span>+92 327 3366851</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format&q=80"
                  alt="FLAVV restaurant interior"
                  className="w-full h-72 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fan Favorites */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl text-primary neon-text text-center mb-4 leading-[1.1]">
              Fan Favorites
            </h2>
            <p className="text-muted-foreground text-center mb-12">Our most loved dishes</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {fanFavorites.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg tracking-wide text-foreground mb-1">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl text-secondary">Rs. {item.price}</span>
                      <button
                        onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                        className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all active:scale-95"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                to="/menu"
                className="font-heading text-lg tracking-wide text-primary hover:text-primary/80 transition-colors"
              >
                View Full Menu →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-4">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl text-primary neon-text text-center mb-12 leading-[1.1]">
              What People Say
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">"{r.text}"</p>
                  <p className="text-muted-foreground text-sm">— {r.author}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <ScrollReveal>
          <div className="container max-w-2xl text-center">
            <h2 className="font-heading text-5xl sm:text-6xl text-primary neon-text mb-6 leading-[1.1]">
              Hungry?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Order now and get your food delivered fresh & hot.
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-500 text-foreground font-heading text-xl tracking-wide px-10 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] animate-pulse-glow flex items-center justify-center gap-3 mx-auto"
            >
              <MessageCircle size={24} /> Order Now on WhatsApp
            </button>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Index;
