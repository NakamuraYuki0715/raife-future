import Image from "next/image";
import { Info, Sparkles } from "lucide-react";
import { WORKS } from "@/data/companyData";

export function Works() {
  return (
    <section id="works" className="py-28 md:py-36 bg-[#FFFFFF] border-b border-[#E8E7E3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8E7E3]">
          <div>
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8B8A7B] font-semibold">
              WORKS & CONCEPTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#262626] mt-2">
              施工・設計事例
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#777777] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            私たちが目指す空間デザインのコンセプトモデルです。時を経ても色褪せない、本質的な美しさを追求しています。
          </p>
        </div>

        {/* Realism Notice Banner to strictly prevent misrepresentation */}
        <div className="mb-12 p-4 bg-[#F5F4F0] border-l-4 border-[#8B8A7B] flex items-start space-x-3 text-xs text-[#555555]">
          <Info className="w-4 h-4 text-[#8B8A7B] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium text-[#262626]">
              【施工実績に関するご案内】
            </p>
            <p className="leading-relaxed">
              現在、正式な施工実績写真および掲載許諾の確認・整理を進めております。
              以下のギャラリーは、当社の設計思想や空間提案の世界観をお伝えするための「コンセプトイメージ（準備中）」となります。
              実際の施工事例はお打ち合わせ時に資料をご提示しております。
            </p>
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKS.map((work) => (
            <div
              key={work.id}
              className="group flex flex-col justify-between border border-[#E8E7E3] bg-[#F5F4F0]/30 hover:border-[#8B8A7B] transition-all duration-300"
            >
              <div>
                {/* Visual */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#E8E7E3]">
                  <Image
                    src={work.image}
                    alt={work.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Visual Status Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#262626] text-[10px] tracking-wider px-2.5 py-1 border border-[#E8E7E3] flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-[#8B8A7B]" />
                    <span>コンセプトモデル</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <p className="text-[11px] tracking-widest text-[#8B8A7B] uppercase font-medium">
                    {work.category}
                  </p>
                  <h3 className="text-lg font-serif text-[#262626] leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed font-light">
                    {work.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 text-[11px] text-[#777777] italic tracking-wider">
                ※掲載準備中（正式実績への差し替え予定）
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
