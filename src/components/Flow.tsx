import { FLOW_STEPS } from "@/data/companyData";

export function Flow() {
  return (
    <section id="flow" className="py-28 md:py-36 bg-[#FFFFFF] border-b border-[#E8E7E3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E7E3]">
          <div>
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8B8A7B] font-semibold">
              PROCESS & FLOW
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#262626] mt-2">
              家づくり・空間づくりの流れ
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#777777] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            初めてのご相談から設計、施工、お引き渡し、そして将来のアフターケアまで、一歩ずつ丁寧に伴走いたします。
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 bg-[#F5F4F0]/50 border border-[#E8E7E3] relative group hover:bg-[#F5F4F0] transition-colors"
            >
              <div className="flex items-baseline justify-between border-b border-[#E8E7E3] pb-4 mb-6">
                <span className="text-2xl font-serif font-light text-[#8B8A7B]">
                  STEP {step.step}
                </span>
                <span className="text-[10px] tracking-widest text-[#777777] uppercase font-sans">
                  {step.enTitle}
                </span>
              </div>

              <h3 className="text-base font-serif text-[#262626] mb-3">
                {step.title}
              </h3>

              <p className="text-xs text-[#555555] leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-[11px] text-[#777777]">
          ※実際の業務フローに合わせてステップの詳細や名称を調整可能です。
        </div>
      </div>
    </section>
  );
}
