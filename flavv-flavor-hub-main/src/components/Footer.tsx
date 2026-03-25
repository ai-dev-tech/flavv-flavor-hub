import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-3xl text-primary neon-text mb-2">FLAVV</h3>
          <p className="text-muted-foreground text-sm">Feel The Flavor</p>
          <p className="text-muted-foreground text-sm mt-1">Open Till 3 AM 🌙</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <p className="font-heading text-lg tracking-wide text-foreground mb-1">Quick Links</p>
          {[
            { to: "/", label: "Home" },
            { to: "/menu", label: "Menu" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <p className="font-heading text-lg tracking-wide text-foreground mb-1">Connect</p>
          <a
            href="https://instagram.com/flavv.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Instagram size={18} /> @flavv.pk
          </a>
          <a
            href="https://wa.me/923273366851"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors text-sm"
          >
            <MessageCircle size={18} /> +92 327 3366851
          </a>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center">
        <p className="text-muted-foreground text-xs">
          © 2025 FLAVV — Feel The Flavor | Hyderabad, Pakistan
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
