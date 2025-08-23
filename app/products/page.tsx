"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/site/Section";
import productsData from "@/data/products.json";

export const runtime = "edge";

type Product = {
  slug?: string;
  name: string;
  summary: string;
  image?: string;
};

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");


export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        {/* soft background glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-black/10 backdrop-blur">
            Coated Fabrics
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Our Products
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-600">
            High-performance coated fabrics for demanding applications.
          </p>

          {/* accent underline */}
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-700/80 to-indigo-500/60" />

          {/* optional CTA row (remove if not needed) */}
          {/* <div className="mt-8 flex items-center justify-center gap-3">
      <Button className="rounded-xl">Explore Catalog</Button>
      <Button variant="outline" className="rounded-xl">Request Samples</Button>
    </div> */}
        </div>
      </Section>


      {/* Products: alternate image/text per row */}
      <Section className="bg-white py-20">
        <div className="space-y-28">
          {productsData.map((p, idx) => {
            const flip = idx % 2 === 1;

            return (
              <div key={p.slug} className="relative">
                {/* Soft background band */}
                <div className="absolute inset-0 -z-10">
                  <div className="h-40 md:h-48 w-full bg-gradient-to-r from-gray-50 to-white rounded-3xl" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
                  {/* Image (floating) */}
                  <div className={[flip ? "lg:order-2" : "lg:order-1", "relative"].join(" ")}>
                    <div className="relative mx-auto h-72 md:h-96 lg:h-[420px] w-full overflow-hidden rounded-3xl">
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={p.name}
                        fill
                        sizes="(min-width:1024px) 50vw, 100vw"
                        priority={idx === 0}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={[flip ? "lg:order-1" : "lg:order-2", "w-full"].join(" ")}>
                    <div className="rounded-3xl bg-white ring-1 ring-black/5 p-6 md:p-8 shadow-sm">
                      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                        {p.name}
                      </h2>
                      <div className="mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-400" />
                      <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        {p.summary}
                      </p>

                      {/* Optional CTA if you have p.slug */}
                      {p.slug && (
                        <div className="mt-7">
                          <Link
                            href={`/products/${p.slug}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:border-gray-900 hover:text-gray-900 transition-colors"
                          >
                            Learn More
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 01.083.094l.007.01a1.003 1.003 0 01.203.597v.012a1.003 1.003 0 01-.203.597l-.007.01a.997.997 0 01-.083.094l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>


    </>
  );
}
