"use client";

import * as React from "react";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_NAME, LOCATION, NAV_LINKS, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      id="ubicacion"
      aria-labelledby="ubicacion-title"
      className="scroll-mt-20 bg-sky"
    >
      {/* Top CTA band */}
      <div className="border-b border-primary/10 bg-primary/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-graphite sm:text-3xl">
              ¿Listo para vivir sin dolor?
            </h3>
            <p className="mt-1 text-sm text-body sm:text-base">
              Agenda tu cita en menos de 2 clics y comienza tu recuperación hoy.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full shrink-0 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-soft hover:shadow-lg hover:shadow-primary/20 md:w-auto"
          >
            <a
              href={waLink("Hola, quiero agendar una cita en Aura Wellness")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar cita por WhatsApp"
            >
              <WhatsAppIcon size={20} />
              Agendar Cita Ahora
            </a>
          </Button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Column 1: Clinic info */}
          <div>
            <h2
              id="ubicacion-title"
              className="text-3xl font-extrabold tracking-tight text-graphite sm:text-4xl"
            >
              Ubicación &amp; Horarios
            </h2>
            <p className="mt-3 max-w-md text-base text-body">
              Te esperamos en una consulta cómoda y pulcra, diseñada para tu
              bienestar.
            </p>

            <div className="mt-8 space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-body">
                    Dirección
                  </p>
                  <p className="mt-0.5 text-[15px] font-medium leading-relaxed text-graphite">
                    {LOCATION.address}
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <p className="text-sm font-semibold uppercase tracking-wide text-body">
                    Horario
                  </p>
                  <ul className="mt-1 space-y-1">
                    {LOCATION.schedule.map((s) => (
                      <li
                        key={s.day}
                        className="flex flex-wrap items-baseline justify-between gap-x-3 text-[15px]"
                      >
                        <span className="font-medium text-graphite">
                          {s.day}
                        </span>
                        <span className="text-body">{s.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${LOCATION.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-graphite shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  aria-label={`Llamar al ${LOCATION.phone}`}
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {LOCATION.phone}
                </a>
                <a
                  href={waLink("Hola, quiero información sobre Aura Wellness")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-soft"
                  aria-label="Escribir por WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Map */}
          <div className="flex flex-col">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <iframe
                title="Mapa de ubicación de Aura Wellness"
                src={LOCATION.mapEmbedSrc}
                className="h-full min-h-[320px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={LOCATION.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-md backdrop-blur-sm transition-colors hover:bg-card"
              >
                Cómo llegar
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-graphite">
              {CLINIC_NAME}
            </span>
          </div>

          <nav
            aria-label="Enlaces de pie de página"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm font-medium text-body transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink("Hola, quiero agendar una cita en Aura Wellness")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-soft hover:shadow-md"
              aria-label="Agendar cita por WhatsApp"
            >
              <WhatsAppIcon size={16} />
              Agendar Cita
            </a>
          </nav>

          <p className="text-center text-xs text-body sm:text-right">
            © {year} {CLINIC_NAME}. Fisioterapia &amp; Salud Integral.
            <br className="hidden sm:block" /> Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
