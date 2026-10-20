import Image from "next/image";

export function Concept() {
  return (
    <section id="concept" className="py-28 md:py-36 bg-[#FFFFFF] border-b border-[#E8E7E3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Presentation */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8B8A7B] font-semibold">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#262626] leading-snug">
                暮らしの余白に、
                <br />
                心ほどける豊かさを宿す。
              </h2>
            </div>

            <div className="space-y-6 text-sm text-[#555555] leading-relaxed font-light">
              <p>
                建築とは、ただ雨風をしのぐ箱をつくることではありません。
                朝日の差し込む角度、素足で触れる無垢材のぬくもり、家族や訪れる人と視線が交差する距離感——。
                日々の些細な瞬間のなかにこそ、本当の心地よさが宿っています。
              </p>
              <p>
                RAIFEフューチャー株式会社は、近畿地方の風土や景観に調和しながら、
                住まい手や利用者のこれからの暮らしを深く見つめた空間づくりを行っています。
                華美な装飾に頼ることなく、素材そのものの美しさと緻密な構造計算によって、
                時が経つほどに愛着が深まる空間を誠実に紡ぎ出します。
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E7E3] grid grid-cols-2 gap-6 text-xs">
              <div>
                <p className="font-medium text-[#262626] tracking-wider mb-1">
                  MATERIAL FIRST
                </p>
                <p className="text-[#777777] leading-relaxed">
                  木・石・モルタルなど、素材の質感と経年美化を尊ぶ設計思想。
                </p>
              </div>
              <div>
                <p className="font-medium text-[#262626] tracking-wider mb-1">
                  TAILORED SPACE
                </p>
                <p className="text-[#777777] leading-relaxed">
                  お客様一人ひとりの生活動線と想いに寄り添うオーダーメイド提案。
                </p>
              </div>
            </div>

            {/* Note about concept text for review */}
            <div className="p-3 bg-[#F5F4F0] border-l-2 border-[#8B8A7B] text-[11px] text-[#777777]">
              ※上記理念メッセージは、会社の確定理念の提供に備えた仮テキスト（確認用）として管理されています。
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Photo */}
              <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                  alt="素材の質感が美しいミニマルなリビング空間（コンセプトイメージ）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Inset Detail Photo */}
              <div className="absolute -bottom-10 -left-6 sm:-left-10 w-44 sm:w-56 h-36 sm:h-44 overflow-hidden border-4 border-white shadow-xl hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                  alt="木材と自然光の陰影ディテール（コンセプトイメージ）"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
