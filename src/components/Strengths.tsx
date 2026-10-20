import { STRENGTHS } from "@/data/companyData";
import { MessageSquareText, Layers, Compass, ShieldCheck } from "lucide-react";

export function Strengths() {
  const icons = [MessageSquareText, Layers, Compass, ShieldCheck];

  return (
    <section id="strengths" className="py-28 md:py-36 bg-[#F5F4F0] border-b border-[#E8E7E3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8B8A7B] font-semibold">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#262626]">
            RAIFEフューチャーの強み
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] font-light leading-relaxed pt-2">
            住まい手や施主様の想いを第一に考え、確かな技術と対話で唯一無二の空間価値を創造します。
          </p>
        </div>

        {/* Strengths 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STRENGTHS.map((strength, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={strength.number}
                className="bg-white p-8 border border-[#E8E7E3] hover:border-[#8B8A7B] transition-all duration-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-serif text-[#8B8A7B] font-light">
                      {strength.number}
                    </span>
                    <div className="p-3 bg-[#F5F4F0] text-[#262626] group-hover:bg-[#8B8A7B] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8A7B] font-medium">
                    {strength.enTitle}
                  </p>
                  <h3 className="text-base font-serif text-[#262626] mt-1 mb-4">
                    {strength.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed font-light">
                    {strength.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F5F4F0] text-[10px] text-[#888888]">
                  ※お客様確認用の強み候補として整理
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
