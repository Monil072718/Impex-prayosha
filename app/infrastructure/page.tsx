
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import ContainerScroll from "@/components/ui/container-scroll-animation";
import { Calendar } from "lucide-react";
import { generateSEOMetadata } from "@/lib/seo";

export const runtime = "edge";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Infrastructure - Weaving, Coating, Finishing & Lamination",
    description:
      "Overview of our core manufacturing units: Weaving, Coating, Finishing, and Lamination.",
    path: "/infrastructure",
  });
}

type Unit = {
  key: string;
  title: string;
  description: string;
  image?: string;
};

const UNITS: Unit[] = [
  {
    key: "weaving",
    title: "Weaving Unit",
    description:
      "Our state-of-the-art waterjet weaving unit is equipped with high-speed looms to produce premium-quality woven fabrics with exceptional precision and efficiency. We specialize in polyester and nylon base fabrics for technical applications. Installed weaving capacity: ~300,000 m/month.",
    image: "/images/infrastructure/Waterjet-WEaving.jpg",
  },
  {
    key: "coating",
    title: "Coating Unit",
    description:
      "Our coating unit uses advanced knife-over-roll and transfer processes to deliver PU (polyurethane), PVC (polyvinyl chloride), and silicone-coated fabrics. Precision-controlled lines ensure uniform coating thickness, excellent adhesion, and high-performance finishes that meet international standards. Coating enhances durability, flexibility, water resistance, UV stability, and flame-retardant properties—ideal for awnings, tents, umbrellas, rainwear, luggage, and military-grade textiles.",
    image: "/images/infrastructure/Coating-Unit.png",
  },
  {
    key: "finishing",
    title: "Finishing Unit",
    description:
      "Our calendering & finishing unit uses heated rollers under controlled pressure to achieve the desired finish, thickness, and surface properties. This process improves smoothness, gloss, and coating adhesion. We also provide embossing, slitting, and precise rewinding to deliver ready-to-use rolls for PU-, PVC-, and silicone-coated fabrics.",
    image: "/images/infrastructure/Calendering-Process.jpg",
  },
  {
    key: "lamination",
    title: "Lamination Unit",
    description:
      "Our lamination unit supports adhesive and flame lamination for multi-layer technical textiles. With tightly controlled temperature, pressure, and speed, we produce consistent composites with high strength, barrier performance, and durability. Typical applications include awnings, umbrellas, rainwear, military gear, luggage, and industrial textiles—validated through stringent quality checks to meet international standards.",
    image: "/images/infrastructure/lamination.jpg",
  },
];

const FACILITY_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/Facility/IMG_7947.jpg", alt: "Weaving floor with high-speed looms" },
  { src: "/images/Facility/kusumgar-production-capabilities.jpg", alt: "Coating line in operation" },
  { src: "/images/Facility/Picture-2.png", alt: "Calendering rollers for finishing" },
  { src: "/images/Facility/Picture-4.png", alt: "Lamination unit for composites" },
  { src: "/images/Facility/Picture-8.png", alt: "Quality control lab testing setup" },
  { src: "/images/Facility/Picture-10.png", alt: "Finished goods warehouse" },
];

export default function InfrastructurePage() {
  return (
    <>
      <Section className="bg-white py-16">
        <div className="space-y-24">
          {UNITS.map((u, idx) => {
            const flip = idx % 2 === 1;
            return (
              <div key={u.key} className="flex flex-col overflow-hidden">
                <ContainerScroll
                  titleComponent={
                    <div
                      className={[
                        "max-w-4xl mx-auto px-4 sm:px-6",
                        flip ? "lg:text-right" : "lg:text-left",
                      ].join(" ")}
                    >
                      <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                        {u.title}
                      </h2>
                      <p className="mt-4 mb-3 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        {u.description}
                      </p>

                      <div
                        className={[
                          "mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gray-900/90 to-gray-900/20",
                          flip ? "ml-auto" : "mr-auto",
                        ].join(" ")}
                      />
                    </div>
                  }
                >
                  <Image
                    src={u.image || "/placeholder.svg"}
                    alt={u.title}
                    width={1000}
                    height={520}
                    priority={idx === 0}
                    draggable={false}
                    className={[
                      "mx-auto rounded-2xl object-cover h-full",
                      flip ? "object-right-top" : "object-left-top",
                      "shadow-2xl ring-1 ring-black/5",
                    ].join(" ")}
                  />
                </ContainerScroll>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Facility Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our manufacturing facilities and quality control laboratories.
          </p>
        </div>

        {/* Minimal, even grid with captions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITY_IMAGES.map((img, i) => (
            <figure
              key={i}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  priority={i < 2}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

            </figure>
          ))}
        </div>
      </Section>


    </>
  );
}
