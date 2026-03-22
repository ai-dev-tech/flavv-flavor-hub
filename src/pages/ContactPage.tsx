import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { openWhatsApp } from "@/lib/whatsapp";

const info = [
  { icon: MapPin, label: "Address", value: "Main Qasimabad Road, opposite Sindh Bank, Hyderabad" },
  { icon: Phone, label: "Phone", value: "0310 3425717" },
  { icon: Clock, label: "Hours", value: "6:30 PM – 3:00 AM, Every Day" },
];

const ContactPage = () => (
  <Layout>
    <section className="py-24 px-4">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h1 className="font-heading text-5xl sm:text-6xl text-primary neon-text text-center mb-4">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            We'd love to hear from you
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            {info.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                  <item.icon size={22} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading text-lg tracking-wide text-foreground">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Social links */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/923273366851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-foreground font-heading text-lg tracking-wide px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97]"
                >
                  <MessageCircle size={22} /> WhatsApp: +92 327 3366851
                </a>
                <a
                  href="https://instagram.com/flavv.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-card border border-border hover:border-primary/40 text-foreground font-heading text-lg tracking-wide px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.97]"
                >
                  <Instagram size={22} className="text-primary" /> @flavv.pk
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-xl overflow-hidden border border-border h-full min-h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14316.13!2d68.3578!3d25.3960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70fd3d3e3a3b%3A0x2b!2sQasimabad%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FLAVV Location - Qasimabad, Hyderabad"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <h2 className="font-heading text-4xl text-primary neon-text mb-6">Ready to Order?</h2>
            <button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-500 text-foreground font-heading text-xl tracking-wide px-10 py-4 rounded-lg transition-all duration-200 active:scale-[0.97] animate-pulse-glow inline-flex items-center gap-3"
            >
              <MessageCircle size={24} /> Order on WhatsApp
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
