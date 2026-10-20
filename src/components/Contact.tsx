"use client";

import { useState } from "react";
import { ArrowUpRight, AlertCircle, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "construction",
    message: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setValidationError("お名前をご入力ください。");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError("有効なメールアドレスをご入力ください。");
      return;
    }
    if (!formData.message.trim()) {
      setValidationError("ご相談内容をご入力ください。");
      return;
    }
    if (!formData.agree) {
      setValidationError("個人情報の取り扱いにご同意ください。");
      return;
    }

    setValidationError("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#F5F4F0]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8B8A7B] font-semibold">
            CONTACT & CONSULTATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#262626]">
            お問い合わせ・ご相談
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] font-light max-w-lg mx-auto leading-relaxed pt-2">
            新築、リフォーム、リノベーション、店舗設計のご相談や概算お見積もりなど、些細なことでもお気軽にご相談ください。
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-white p-6 border border-[#E8E7E3] shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center text-[#8B8A7B]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#8B8A7B] font-medium">
                  お電話でのお問い合わせ
                </p>
                <p className="text-lg font-serif text-[#262626] font-medium mt-1">
                  0120-000-890
                </p>
                <p className="text-xs text-[#777777] mt-0.5">
                  代表：06-6123-4567
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#F5F4F0] text-[11px] text-[#777777] flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>平日・土 9:00〜18:00（日祝休）</span>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 border border-[#E8E7E3] shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center text-[#8B8A7B]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#8B8A7B] font-medium">
                  メールでのお問い合わせ
                </p>
                <p className="text-sm font-medium text-[#262626] mt-1 break-all">
                  info@raife-future.co.jp
                </p>
                <p className="text-xs text-[#777777] mt-0.5">
                  24時間受付（2営業日以内にご返信）
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#F5F4F0] text-[11px] text-[#777777]">
              <span>概算見積り・図面送付も対応可能</span>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-white p-6 border border-[#E8E7E3] shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center text-[#8B8A7B]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#8B8A7B] font-medium">
                  サロン・オフィス所在地
                </p>
                <p className="text-xs text-[#262626] font-medium mt-1 leading-relaxed">
                  〒530-0001
                  <br />
                  大阪府大阪市北区梅田2丁目5-10
                  <br />
                  梅田アーバンビル 7F
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#F5F4F0] text-[11px] text-[#777777]">
              <span>JR「大阪駅」桜橋口より徒歩6分</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 sm:p-12 border border-[#E8E7E3] shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#F5F4F0] flex items-center justify-center text-[#8B8A7B]">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#262626]">
                お問い合わせを受け付けました
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                お問い合わせありがとうございます。
                <br />
                内容を確認の上、担当者（中村）より通常2営業日以内にご連絡差し上げます。
                お急ぎの場合は、フリーダイヤル（0120-000-890）までお気軽にお電話ください。
              </p>
              <div className="pt-6">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs tracking-wider text-[#8B8A7B] underline underline-offset-4 hover:text-[#262626]"
                >
                  フォーム入力をやり直す
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {validationError && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 flex items-center space-x-3 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-[#262626] mb-2 tracking-wider"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="例：山田 太郎"
                    className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E8E7E3] text-sm text-[#262626] focus:outline-none focus:border-[#8B8A7B] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium text-[#262626] mb-2 tracking-wider"
                  >
                    貴社名・屋号 <span className="text-[#888888] font-normal">（任意）</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="例：株式会社〇〇"
                    className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E8E7E3] text-sm text-[#262626] focus:outline-none focus:border-[#8B8A7B] transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-[#262626] mb-2 tracking-wider"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@domain.com"
                    className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E8E7E3] text-sm text-[#262626] focus:outline-none focus:border-[#8B8A7B] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-[#262626] mb-2 tracking-wider"
                  >
                    お電話番号 <span className="text-[#888888] font-normal">（任意）</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="例：090-1234-5678"
                    className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E8E7E3] text-sm text-[#262626] focus:outline-none focus:border-[#8B8A7B] transition-colors"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-xs font-medium text-[#262626] mb-2 tracking-wider"
                >
                  ご相談種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E8E7E3] text-sm text-[#262626] focus:outline-none focus:border-[#8B8A7B] transition-colors"
                >
                  <option value="construction">新築・注文建築のご相談</option>
                  <option value="renovation">リフォーム・リノベーションのご相談</option>
                  <option value="store">店舗設計・空間デザインのご相談</option>
                  <option value="other">その他・取材・業務提携など</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-[#262626] mb-2 tracking-wider"
                >
                  ご相談内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="ご検討中の時期、ご予算、敷地場所、ご希望の空間イメージなどをご自由にご記入ください。"
                  className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#E8E7E3] text-sm text-[#262626] focus:outline-none focus:border-[#8B8A7B] transition-colors"
                  required
                />
              </div>

              {/* Privacy agreement */}
              <div className="pt-2">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="mt-1 h-4 w-4 text-[#8B8A7B] border-[#E8E7E3] rounded-none focus:ring-[#8B8A7B]"
                  />
                  <span className="text-xs text-[#555555] leading-relaxed">
                    個人情報の取り扱い（プライバシーポリシー）について同意の上、送信します。
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#262626] text-white px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#8B8A7B] transition-all duration-300 shadow-sm"
                >
                  <span>ご相談内容を送信する</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
