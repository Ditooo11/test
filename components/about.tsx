import { Layers, Palette, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            THE ECHO
            <br />
            <span className="text-cyan-400">OUR STORY</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 text-balance">
            Ditooo Studio adalah nama studio yang diambil berdasarkan nama asli pemilik, yaitu Rega Evandito.
            Beliau menekuni bidang animasi 3D, motion graphics, dan branding visual untuk clothing brands. Kami menciptakan pengalaman visual yang memukau dan berkesan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-cyan-400/50">
            <div className="w-16 h-16 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-400/30 transition-colors">
              <Layers className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">3D Animation</h3>
            <p className="text-white/70 leading-relaxed">
              Menciptakan animasi 3D yang dinamis dan engaging untuk berbagai keperluan, dari commercial hingga content
              digital yang menarik perhatian.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-cyan-400/50">
            <div className="w-16 h-16 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-400/30 transition-colors">
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Motion Graphics</h3>
            <p className="text-white/70 leading-relaxed">
              Mendesain motion graphics yang stylish dan modern untuk meningkatkan storytelling brand Anda dengan visual
              yang powerful dan memorable.
            </p>
          </div>

          {/* Service 3 */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-cyan-400/50">
            <div className="w-16 h-16 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-400/30 transition-colors">
              <Palette className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">3D Brand Clothing</h3>
            <p className="text-white/70 leading-relaxed">
              Menghadirkan visualisasi 3D untuk clothing brands, dari product visualization hingga campaign visual yang
              menonjolkan identitas brand Anda.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-lg text-white/60 leading-relaxed">
            Dengan pengalaman bertahun-tahun di industri kreatif, kami berkomitmen untuk menghadirkan karya yang tidak
            hanya indah secara visual, tetapi juga efektif dalam menyampaikan pesan dan membangun koneksi emosional
            dengan audiens.
          </p>
        </div>
      </div>
    </section>
  )
}
