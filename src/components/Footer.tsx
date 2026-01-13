import { motion } from "framer-motion";
import { Leaf, Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import cocoLogo from "@/assets/coco-logo.png";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Our Story", href: "#story" },
  { name: "Ingredients", href: "#ingredients" },
  { name: "Contact", href: "#" },
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/30 to-muted/50 pt-16 md:pt-24 pb-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={cocoLogo} alt="COCO & CO." className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Handcrafted organic soaps made with love, using only the purest
              botanicals nature has to offer. Your skin deserves better.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-card border border-border/30 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@cocoandco.com" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors text-sm">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <span>hello@cocoandco.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919999999999" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors text-sm">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <span>+91 99999 99999</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Sustainability Promise */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Our Promise</h3>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-5 border border-secondary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-serif font-semibold text-foreground">Eco-Conscious</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every purchase supports sustainable farming and plastic-free packaging.
                Together, we're making a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} COCO & CO. All rights reserved.
          </p>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made By</span>
            <span>CodeVerses</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
