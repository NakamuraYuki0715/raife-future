import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { COMPANY_OVERVIEW } from "@/data/companyData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#262626] text-[#E8E7E3] pt-16 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#383838]">
          {/* Company Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <p className="text-2xl font-serif tracking-[0.2em] text-white">RAIFE</p>
              <p className="text-[10px] tracking-[0.25em] text-[#8B8A7B] uppercase mt-0.5">
                RAIFE FUTURE Co., Ltd.
              </p>
            </div>
            <p className="text-xs text-[#A0A09C] leading-relaxed max-w-sm pt-2">
              空間から、未来の暮らしをつくる。
              <br />
              建築、リフォーム、リノベーション、店舗設計を通じて、人々の想いに寄り添い、時を越えて愛される豊かな空間を形にします。
            </p>
            <p className="text-[11px] text-[#777777] tracking-wider pt-2">
              対応エリア：近畿地方（大阪府・京都府・兵庫県・奈良県・滋賀県・和歌山県）
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-[#8B8A7B] uppercase">
              Navigation
            </p>
            <ul className="space-y-2 text-xs tracking-wider text-[#A0A09C]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  事業内容（Services）
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-white transition-colors">
                  施工事例（Works）
                </a>
              </li>
              <li>
                <a href="#concept" className="hover:text-white transition-colors">
                  私たちについて（About Us）
                </a>
              </li>
              <li>
                <a href="#strengths" className="hover:text-white transition-colors">
                  4つの強み（Strengths）
                </a>
              </li>
              <li>
                <a href="#flow" className="hover:text-white transition-colors">
                  完成までの流れ（Flow）
                </a>
              </li>
              <li>
                <a href="#area" className="hover:text-white transition-colors">
                  対応エリア（Area）
                </a>
              </li>
              <li>
                <a href="#company" className="hover:text-white transition-colors">
                  会社概要（Company）
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-[#8B8A7B] uppercase">
              Contact & Inquiries
            </p>
            <p className="text-xs text-[#A0A09C] leading-relaxed">
              住宅新築、リノベーション、店舗設計のご相談や概算お見積もりなど、お気軽にお問い合わせください。
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 border border-[#8B8A7B] text-[#E8E7E3] px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-[#8B8A7B] hover:text-white transition-all"
              >
                <span>無料ご相談フォームへ</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#777777] space-y-4 md:space-y-0">
          <p>© {currentYear} RAIFE FUTURE Co., Ltd. All Rights Reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-[#A0A09C] transition-colors">
              プライバシーポリシー
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-[#A0A09C] transition-colors"
              aria-label="ページトップへ戻る"
            >
              <span>Page Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
