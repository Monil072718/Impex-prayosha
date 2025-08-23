import { Section } from "@/components/site/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateSEOMetadata } from "@/lib/seo"
import { Award, Globe, Leaf, Microscope } from "lucide-react"

export const runtime = "edge"

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "About Us - Prayosha Impex | Leading Coated Fabric Manufacturer",
    description:
      "Learn about Prayosha Impex - ISO 9001:2015 certified manufacturer of advanced coated fabrics with global reach, sustainability focus, and in-house R&D.",
    path: "/about",
  })
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section (restyled: glass card + gradient) */}
      <Section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-indigo-100 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block rounded-3xl bg-white/50 backdrop-blur-md px-6 py-3 ring-1 ring-black/10 shadow-sm">
            <span className="text-xs font-semibold tracking-wide text-blue-700">About Us</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About Prayosha Impex
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering advanced technical textile solutions with a commitment to quality, innovation, and sustainable
            manufacturing practices.
          </p>
          <div className="mt-8 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-blue-700/80 to-indigo-500/60" />
        </div>
      </Section>

      {/* Company Story (restyled: balanced layout, accent ring on image block) */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded with a vision to revolutionize the technical textile industry in 2017, Prayosha Impex has emerged as a
                leading manufacturer and exporter of advanced coated fabrics. Our journey began with a simple mission:
                to deliver high-performance textile solutions that exceed global standards.
              </p>
              <p>
                Today, we serve diverse industries across Asia, Europe, Americas, and Africa, providing innovative
                coated fabric solutions that meet the most demanding applications. Our commitment to quality ensures that every product meets international standards.
              </p>
              <p>
                With state-of-the-art manufacturing facilities and a dedicated R&D team, we continue to push the
                boundaries of what's possible in technical textiles, creating solutions that drive progress across
                multiple industries.
              </p>
            </div>
          </div>

          {/* Keep your placeholder, just styled nicer */}
          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-white ring-1 ring-black/10 shadow-md">
            <div className="absolute inset-0 rounded-2xl">
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-2xl" />
            </div>
            <div className="relative z-10 h-full flex items-center justify-center text-gray-500 font-medium">
              Company Image Placeholder
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision (restyled: accent bar + clean spacing) */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b " />
            <CardHeader className="pl-8">
              <CardTitle className="text-2xl tracking-tight">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="pl-8">
              <CardDescription className="text-base leading-relaxed text-gray-700">
                To be the global leader in advanced coated fabric manufacturing, delivering innovative, sustainable, and
                high-performance textile solutions that empower our customers to achieve excellence in their respective
                industries.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b" />
            <CardHeader className="pl-8">
              <CardTitle className="text-2xl tracking-tight">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="pl-8">
              <CardDescription className="text-base leading-relaxed text-gray-700">
                To create a sustainable future through innovative textile technologies, fostering long-term partnerships
                with customers worldwide while maintaining our commitment to quality, environmental responsibility, and
                continuous improvement.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Core Values (restyled: icon badges + hover lift + subtle glow) */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our operations and define our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />
            <CardHeader className="text-center">
              <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-200">
                <Award className="h-7 w-7" />
              </span>
              <CardTitle className="tracking-tight">Quality Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-700">
                Advanced manufacturing processes ensuring consistent quality and reliability in every product we
                manufacture.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10" />
            <CardHeader className="text-center">
              <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-200">
                <Microscope className="h-7 w-7" />
              </span>
              <CardTitle className="tracking-tight">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-700">
                Continuous research and development to create cutting-edge solutions that meet evolving market demands.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
            <CardHeader className="text-center">
              <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-200">
                <Leaf className="h-7 w-7" />
              </span>
              <CardTitle className="tracking-tight">Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-700">
                Environmental responsibility through eco-friendly processes, waste reduction, and sustainable
                manufacturing practices.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
            <CardHeader className="text-center">
              <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-200">
                <Globe className="h-7 w-7" />
              </span>
              <CardTitle className="tracking-tight">Global Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-700">
                Building lasting relationships with customers worldwide through reliable service and exceptional
                support.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Global Reach (restyled: stat tiles on brand background) */}
      <Section className="bg-blue-600 text-white">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Global Reach</h2>
          <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Serving customers across Asia, Europe, Americas, and Africa with reliable logistics and comprehensive
            after-sales support.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-6 shadow-sm">
              <div className="text-3xl font-extrabold mb-2">10+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-6 shadow-sm">
              <div className="text-3xl font-extrabold mb-2">6–12 Hours</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-6 shadow-sm">
              <div className="text-3xl font-extrabold mb-2">8+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-6 shadow-sm">
              <div className="text-3xl font-extrabold mb-2">95%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
