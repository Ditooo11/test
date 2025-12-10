"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Terima kasih! Pesan Anda telah diterima. Kami akan menghubungi Anda segera.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              LET'S CREATE
              <br />
              <span className="text-cyan-400">TOGETHER</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-balance">
              Punya project dalam pikiran? Mari diskusikan bagaimana kami bisa membantu mewujudkan visi kreatif Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Nama
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ceritakan tentang project Anda..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold h-12">
                  <Send className="w-4 h-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Hubungi Kami</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Tertarik bekerja sama atau ingin mengetahui lebih lanjut tentang layanan kami? Jangan ragu untuk
                  menghubungi kami melalui form atau kontak di bawah ini.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a
                  href="mailto:hello@ditooostudio.com"
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Email</div>
                    <div className="text-white font-medium">hello@ditooostudio.com</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/ditooostudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                    <Instagram className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Instagram</div>
                    <div className="text-white font-medium">@ditooostudio</div>
                  </div>
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-cyan-400/10 border border-cyan-400/20 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">Response Time</h4>
                <p className="text-sm text-white/70">
                  Kami biasanya merespons dalam 24-48 jam di hari kerja. Untuk project urgent, silakan mention di pesan
                  Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Ditooo Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
