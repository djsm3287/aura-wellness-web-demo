"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-title"
      className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-600">
            Opiniones reales
          </span>
          <h2
            id="testimonios-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-graphite sm:text-4xl"
          >
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mt-4 text-base text-body sm:text-lg">
            Historias de recuperación que nos inspiran a seguir haciendo lo que
            amamos.
          </p>
        </div>

        {/* Rating summary */}
        <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card px-5 py-3 shadow-sm">
          <div className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-left leading-tight">
            <p className="text-sm font-bold text-graphite">4.9 / 5</p>
            <p className="text-xs text-body">+120 reseñas en Google</p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="relative flex flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <Quote
                aria-hidden
                className="absolute right-5 top-5 h-8 w-8 text-primary/15"
              />

              <div
                className="flex items-center gap-0.5 text-amber-400"
                aria-label={`${t.rating} de 5 estrellas`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1">
                <p className="text-[15px] leading-relaxed text-graphite">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                  aria-hidden
                >
                  {t.initials}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-graphite">{t.name}</p>
                  <p className="text-xs text-body">Paciente verificado</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
