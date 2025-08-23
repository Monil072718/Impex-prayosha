import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/site/Section";
import { generateSEOMetadata } from "@/lib/seo";
import { Truck, Building, Fuel, Shield, Activity } from "lucide-react";
import productsData from "@/data/products.json";
import industriesData from "@/data/industries.json";

export const runtime = "edge";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Prayosha Impex - Advanced Coated Fabrics | Global Textile Solutions",
    description:
      "Leading manufacturer and exporter of PU, PVC, and Silicone coated fabrics. ISO 9001:2015 certified with global delivery and custom solutions.",
    path: "/",
  });
}

const MARQUEE_TOP: string[] = [
  "/images/slider/22.jpg",
  "/images/slider/air-mesh-fabric-500x500.webp",
  "/images/slider/awning-2.jpg",
  "/images/slider/awning.jpg",
  "/images/slider/bags_and_cases_series_big.jpg",
  "/images/slider/Cordura-Military-Header_1.jpg",
  "/images/slider/T2118E_039040_actionshot_1.avif"
];

const MARQUEE_BOTTOM: string[] = [
  "/images/slider/download.jpeg",
  "/images/slider/images-(1).jpeg",
  "/images/slider/lowsofdundee_lwtranslucentfr_1410625560A.avif",
  "/images/slider/lowsofdundee_translucentfr_1410624726pag.avif",
  "/images/slider/luggage-lining.jpg",
  "/images/slider/outdoor-clothing.jpg",
  "/images/slider/p2598974.avif",
];

const iconMap = {
  truck: Truck,
  building: Building,
  fuel: Fuel,
  shield: Shield,
  activity: Activity,
};

// Image marquee row (CSS-only seamless loop; uses .animate-marquee from globals.css)
function ImageMarqueeRow({
  images,
  reverse = false,
  speedSec = 36,
  itemClass = "w-108 md:w-116 h-80 md:h-96", // 👈 tile size (default)
  gap = "gap-6",                             // 👈 spacing between tiles
  paddingY = "py-4",                         // 👈 vertical padding of the row
}: {
  images: string[];
  reverse?: boolean;
  speedSec?: number;
  itemClass?: string;
  gap?: string;
  paddingY?: string;
}) {
  const safeImages = images.length ? images : ["/placeholder.svg"];
  const loop = [...safeImages, ...safeImages]; // duplicate for seamless loop

  return (
    <div className={`overflow-hidden ${paddingY}`}>
      <div className={`flex ${gap} whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`}>
        <ul
          className={`flex ${gap} animate-marquee ${reverse ? "animate-marquee-reverse" : ""}`}
          style={{ ["--marquee-duration" as any]: `${speedSec}s` }}
        >
          {loop.map((src, i) => (
            <li
              key={`${src}-${i}`}
              className={`relative ${itemClass} rounded-xl overflow-hidden shadow-sm border border-black/5 bg-white shrink-0`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt="Marquee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 384px, 512px"  // tune if you change widths
                priority={i < 4}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomePage() {
  // Build arrays of product images for the marquees
  const productImages = productsData.map((p) => p.image || "/placeholder.svg");

  return (
    <>
      {/* 1) Full-bleed banner with background image + overlay text (Refreshed UI) */}
      <section className="relative w-full h-[56vh] md:h-[68vh] lg:h-[78vh]">
        <Image
          src="/images/hero.jpg" // <-- replace with your actual banner
          alt="Prayosha Impex — Advanced Coated Fabrics"
          fill
          className="object-cover"
          priority
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30" />
        {/* centered content on a glass card */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-6 md:p-10 text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                Advanced Coated Fabrics — Engineered for Global Performance
              </h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-white/90">
                Leading manufacturer and exporter of advanced technical textile solutions. Serving global markets with ISO
                9001:2015 certified quality and innovation.
              </p>
              <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-white/80 to-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* 2) Full-bleed double image marquee (UNCHANGED as requested) */}
      <section className="w-full bg-gray-50 border-y border-black/5">
        <div className="mx-auto max-w-none">
          {/* Top: left → right */}
          <ImageMarqueeRow images={MARQUEE_TOP} reverse={false} speedSec={34} />
          {/* Bottom: right → left */}
          <ImageMarqueeRow images={MARQUEE_BOTTOM} reverse={true} speedSec={34} />
        </div>
      </section>

      {/* 3) Industries We Serve (Refreshed UI) */}
      <Section className="bg-white">
  {/* Heading */}
  <div className="text-center mb-14">
    <span className="inline-block rounded-full bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 ring-1 ring-blue-200">
      Our Expertise
    </span>
    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
      Industries We Serve
    </h2>
    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
      Our advanced coated fabrics serve diverse industries with specialized requirements.
    </p>
  </div>

  {/* Feature tiles with accent bar */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
    {industriesData.map((industry, idx) => {
      const Icon = iconMap[industry.icon as keyof typeof iconMap];
      return (
        <Card
          key={industry.name}
          className="relative overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Left accent bar */}
          <div
            className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b`}
          />

          {/* Subtle background shimmer */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-black/5 to-transparent blur-2xl" />

          <CardHeader className="pl-8 pr-6 pt-6">
            {Icon && (
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-700 ring-1 ring-gray-200">
                  <Icon className="h-6 w-6" />
                </span>
                <CardTitle className="text-lg md:text-xl tracking-tight">
                  {industry.name}
                </CardTitle>
              </div>
            )}
          </CardHeader>

          <CardContent className="pl-8 pr-6 pb-6">
            <CardDescription className="text-gray-600 leading-relaxed">
              {industry.description}
            </CardDescription>

            {/* tiny underline accent */}
            <div className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-900/20" />
          </CardContent>
        </Card>
      );
    })}
  </div>

  {/* CTA */}
  <div className="text-center mt-14">
    <Button
      size="lg"
      variant="outline"
      asChild
      className="rounded-xl border-2 hover:border-gray-900 hover:text-gray-900 transition-colors"
    >
      <Link href="/contact">Discuss Your Use Case</Link>
    </Button>
  </div>
</Section>

    </>
  );
}
