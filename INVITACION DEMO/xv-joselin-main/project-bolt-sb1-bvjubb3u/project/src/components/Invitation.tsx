import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Gift,
  Sparkles,
  Heart,
} from "lucide-react";
import Countdown from "./Countdown";
import Slideshow from "./Slideshow";
import RSVP from "./RSVP";
import Reveal from "./Reveal";
import Fireworks from "./Fireworks";
import GoldenParticles from "./GoldenParticles";
import { eventData } from "../data";

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-[#B8975A]">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B8975A]/50" />
      <Sparkles className="h-3.5 w-3.5" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B8975A]/50" />
    </div>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

export default function Invitation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-[#FAF7F2] text-[#2C3B32]"
    >
      <GoldenParticles density={30} />

      {/* PRESENTACIÓN DE BODA */}
      <Section className="flex min-h-screen flex-col items-center justify-center text-center">
        <Reveal>
          <p className="font-sans-lux text-xs uppercase tracking-[0.5em] text-[#6B7C70]">
            NUESTRA BODA
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 font-serif text-xl font-light text-[#2C3B32] sm:text-2xl">
            Con la bendición de Dios y de nuestros padres
          </p>
          <p className="mt-2 font-sans-lux text-xs uppercase tracking-[0.25em] text-[#6B7C70]">
            Tenemos el honor de invitarte a celebrar nuestra unión matrimonial
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <Ornament />
        </Reveal>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-serif text-4xl font-light leading-tight text-[#B8975A] sm:text-6xl"
        >
          {eventData.quinceaneraName}
        </motion.h1>

        <Reveal delay={0.6}>
          <p className="mx-auto mt-8 max-w-md font-serif text-lg font-light italic leading-relaxed text-[#2C3B32]/90">
            "El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección."
            <br />
            Hoy iniciamos una nueva etapa y queremos compartir la alegría con quienes más amamos.
          </p>
        </Reveal>
      </Section>

      {/* CUENTA REGRESIVA */}
      <Section id="cuenta">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="mt-6 font-serif text-3xl font-light text-[#2C3B32] sm:text-4xl">
            Cuenta regresiva para el gran día...
          </h2>
        </Reveal>
        <div className="mt-12">
          <Countdown targetDate={eventData.eventDate} />
        </div>
      </Section>

      {/* SLIDESHOW */}
      <Section id="galeria">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="mt-6 font-serif text-3xl font-light text-[#2C3B32] sm:text-4xl">
            Nuestra Historia de Amor
          </h2>
          <p className="mt-3 font-sans-lux text-xs uppercase tracking-[0.3em] text-[#6B7C70]">
            Nuestros mejores momentos juntos
          </p>
        </Reveal>
        <div className="mt-12">
          <Slideshow images={eventData.slideshow} />
        </div>
      </Section>

      {/* INFORMACIÓN DEL EVENTO */}
      <Section id="info">
        <Reveal>
          <div className="rounded-3xl border border-[#B8975A]/20 bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm sm:p-12">
            <Ornament />
            <h2 className="mt-6 font-serif text-3xl font-light text-[#2C3B32] sm:text-4xl">
              Celebremos Juntos Nuestra Boda
            </h2>

            <div className="mt-10 space-y-8">
              {/* FECHA */}
              <div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#B8975A]/30 bg-[#B8975A]/10">
                  <Calendar className="h-6 w-6 text-[#B8975A]" />
                </div>
                <p className="font-sans-lux text-[10px] uppercase tracking-[0.3em] text-[#6B7C70]">
                  Fecha
                </p>
                <p className="mt-2 font-serif text-2xl text-[#B8975A]">
                  {eventData.eventDateLabel}
                </p>
              </div>

              <div className="mx-auto h-px w-16 bg-[#B8975A]/30" />

              {/* HORA */}
              <div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#B8975A]/30 bg-[#B8975A]/10">
                  <Clock className="h-6 w-6 text-[#B8975A]" />
                </div>
                <p className="font-sans-lux text-[10px] uppercase tracking-[0.3em] text-[#6B7C70]">
                  Hora
                </p>
                <p className="mt-2 font-serif text-2xl text-[#B8975A]">
                  {eventData.eventTime}
                </p>
              </div>

              <div className="mx-auto h-px w-16 bg-[#B8975A]/30" />

              {/* LUGAR */}
              <div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#B8975A]/30 bg-[#B8975A]/10">
                  <MapPin className="h-6 w-6 text-[#B8975A]" />
                </div>
                <p className="font-sans-lux text-[10px] uppercase tracking-[0.3em] text-[#6B7C70]">
                  Lugar del Evento
                </p>
                <p className="mx-auto mt-2 max-w-xs font-serif text-xl leading-relaxed text-[#2C3B32]">
                  {eventData.venueName}
                </p>
              </div>

              <motion.a
                href={eventData.mapLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#B8975A] bg-[#B8975A] px-8 py-4 font-sans-lux text-xs uppercase tracking-[0.25em] text-white shadow-md transition hover:bg-[#a08149]"
              >
                <MapPin className="h-4 w-4" />
                Ver ubicación GPS
              </motion.a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CÓDIGO DE VESTIMENTA Y COLORES RESERVADOS */}
      <Section id="dresscode">
        <Reveal>
          <div className="rounded-3xl border border-[#B8975A]/20 bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm sm:p-12">
            
            {/* Contenedor de trajes */}
            <div className="mx-auto mb-6 flex items-center justify-center gap-6">
              {/* Imagen Traje Hombre */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#B8975A]/30 bg-[#FAF7F2] p-3 shadow-sm">
                  <img 
                    src="/Traje.png" 
                    alt="Traje de hombre" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-sans-lux text-[10px] uppercase tracking-[0.2em] text-[#6B7C70]">
                  Caballeros
                </span>
              </div>

              {/* Imagen Vestido Mujer */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#B8975A]/30 bg-[#FAF7F2] p-3 shadow-sm">
                  <img 
                    src="/Vestido.png" 
                    alt="Vestido de novia/gala" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-sans-lux text-[10px] uppercase tracking-[0.2em] text-[#6B7C70]">
                  Damas
                </span>
              </div>
            </div>

            <h2 className="font-serif text-2xl font-light text-[#2C3B32] sm:text-3xl">
              Código de Vestimenta
            </h2>
            <p className="mt-3 font-serif text-3xl italic text-[#B8975A] sm:text-4xl">
              Traje Formal / Gala
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Ornament />
          <h3 className="mt-6 font-serif text-2xl font-light text-[#2C3B32]">
            Colores Reservados
          </h3>
          <p className="mt-3 font-sans-lux text-xs uppercase tracking-[0.25em] text-[#6B7C70]">
            Reservados exclusivamente para la novia
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {eventData.reservedColors.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 150 }}
                className="flex flex-col items-center gap-3"
              >
                <div
                  className="h-20 w-20 rounded-full shadow-md ring-2 ring-[#B8975A]/30 ring-offset-2 ring-offset-[#FAF7F2]"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="font-sans-lux text-[10px] uppercase tracking-[0.2em] text-[#6B7C70]">
                  {c.name}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* MESA DE REGALOS / LLUVIA DE SOBRES */}
      <Section id="regalos">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#B8975A]/20 bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm sm:p-12">
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120 }}
              className="mx-auto mb-6 flex h-20 w-24 items-center justify-center"
            >
              <Gift className="h-16 w-16 text-[#B8975A]" />
            </motion.div>
            <h2 className="font-serif text-2xl font-light text-[#2C3B32] sm:text-3xl">
              Mesa de Regalos
            </h2>
            <p className="mx-auto mt-5 max-w-sm font-serif text-lg italic leading-relaxed text-[#2C3B32]/90">
              Su presencia es nuestro mejor regalo.
              <br />
              <br />
              Si desean hacernos un obsequio, tendremos la opción de:
              <br />
              <strong className="font-normal text-[#B8975A]">¡Lluvia de Sobres!</strong>
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CONFIRMACIÓN DE ASISTENCIA */}
      <Section id="confirmacion">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="mt-6 font-serif text-3xl font-light text-[#2C3B32] sm:text-4xl">
            Confirmación de Asistencia
          </h2>
          <p className="mt-3 font-sans-lux text-xs uppercase tracking-[0.25em] text-[#6B7C70]">
            Agradecemos confirmar tu asistencia con anticipación
          </p>
        </Reveal>
        <div className="mt-10">
          <RSVP />
        </div>
      </Section>

      {/* DESPEDIDA */}
      <Section id="despedida" className="relative overflow-hidden">
        <Fireworks />
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto mb-8 flex h-16 w-16 items-center justify-center"
          >
            <Heart className="h-10 w-10 text-[#B8975A]" />
          </motion.div>

          <Reveal>
            <p className="mx-auto max-w-md font-serif text-xl font-light italic leading-relaxed text-[#2C3B32]/90">
              Gracias por acompañarnos a celebrar el día más importante de nuestras vidas.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-md font-serif text-lg font-light italic leading-relaxed text-[#6B7C70]">
              Tu presencia hará que nuestra boda sea sencillamente inolvidable.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10">
              <Ornament />
              <p className="mt-6 font-sans-lux text-[10px] uppercase tracking-[0.4em] text-[#6B7C70]">
                Con mucho amor
              </p>
              <p className="mt-4 font-serif text-2xl font-light text-[#B8975A] sm:text-3xl">
                {eventData.quinceaneraName}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <footer className="relative border-t border-[#B8975A]/20 py-8 text-center">
        <p className="font-sans-lux text-[10px] uppercase tracking-[0.3em] text-[#6B7C70]">
          Nuestra Boda · {eventData.eventDateLabel}
        </p>
      </footer>
    </motion.div>
  );
}
