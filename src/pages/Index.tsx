import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { openWhatsApp } from "@/lib/whatsapp";
import heroBg from "@/assets/hero-bg.jpg";

const reviews = [
  { text: "Best burger in Hyderabad!", author: "Ahmed K." },
  { text: "The ambiance is fire 🔥, perfect for hangouts", author: "Sara M." },
  { text: "Late night cravings sorted! FLAVV never disappoints.", author: "Bilal R." },
];

const Index = () => (
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
          <button
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-500 text-foreground font-heading text-lg tracking-wide px-8 py-3 rounded-lg transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> Order on WhatsApp
          </button>
          <Link
            to="/menu"
            className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading text-lg tracking-wide px-8 py-3 rounded-lg transition-all duration-200 active:scale-[0.97]"
          >
            View Menu
          </Link>
        </motion.div>
      </div>
    </section>

    {/* About */}
    <section className="py-24 px-4">
      <div className="container max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl sm:text-5xl text-primary neon-text mb-6">
            About FLAVV
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-lg leading-relaxed">
            FLAVV is Hyderabad's boldest café experience — where every bite tells a story.
            From sizzling burgers to café classics, we serve flavor with attitude.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-8 inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3">
            <Clock size={18} className="text-secondary" />
            <span className="font-heading text-lg tracking-wide text-secondary">
              Open 6:30 PM – 3:00 AM
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
            {[
              "484+ Happy Customers",
              "Open Till 3 AM",
              "⭐ Top Rated",
            ].map((stat) => (
              <div
                key={stat}
                className="bg-card border border-border rounded-lg px-6 py-4"
              >
                <span className="font-heading text-xl text-foreground tracking-wide">
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Reviews */}
    <section className="py-24 px-4 bg-card/50">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-heading text-4xl sm:text-5xl text-primary neon-text text-center mb-12">
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
          <h2 className="font-heading text-5xl sm:text-6xl text-primary neon-text mb-6">
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

export default Index;
