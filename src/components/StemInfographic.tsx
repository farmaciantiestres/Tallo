import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Home, GraduationCap, Users, Leaf, Link2, Camera } from "lucide-react";

interface NodeData {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  colorClass: string;
  bgClass: string;
}

const nodes: NodeData[] = [
  {
    id: "hogar",
    title: "El Hogar",
    icon: <Home className="w-6 h-6" />,
    content:
      "Aquí arranca realmente todo el desarrollo del lenguaje, a punta de charlas cotidianas, canciones o los relatos de los mayores. De hecho, el Ministerio de Cultura (2017) resalta cómo estas interacciones tan simples son el puente para transmitir nuestra cultura. Es así como se afianza la identidad y se protegen las lenguas propias desde que son muy pequeños. Es un proceso sumamente orgánico.",
    colorClass: "bg-node-hogar",
    bgClass: "bg-node-hogar/10",
  },
  {
    id: "educativo",
    title: "Entorno Educativo",
    icon: <GraduationCap className="w-6 h-6" />,
    content:
      "Aquí nuestra tarea es agarrar esos saberes previos y organizarlos, dándoles una intención pedagógica más clara. El Ministerio de Educación Nacional (2018) lo deja claro: el aprendizaje no pasa solo dentro del salón de clases, es un escenario vital.",
    colorClass: "bg-node-educativo",
    bgClass: "bg-node-educativo/10",
  },
  {
    id: "comunidad",
    title: "Comunidad y Sociedad",
    icon: <Users className="w-6 h-6" />,
    content:
      "El trabajo no se queda en la escuela, porque la comunidad y el entorno social son los que terminan de abrirles el mundo. Ahí es donde ven otras formas de comunicarse, aprenden a reconocer la diversidad cultural del otro, interactuando, jugando y explorando su mundo.",
    colorClass: "bg-node-comunidad",
    bgClass: "bg-node-comunidad/10",
  },
  {
    id: "naturaleza",
    title: "Naturaleza",
    icon: <Leaf className="w-6 h-6" />,
    content:
      "Especialmente cuando trabajamos en contextos rurales, el contacto directo con el medio ambiente dispara la curiosidad de una forma que a veces cuesta lograr en un aula de cuatro paredes. Ninguno de estos espacios funciona por separado, se entrelazan.",
    colorClass: "bg-node-naturaleza",
    bgClass: "bg-node-naturaleza/10",
  },
];

const StemInfographic = () => {
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [showEnlaces, setShowEnlaces] = useState(false);
  const [showFotos, setShowFotos] = useState(false);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
          🌱 El Tallo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-2 max-w-xl mx-auto">
          La estructura del aprendizaje
        </p>
      </div>

      {/* Stem container */}
      <div className="relative max-w-md mx-auto">
        {/* SVG Stem */}
        <svg
          viewBox="0 0 200 700"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Main thick trunk */}
          <path
            d="M100 20 C95 100, 108 180, 100 260 C92 340, 110 420, 100 500 C90 580, 105 640, 100 680"
            stroke="hsl(30 40% 28%)"
            strokeWidth="42"
            fill="none"
            strokeLinecap="round"
          />
          {/* Trunk inner highlight */}
          <path
            d="M100 20 C95 100, 108 180, 100 260 C92 340, 110 420, 100 500 C90 580, 105 640, 100 680"
            stroke="hsl(30 35% 35%)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
          {/* Bark texture lines */}
          <path d="M88 60 L88 120" stroke="hsl(30 30% 20%)" strokeWidth="1.5" opacity="0.3" />
          <path d="M112 100 L112 170" stroke="hsl(30 30% 20%)" strokeWidth="1.5" opacity="0.3" />
          <path d="M90 200 L90 280" stroke="hsl(30 30% 20%)" strokeWidth="1.5" opacity="0.25" />
          <path d="M110 320 L110 400" stroke="hsl(30 30% 20%)" strokeWidth="1.5" opacity="0.3" />
          <path d="M92 440 L92 520" stroke="hsl(30 30% 20%)" strokeWidth="1.5" opacity="0.25" />
          <path d="M108 560 L108 640" stroke="hsl(30 30% 20%)" strokeWidth="1.5" opacity="0.3" />
          {/* Trunk knot marks */}
          {[80, 200, 350, 500, 620].map((y) => (
            <ellipse
              key={y}
              cx="100"
              cy={y}
              rx="22"
              ry="4"
              fill="hsl(30 35% 20%)"
              opacity="0.2"
            />
          ))}
          {/* Base / soil */}
          <ellipse
            cx="100"
            cy="685"
            rx="70"
            ry="16"
            fill="hsl(30 40% 25%)"
            opacity="0.6"
          />
        </svg>

        {/* Nodes overlaid on stem */}
        {nodes.map((node, i) => {
          const topPercent = 8 + i * 22;
          const isLeft = i % 2 === 0;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`absolute flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105`}
              style={{
                top: `${topPercent}%`,
                ...(isLeft
                  ? { right: "55%", flexDirection: "row-reverse" }
                  : { left: "55%" }),
              }}
            >
              <div
                className={`${node.colorClass} text-primary-foreground rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg node-pulse`}
              >
                {node.icon}
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground bg-card/80 backdrop-blur-sm px-3 py-1 rounded-lg shadow whitespace-nowrap">
                {node.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Resource buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <Button
          onClick={() => setShowEnlaces(true)}
          variant="default"
          className="gap-2 text-base px-6 py-5"
        >
          <Link2 className="w-5 h-5" />
          Enlaces
        </Button>
        <Button
          onClick={() => setShowFotos(true)}
          variant="secondary"
          className="gap-2 text-base px-6 py-5 border border-border"
        >
          <Camera className="w-5 h-5" />
          Fotos
        </Button>
      </div>

      {/* Node Modal */}
      <Dialog
        open={!!selectedNode}
        onOpenChange={() => setSelectedNode(null)}
      >
        <DialogContent className="max-w-lg">
          {selectedNode && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div
                    className={`${selectedNode.colorClass} text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center`}
                  >
                    {selectedNode.icon}
                  </div>
                  <DialogTitle className="text-xl">
                    {selectedNode.title}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <div className={`${selectedNode.bgClass} rounded-lg p-4 mt-2`}>
                <p className="text-foreground leading-relaxed">
                  {selectedNode.content}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Enlaces Modal */}
      <Dialog open={showEnlaces} onOpenChange={setShowEnlaces}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <Link2 className="w-5 h-5" /> Enlaces
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full rounded-lg overflow-hidden mt-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/hW8tu93jhnU"
              title="Video recurso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0"
            />
          </div>
          <p className="text-muted-foreground mt-3 leading-relaxed text-sm">
            El video nos muestra que el lenguaje se construye en el hacer, a
            través de la interacción y la experiencia viva. Mientras los niños
            se sumergen en el cuento, no solo escuchan, sino que activan su
            vocabulario y atención de una forma muy práctica. El habla crece
            entre la casa, la escuela y el día a día.
          </p>
        </DialogContent>
      </Dialog>

      {/* Fotos Modal */}
      <Dialog open={showFotos} onOpenChange={setShowFotos}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <Camera className="w-5 h-5" /> Fotos
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-[4/3] w-full rounded-lg overflow-hidden mt-2 bg-muted">
            <iframe
              src="https://docs.google.com/document/d/1EV9cqN2jvwxa2w4esmNMqrwRUxPSkSQc/preview"
              width="100%"
              height="100%"
              className="border-0"
              title="Registro fotográfico"
            />
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Registro fotográfico del proceso de aprendizaje y exploración.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StemInfographic;
