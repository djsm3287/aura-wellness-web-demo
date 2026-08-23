"use client";

import * as React from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { SERVICES, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="scroll-mt-20 bg-card py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Especialidades
          </span>
          <h2
            id="servicios-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-graphite sm:text-4xl"
          >
            Especialidades y Tratamientos
          </h2>
          <p className="mt-4 text-base text-body sm:text-lg">
            Atención 100% personalizada adaptada a tu diagnóstico.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              className="group relative flex flex-col rounded-2xl border border-border/70 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
            >
              {/* number watermark */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-4 select-none text-6xl font-black text-muted/60 transition-colors duration-300 group-hover:text-primary/10"
              >
                0{idx + 1}
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </span>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-graphite">
                {service.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-body">
                {service.description}
              </p>

              {/* meta */}
              <div className="mt-5 flex items-center gap-4 border-t border-border/60 pt-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-body">
                  <Clock className="h-4 w-4 text-primary" />
                  {service.meta}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-graphite">
                  <Tag className="h-4 w-4 text-primary" />
                  {service.price}
                </span>
              </div>

              {/* CTA */}
              <a
                href={waLink(service.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Reservar ${service.title} por WhatsApp`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3 hover:bg-primary hover:text-primary-foreground"
              >
                <WhatsAppIcon size={16} />
                Reservar este servicio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-body">
          ¿No sabes cuál necesitas?{" "}
          <a
            href={waLink(
              "Hola, me gustaría una valoración para saber qué tratamiento me conviene",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Solicita una valoración gratuita por WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
