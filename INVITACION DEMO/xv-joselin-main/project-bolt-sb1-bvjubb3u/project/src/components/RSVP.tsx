import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { eventData } from "../data";
import Reveal from "./Reveal";

export default function RSVP() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);

  const buildWhatsAppLink = () => {
    const status = attending === "yes" ? "Sí asistiré" : "No podré asistir";
    const msg = `¡Hola! Soy ${name || "[tu nombre]"}. ${status} a la boda de Mariana & Alejandro. ${
      attending === "yes" ? `Seremos ${guests} persona(s).` : ""
    }`;
    const number = eventData.whatsappNumber;
    if (!number) {
      alert("Agrega el número de WhatsApp en src/data.ts");
      return;
    }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attending) {
      alert("Por favor confirma tu asistencia con anticipación.");
      return;
    }
    buildWhatsAppLink();
  };

  return (
    <Reveal className="mx-auto max-w-md">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-[#B8975A]/40 bg-white p-8 shadow-xl"
      >
        {/* CAMPO NOMBRE */}
        <div className="mb-6">
          <label className="mb-2 block font-sans-lux text-[10px] font-bold uppercase tracking-[0.3em] text-[#2C3B32]">
            Nombre
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre completo"
            className="w-full rounded-xl border border-[#2C3B32]/20 bg-[#FAF7F2] px-4 py-3 font-sans text-base text-[#2C3B32] placeholder-[#6B7C70]/70 focus:border-[#2C3B32] focus:outline-none"
          />
        </div>

        {/* NÚMERO DE INVITADOS */}
        <div className="mb-8">
          <label className="mb-2 block font-sans-lux text-[10px] font-bold uppercase tracking-[0.3em] text-[#2C3B32]">
            Número de invitados
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2C3B32]/30 bg-[#FAF7F2] text-xl font-bold text-[#2C3B32] transition hover:bg-[#2C3B32] hover:text-white"
            >
              −
            </button>
            <span className="font-serif text-2xl font-bold text-[#2C3B32] tabular-nums">
              {guests}
            </span>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(5, g + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2C3B32]/30 bg-[#FAF7F2] text-xl font-bold text-[#2C3B32] transition hover:bg-[#2C3B32] hover:text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* SELECCIÓN SÍ / NO */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            type="button"
            onClick={() => setAttending("yes")}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 font-sans-lux text-xs font-bold uppercase tracking-[0.2em] transition ${
              attending === "yes"
                ? "border-[#2C3B32] bg-[#2C3B32] text-white"
                : "border-[#2C3B32]/20 bg-[#FAF7F2] text-[#2C3B32] hover:border-[#2C3B32]"
            }`}
          >
            <Check className="h-4 w-4" />
            Sí asistiré
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setAttending("no")}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 font-sans-lux text-xs font-bold uppercase tracking-[0.2em] transition ${
              attending === "no"
                ? "border-[#8B3A3A] bg-[#8B3A3A] text-white"
                : "border-[#2C3B32]/20 bg-[#FAF7F2] text-[#2C3B32] hover:border-[#8B3A3A]"
            }`}
          >
            <X className="h-4 w-4" />
            No podré asistir
          </motion.button>
        </div>

        {/* BOTÓN WHATSAPP */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 w-full rounded-xl bg-[#2C3B32] py-4 font-sans-lux text-xs font-bold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-[#1f2a24]"
        >
          Confirmar por WhatsApp
        </motion.button>
      </form>
    </Reveal>
  );
}
