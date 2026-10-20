import { COMPANY_OVERVIEW } from "@/data/companyData";

export function Company() {
  return (
    <section id="company" className="py-28 md:py-36 bg-[#FFFFFF] border-b border-[#E8E7E3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8B8A7B] font-semibold">
              ABOUT COMPANY
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#262626]">
              会社概要
            </h2>
            <p className="text-xs sm:text-sm text-[#777777] font-light leading-relaxed pt-2">
              確かな施工品質と誠実な対応で、お客様の理想を形にし、信頼されるパートナーであり続けることを目指しています。
            </p>
            <div className="p-4 bg-[#F5F4F0] border-l-2 border-[#8B8A7B] text-[11px] text-[#777777] leading-relaxed">
              ※会社情報（所在地・代表者・連絡先等）は現在仮のサンプル情報を掲載しております。本番運用時に正式情報へ差し替え可能です。
            </div>
          </div>

          {/* Table Column */}
          <div className="lg:col-span-7">
            <div className="border-t border-[#262626]">
              <dl className="divide-y divide-[#E8E7E3]">
                {COMPANY_OVERVIEW.map((item) => (
                  <div
                    key={item.label}
                    className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-baseline"
                  >
                    <dt className="text-xs tracking-wider font-medium text-[#777777]">
                      {item.label}
                    </dt>
                    <dd className="sm:col-span-2 text-xs sm:text-sm text-[#262626] font-light">
                      {item.value}
                      {!item.isConfirmed && (
                        <span className="ml-2 inline-block px-2 py-0.5 text-[10px] bg-[#E8E7E3] text-[#777777]">
                          確認中
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
