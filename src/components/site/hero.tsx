"use client";

import * as React from "react";
import Image from "next/image";
import { Star, ChevronDown, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_BADGE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Hero() {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .querySelector("#servicios")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="relative overflow-hidden"
    >
      {/* soft decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-sky/70 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-graphite sm:text-5xl lg:text-[3.4rem]">
            Recupera tu movilidad y{" "}
            <span className="relative whitespace-nowrap text-primary">
              vive sin dolor
            </span>{" "}
            en pocas sesiones.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            Fisioterapia especializada y planes de rehabilitación
            personalizados. Tratamiento directo al origen de tu molestia.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-soft hover:shadow-lg hover:shadow-primary/20"
            >
              <a
                href={waLink(
                  "Hola, quiero agendar una cita en Aura Wellness",
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar cita por WhatsApp (se abre en una nueva pestaña)"
              >
                <WhatsAppIcon size={20} />
                Agendar Cita por WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-card px-6 text-base font-semibold text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <a href="#servicios" onClick={scrollToServices}>
                Ver Servicios
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </Button>
          </div>

          {/* Badge / social proof */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border/70 bg-card/70 px-4 py-2.5 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-medium text-body">
              <span className="font-bold text-graphite">4.9/5</span> en Google
              <span className="mx-1.5 text-border">·</span>
              <span className="text-body">+120 opiniones de pacientes</span>
            </p>
          </div>

          {/* trust row */}
          <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Diagnóstico claro",
                text: "Desde la 1ª sesión",
              },
              {
                icon: Clock,
                title: "Pocas sesiones",
                text: "Resultados visibles",
              },
              {
                icon: HeartHandshake,
                title: "Trato humano",
                text: "100% personalizado",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/60 p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-graphite">
                    {item.title}
                  </p>
                  <p className="text-xs text-body">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - image */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky/80 via-transparent to-primary/10 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-xl shadow-black/5">
              <Image
                src="/images/hero-clinic.png"
                alt="Fisioterapeuta profesional atendiendo a un paciente en una consulta iluminada y pulcra de Aura Wellness"
                width={864}
                height={1152}
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[600px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
              />
            </div>

            {/* floating card: session summary */}
            <div className="absolute -bottom-5 -left-3 hidden w-60 rounded-2xl border border-border/70 bg-card p-4 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-graphite">
                    +800 pacientes
                  </p>
                  <p className="text-xs text-body">recuperados este año</p>
                </div>
              </div>
            </div>

            {/* floating card: rating */}
            <div className="animate-float-soft absolute -top-4 -right-3 hidden rounded-2xl border border-border/70 bg-card p-3 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <div className="leading-tight">
                  <p className="text-sm font-bold text-graphite">4.9</p>
                  <p className="text-[10px] uppercase tracking-wide text-body">
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only visible badge line */}
      <div className="px-4 pb-10 sm:px-6 lg:hidden">
        <p className="text-center text-sm text-body">{HERO_BADGE}</p>
      </div>
    </section>
  );
}
