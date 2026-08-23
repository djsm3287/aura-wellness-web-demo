"use client";

import * as React from "react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

/**
 * Floating WhatsApp button visible on mobile only.
 * Appears after the user scrolls past the hero to avoid covering the primary CTA.
 * Respects iOS safe area insets.
 */
export function StickyCta() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cnSticky(visible)}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <a
        href={waLink("Hola, quiero agendar una cita en Aura Wellness")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar cita ahora por WhatsApp"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-sage-soft active:scale-[0.98]"
      >
        <WhatsAppIcon size={20} />
        Agendar Cita Ahora
      </a>
    </div>
  );
}

function cnSticky(visible: boolean) {
  return [
    "fixed inset-x-0 bottom-0 z-50 px-4 pb-3 pt-2 md:hidden",
    "bg-gradient-to-t from-background via-background/95 to-transparent",
    "transition-all duration-300",
    visible
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-full opacity-0",
  ].join(" ");
}
