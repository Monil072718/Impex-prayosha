"use client"

import { Section } from "@/components/site/Section"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import aboutImg from "@/public/images/about/about1.jpg";


export const runtime = "edge"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] },
}

export default function AboutPage() {
  return (
    <>
      {/* Main Hero Section */}
      <Section className="bg-white py-20 lg:py-32">
        <motion.div className="max-w-7xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <motion.div className="lg:col-span-6" variants={fadeInLeft}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Modern textile manufacturing facility"
                  className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div className="lg:col-span-6" variants={fadeInRight}>
              <div className="space-y-8">
                {/* Badge */}
                <motion.div variants={scaleIn}>
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <span className="text-blue-100">✦</span>
                    01. ABOUT US
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                  variants={fadeInUp}
                >
                  The Best Solution For All Industrial & Factory Businesses
                </motion.h1>

                {/* Description */}
                <motion.p className="text-lg text-gray-600 leading-relaxed" variants={fadeInUp}>
                  In 2017, Prayosha Impex entered the textile sector with its manufacturing facilities of coated
                  fabrics. Combining modern technology with skilled manpower under Prayosha's unique inspiring
                  atmosphere, this new venture soon rose to the top of the local textile industry. Today it has one of
                  the most sophisticated vertically integrated set-ups.
                </motion.p>

                {/* Feature List */}
                <motion.div className="space-y-4" variants={staggerContainer}>
                  {[
                    "3 Factories, 36400m² Covering, 150+ Workers",
                    "Professional Quality Inspection Teams",
                    "Focus On Sustainability",
                    "Product Design & Development",
                  ].map((item, index) => (
                    <motion.div key={index} className="flex items-center gap-4" variants={scaleIn}>
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={scaleIn}>
                  <button className="group bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                    View More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Right Image */}
          <motion.div
            className="mt-16 lg:mt-20 flex justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full lg:w-80 xl:w-96">
              <Image
                src={aboutImg}
                alt="Textile manufacturing equipment"
                className="w-full h-80 lg:h-80 object-fill rounded-3xl shadow-xl"
                width={400}
                height={800}
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Industrial Equipment Illustrations */}
      <Section className="bg-gray-50 py-16">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Industrial loom weaving machine line art illustration",
              "Textile dyeing equipment line art illustration",
              "Fabric cutting machine line art illustration",
              "Quality control inspection line art illustration",
            ].map((query, index) => (
              <motion.div key={index} className="flex justify-center" variants={scaleIn}>
                <img
                  src={`/placeholder.svg?height=120&width=120&query=${query}`}
                  alt={`Industrial equipment ${index + 1}`}
                  className="w-24 h-24 lg:w-32 lg:h-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Company Story Section */}
      <Section className="bg-white py-20 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Prayosha Impex facility"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div className="space-y-8" variants={fadeInRight}>
              <div>
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="text-blue-100">✦</span>
                  02. OUR STORY
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pioneering Excellence Since 2017</h2>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded with a vision to revolutionize the technical textile industry, Prayosha Impex has emerged as a
                  leading manufacturer and exporter of advanced coated fabrics.
                </p>
                <p>
                  Today, we serve diverse industries across Asia, Europe, Americas, and Africa, providing innovative
                  coated fabric solutions that meet the most demanding applications. Our commitment to quality ensures
                  that every product meets international standards.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities and a dedicated R&D team, we continue to push the
                  boundaries of what's possible in technical textiles.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Mission & Vision Cards */}
      <Section className="bg-gray-50 py-20 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="text-blue-100">✦</span>
              03. OUR PURPOSE
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft}>
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl text-white font-bold">M</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the global leader in advanced coated fabric manufacturing, delivering innovative, sustainable,
                  and high-performance textile solutions that empower our customers to achieve excellence in their
                  respective industries.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl text-white font-bold">V</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To create a sustainable future through innovative textile technologies, fostering long-term
                  partnerships with customers worldwide while maintaining our commitment to quality, environmental
                  responsibility, and continuous improvement.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Global Reach Stats */}
      <Section className="bg-gradient-to-r from-sky-400 to-blue-500 py-20 lg:py-32 text-white">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="mb-16" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="text-blue-100">✦</span>
              04. GLOBAL REACH
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Serving Worldwide</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Serving customers across Asia, Europe, Americas, and Africa with reliable logistics and comprehensive
              after-sales support.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Countries Served" },
              { number: "6-12hrs", label: "Response Time" },
              { number: "8+", label: "Years Experience" },
              { number: "95%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={scaleIn}>
                <div className="text-4xl lg:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </>
  )
}
