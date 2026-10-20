import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/companyData";

export function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-[#F5F4F0] border-b border-[#E8E7E3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E7E3]">
          <div>
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8B8A7B] font-semibold">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#262626] mt-2">
              事業内容
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#777777] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            新築注文建築からフルリノベーション、個人邸・店舗の空間デザインまで、3つの領域でお客様の想いを具現化します。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border border-[#E8E7E3] overflow-hidden flex flex-col justify-between group hover:border-[#8B8A7B] transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Service Image */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#262626]/80 text-white text-[10px] tracking-widest px-2.5 py-1 uppercase">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B8A7B] font-medium">
                      {service.enTitle}
                    </p>
                    <h3 className="text-xl font-serif text-[#262626] mt-1">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-[#F5F4F0] space-y-2">
                    <p className="text-[11px] font-medium text-[#777777] tracking-wider uppercase">
                      対応領域
                    </p>
                    <ul className="space-y-1.5">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center space-x-2 text-xs text-[#555555]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B8A7B] flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Action Link */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs tracking-wider text-[#262626] font-medium group-hover:text-[#8B8A7B] transition-colors"
                >
                  <span>この事業について相談する</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
