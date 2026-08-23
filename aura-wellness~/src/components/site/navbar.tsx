"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CLINIC_NAME, NAV_LINKS, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="group flex items-center gap-2"
          aria-label={`${CLINIC_NAME} - Inicio`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-graphite">
              Aura Wellness
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-body">
              Fisioterapia &amp; Salud
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-body transition-colors duration-200 hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5"
          >
            <a
              href={waLink("Hola, quiero agendar una cita en Aura Wellness")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar cita por WhatsApp"
            >
              <WhatsAppIcon size={16} />
              Agendar Cita
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-graphite transition-colors hover:bg-muted md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-3 rounded-2xl border border-border/70 bg-card p-3 shadow-sm">
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button
              asChild
              className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:bg-sage-soft"
            >
              <a
                href={waLink("Hola, quiero agendar una cita en Aura Wellness")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={16} />
                Agendar Cita por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
