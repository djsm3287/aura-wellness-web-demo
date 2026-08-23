import {
  Activity,
  HeartPulse,
  HandHeart,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** WhatsApp business number (international format, no +, no spaces). */
export const WHATSAPP_NUMBER = "15551234567";
export const PHONE_DISPLAY = "+1 (555) 123-4567";

export const CLINIC_NAME = "Aura Wellness";

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicación", href: "#ubicacion" },
] as const;

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const HERO_BADGE = "⭐ 4.9/5 estrellas en Google (+120 opiniones de pacientes)";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  meta: string;
  price: string;
  waMessage: string;
};

export const SERVICES: Service[] = [
  {
    id: "deportiva",
    icon: Activity,
    title: "Fisioterapia Deportiva",
    description:
      "Prevención y tratamiento de lesiones musculares, esguinces y optimización del rendimiento físico.",
    meta: "45 min",
    price: "$40",
    waMessage: "Hola, quiero información sobre Fisioterapia Deportiva",
  },
  {
    id: "rehabilitacion",
    icon: HeartPulse,
    title: "Rehabilitación y Manejo del Dolor",
    description:
      "Alivio efectivo para dolor de espalda, cuello, ciática y recuperación post-quirúrgica.",
    meta: "60 min",
    price: "$50",
    waMessage: "Hola, quiero información sobre Rehabilitación y Manejo del Dolor",
  },
  {
    id: "masaje",
    icon: HandHeart,
    title: "Masaje Terapéutico y Descarga",
    description:
      "Liberación miofascial y técnicas manuales para eliminar la tensión acumulada por estrés o postura.",
    meta: "50 min",
    price: "$45",
    waMessage: "Hola, quiero información sobre Masaje Terapéutico y Descarga",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "carlos",
    name: "Carlos M.",
    initials: "CM",
    quote:
      "Llegué con un dolor lumbar agudo que no me dejaba trabajar. En 3 sesiones volví a mi rutina normal sin dolor. Excelente atención.",
    rating: 5,
  },
  {
    id: "andrea",
    name: "Dra. Andrea V.",
    initials: "AV",
    quote:
      "Trato súper humano y profesional. Te explican exactamente qué tienes y cómo van a tratarlo desde el día 1.",
    rating: 5,
  },
  {
    id: "gabriel",
    name: "Gabriel R.",
    initials: "GR",
    quote:
      "La rehabilitación de mi rodilla tras la operación fue impecable. Recomiendo Aura Wellness con los ojos cerrados.",
    rating: 5,
  },
];

export const LOCATION = {
  address: "Av. Principal, Centro Médico Los Cerezos, Piso 2, Consultorio 204",
  schedule: [
    { day: "Lunes a Viernes", hours: "8:00 AM – 6:00 PM" },
    { day: "Sábados", hours: "9:00 AM – 2:00 PM" },
  ],
  phone: PHONE_DISPLAY,
  // Google Maps embed (placeholder location). Works without an API key via the
  // ?output=embed endpoint. Replace the `q` query with the real clinic address
  // (or swap for a /maps/embed?pb=... permalink) once the physical location is set.
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Aura%20Wellness%20Fisioterapia&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Aura%20Wellness%20Fisioterapia",
};

export const CONTACT_ICONS = { MapPin, Clock, Phone, MessageCircle, Star };
