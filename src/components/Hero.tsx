import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { COMPANY_PROFILE } from "@/data/companyData";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#F5F4F0]">
      {/* Background Architectural Aesthetic Grid / Light Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="h-full w-full bg-[linear-gradient(to_right,#E8E7E3_1px,transparent_1px),linear-gradient(to_bottom,#E8E7E3_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Top Tag & Main Slogan */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 md:pt-16">
        <div className="inline-flex items-center space-x-3 border-l-2 border-[#8B8A7B] pl-4 mb-8">
          <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#777777] font-sans font-medium">
            {COMPANY_PROFILE.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#262626] tracking-tight leading-[1.25] md:leading-[1.2]">
              空間から、
              <br />
              未来の暮らしをつくる。
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
              {COMPANY_PROFILE.subCatchphrase}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex items-center space-x-2 bg-[#262626] text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#8B8A7B] transition-all shadow-sm"
              >
                <span>事業内容を見る</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 border border-[#262626] text-[#262626] px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#262626] hover:text-white transition-all"
              >
                <span>ご相談・お見積もり</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Visual Showcase */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-12 md:mt-16">
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] overflow-hidden rounded-sm shadow-xl group">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            alt="光と影が調和する現代建築のファサード（RAIFEフューチャー コンセプトイメージ）"
            fill
            priority
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

          {/* Image caption badge */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20 text-white rounded-none">
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/80">
              ARCHITECTURE & HARMONY
            </p>
            <p className="text-xs font-light text-white tracking-wider">
              自然光・素材・構造が織りなす上質な居住空間
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex items-center justify-between text-[11px] text-[#777777] tracking-[0.2em] uppercase">
        <span className="hidden sm:inline">KINKI AREA / ARCHITECTURE & INTERIOR</span>
        <a
          href="#concept"
          className="inline-flex items-center space-x-2 text-[#777777] hover:text-[#262626] transition-colors ml-auto sm:ml-0"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
