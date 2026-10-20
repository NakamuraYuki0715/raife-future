import { MapPin } from "lucide-react";
import { AREAS } from "@/data/companyData";

export function Area() {
  return (
    <section id="area" className="py-24 md:py-32 bg-[#F5F4F0] border-b border-[#E8E7E3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8B8A7B] font-semibold">
            SERVICE AREA
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#262626] mt-2">
            対応エリア
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] font-light leading-relaxed pt-2">
            RAIFEフューチャー株式会社は、近畿地方全域を中心に対応しております。遠方や県境エリアについても柔軟にご相談を承っております。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((area) => (
            <div
              key={area.pref}
              className="bg-white p-6 border border-[#E8E7E3] flex items-start space-x-4 shadow-sm"
            >
              <div className="p-2 bg-[#F5F4F0] text-[#8B8A7B] rounded-none">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-serif font-medium text-[#262626]">
                  {area.pref}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  {area.cities}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[11px] text-[#777777] tracking-wider">
          ※上記エリア以外でも、計画内容や敷地条件によって施工・設計のご対応が可能です。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
