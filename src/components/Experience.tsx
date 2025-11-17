import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center my-16">
          Experiencia Profesional
        </h2>

        <div className="space-y-8">
          <ExperienceItem
            title="Operador de Software & Desarrollador Interno"
            company="TV Perú (Canal 7)"
            years="Marzo 2021 - Presente"
            description="Desarrollo de herramientas internas en C# para apoyar transmisiones en vivo. Encargado de operar software durante programas televisivos, garantizando la estabilidad técnica en entornos de alta presión."
            stack={["C#", ".NET", "Broadcast Tools"]}
          />

          <ExperienceItem
            title="Desarrollador de Juegos de Realidad Virtual"
            company="Tecnologías del Conocimiento SAC"
            years="Abril 2023 - Noviembre 2023"
            description="Diseño y programación de experiencias inmersivas en entornos de realidad virtual. Integración de interacciones avanzadas con dispositivos VR y coordinación con equipos multidisciplinarios para el desarrollo de productos educativos y de simulación."
            stack={["Unity", "C#", "VR Development"]}
          />

          <ExperienceItem
            title="Programador de Videojuegos"
            company="Rebel Rabbit - RBLRBT SAC"
            years="Febrero 2022 - Marzo 2023"
            description="Implementación de mecánicas de juego, refactorización de sistemas heredados y desarrollo de herramientas personalizadas para mejorar la productividad del equipo. Participación activa en la definición técnica de features."
            stack={["Unity", "C#", "Custom Tools"]}
          />

          <ExperienceItem
            title="Desarrollador de Juegos 2D"
            company="Net Dreams - REGOB EIRL"
            years="Enero 2021 - Enero 2022"
            description="Creación de videojuegos casuales utilizando GameMaker y JavaScript. Trabajo conjunto con diseñadores y artistas para cumplir deadlines exigentes y asegurar la calidad técnica de los proyectos."
            stack={["GameMaker", "JavaScript", "C#"]}
          />
        </div>
      </div>
    </section>
  );
}