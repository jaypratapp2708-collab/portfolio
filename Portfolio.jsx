import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="w-full py-28 bg-gray-50 flex flex-col items-center text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-32 h-32 rounded-full bg-gray-200 mb-6"></div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Professional Logo Designer</h1>
          <p className="text-lg text-gray-500 max-w-xl">
            Crafting clean, memorable, and timeless brand identities.
          </p>
        </motion.div>
      </section>

      {/* Logo Gallery */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Logo Showcase</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-full h-40 bg-gray-100 rounded-xl shadow-sm"></div>
          ))}
        </div>
      </section>

      {/* Skills & Process */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Skills & Design Philosophy</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          I specialize in crafting unique, powerful, and memorable logos that speak directly
          to the brand’s core essence. My process is rooted in clarity, simplicity, and
          strategic thinking—ensuring every design is both aesthetically appealing and
          functionally effective.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <Card className="shadow-sm p-4">
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">Brand Strategy</h3>
              <p className="text-gray-600 text-sm">
                Understanding the brand and crafting meaningful visual direction.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm p-4">
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">Minimalist Design</h3>
              <p className="text-gray-600 text-sm">
                Clean, simple, and timeless designs built with precision.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm p-4">
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">Creative Process</h3>
              <p className="text-gray-600 text-sm">
                Sketching, refining, and iterating to achieve sharp final concepts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shadow-sm p-5 rounded-2xl">
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  “Amazing work! The logo perfectly captured our brand vision.”
                </p>
                <h4 className="font-semibold text-gray-800">Client Name</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-xl p-3 h-32 focus:outline-none"
            ></textarea>
            <Button className="w-full py-3 rounded-xl">Send Message</Button>
          </form>

          <div className="flex justify-center gap-6 mt-8 text-gray-600">
            <Instagram />
            <Twitter />
            <Linkedin />
            <Mail />
          </div>
        </div>
      </section>
    </div>
  );
}
