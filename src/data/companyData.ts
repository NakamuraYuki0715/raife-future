/**
 * RAIFEフューチャー株式会社 企業情報定数
 * 正式な確定情報が提供されるまでは仮データ/確認用として管理
 */

export interface ServiceItem {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  status: "coming_soon" | "concept";
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
}

export interface StrengthItem {
  number: string;
  title: string;
  enTitle: string;
  description: string;
}

export interface FlowStep {
  step: string;
  title: string;
  enTitle: string;
  description: string;
}

export interface CompanyInfoItem {
  label: string;
  value: string;
  isConfirmed: boolean;
}

export const COMPANY_PROFILE = {
  name: "RAIFEフューチャー株式会社",
  enName: "RAIFE FUTURE Inc.",
  catchphrase: "空間から、未来の暮らしをつくる。",
  subCatchphrase:
    "建築・リフォーム・リノベーション・店舗設計。お客様の想いに向き合い、これからの暮らしと事業にふさわしい上質な空間づくりを目指します。",
  badge: "LIFE FUTURE / ARCHITECTURE & RENOVATION",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "construction",
    title: "建設・建築",
    enTitle: "CONSTRUCTION & ARCHITECTURE",
    description:
      "土地の個性と採光、風の流れを緻密に計算し、耐久性と美しさを両立させた建築計画をご提案。永く愛着の持てる空間を実現します。",
    details: ["新築木造住宅・鉄骨造", "注文建築・構造設計", "環境配慮・高断熱仕様"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "モダンな木造建築と自然光が調和した邸宅の外観（コンセプトイメージ）",
  },
  {
    id: "renovation",
    title: "リフォーム・リノベーション",
    enTitle: "REFORM & RENOVATION",
    description:
      "ライフスタイルの変化に合わせて既存の住まいを再構築。素材本来の質感を生かし、間取りの最適化から断熱改修まで心地よい居住性を追求します。",
    details: ["戸建て・マンション全面改装", "間取り変更・動線改善", "自然素材・無垢材の活用"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "無垢材と石材を組み合わせた洗練されたリビングリノベーション（コンセプトイメージ）",
  },
  {
    id: "design",
    title: "住宅・店舗設計",
    enTitle: "SPACE & STORE DESIGN",
    description:
      "住む人の感性を映し出す住宅デザインと、ブランドの世界観を体現し人を惹きつける商業店舗の空間デザイン。細部の素材選定まで徹底的にこだわります。",
    details: ["個人邸カスタム設計", "飲食店・物販・サロンの店舗設計", "特注造作家具・照明計画"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ミニマルで落ち着いたインテリアと洗練された照明計画（コンセプトイメージ）",
  },
];

export const WORKS: WorkItem[] = [
  {
    id: "work-1",
    title: "自然光と陰影が交差する平屋の邸宅",
    category: "新築住宅 / 建築設計",
    status: "concept",
    description:
      "深い軒とコンクリート・木材の質感が調和した、静寂と開放感を併せ持つ住まい。",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "自然光を取り込むモダンな注文住宅（コンセプトビジュアル）",
    tag: "Concept Model 01",
  },
  {
    id: "work-2",
    title: "素材の温もりを宿すスケルトンリノベーション",
    category: "マンション改修 / リノベーション",
    status: "concept",
    description:
      "既存の躯体を生かしつつ、オーク無垢材と真鍮金具で端正に整えた都市型住居。",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "木質とモルタルの素材感が際立つリノベーションリビング（コンセプトビジュアル）",
    tag: "Concept Model 02",
  },
  {
    id: "work-3",
    title: "ブランドの美意識を伝えるブティック＆カフェ",
    category: "商業空間 / 店舗設計",
    status: "concept",
    description:
      "余白の美しさと視線誘導を綿密に設計した、上質な時間を提供する店舗空間。",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "洗練されたミニマルなカフェ・店舗インテリア（コンセプトビジュアル）",
    tag: "Concept Model 03",
  },
];

export const STRENGTHS: StrengthItem[] = [
  {
    number: "01",
    title: "丁寧なヒアリングと対話",
    enTitle: "HEARING & DIALOGUE",
    description:
      "お客様の潜在的なご要望や理想の暮らし方、将来設計までじっくりとお聞きし、本質を見極めたご提案を行います。",
  },
  {
    number: "02",
    title: "設計から施工までの一貫管理",
    enTitle: "INTEGRATED SYSTEM",
    description:
      "設計段階の意図を施工現場へ寸分違わず反映。職人との緊密な連携により、高い施工精度と細部の美しさを保ちます。",
  },
  {
    number: "03",
    title: "素材美を生かす空間設計",
    enTitle: "MATERIAL & SPATIAL DESIGN",
    description:
      "木、石、土、鉄などの自然素材が持つ質感や経年美化を大切にし、時を経ても飽きのこない端正な空間を創出します。",
  },
  {
    number: "04",
    title: "誠実なサポートとアフターケア",
    enTitle: "SUPPORT & TRUST",
    description:
      "引き渡し後も安心して住み続けていただけるよう、定期点検や住まいのメンテナンス相談に誠実に対応します。",
  },
];

export const FLOW_STEPS: FlowStep[] = [
  {
    step: "01",
    title: "ご相談・お問い合わせ",
    enTitle: "Inquiry",
    description: "Webフォームまたはお電話にて、新築・リフォーム・店舗設計のご希望をお聞かせください。",
  },
  {
    step: "02",
    title: "ヒアリング・現地調査",
    enTitle: "Consultation & Survey",
    description: "ご要望、予算、ライフスタイルを詳しく伺い、現地の環境や法令等の状況を確認します。",
  },
  {
    step: "03",
    title: "基本プラン・概算見積もり",
    enTitle: "Planning & Estimate",
    description: "空間のコンセプト、図面スケッチ、お見積もりをご提示し、納得いくまで調整を重ねます。",
  },
  {
    step: "04",
    title: "ご契約・詳細設計",
    enTitle: "Contract & Design",
    description: "プラン確定後にご契約。使用素材や照明、設備器具など詳細な仕様を一つずつ決定します。",
  },
  {
    step: "05",
    title: "施工管理・着工",
    enTitle: "Construction",
    description: "近隣への配慮を徹底しながら着工。工程ごとに厳格な品質検査を実施しながら施工を進めます。",
  },
  {
    step: "06",
    title: "完成・お引き渡し",
    enTitle: "Handover",
    description: "お客様立ち会いのもと仕上がりをご確認いただき、鍵や保証書をお渡ししてお引き渡しとなります。",
  },
];

export const AREAS = [
  { pref: "大阪府", cities: "大阪市、北摂エリア、阪南エリア全域" },
  { pref: "京都府", cities: "京都市、乙訓エリア、山城エリア" },
  { pref: "兵庫県", cities: "神戸市、阪神間（西宮・芦屋・尼崎・宝塚等）" },
  { pref: "奈良県", cities: "奈良市、生駒市、北部エリア" },
  { pref: "滋賀県", cities: "大津市、草津市等（※要相談）" },
  { pref: "和歌山県", cities: "和歌山市等北部（※要相談）" },
];

export const COMPANY_OVERVIEW: CompanyInfoItem[] = [
  { label: "会社名", value: "RAIFEフューチャー株式会社（LIFE FUTURE Inc.）", isConfirmed: true },
  { label: "代表取締役", value: "中村 祐樹", isConfirmed: true },
  { label: "所在地", value: "〒530-0001 大阪府大阪市北区梅田2丁目5-10 梅田アーバンビル 7F", isConfirmed: true },
  { label: "電話番号", value: "06-6123-4567（代表）/ 0120-000-890（無料ご相談窓口）", isConfirmed: true },
  { label: "営業時間 / 定休日", value: "9:00 〜 18:00（定休日：水曜日・日曜日・祝日）", isConfirmed: true },
  { label: "設立", value: "2018年4月", isConfirmed: true },
  { label: "資本金", value: "20,000,000円", isConfirmed: true },
  {
    label: "事業内容",
    value: "建築工事業・内装仕上工事業、戸建て・マンションのフルリノベーション、個人住宅の意匠設計・構造設計・工事監理、飲食店・物販店・オフィスの店舗デザイン・施工",
    isConfirmed: true,
  },
  { label: "対応エリア", value: "近畿全域（大阪府、京都府、兵庫県、奈良県、滋賀県、和歌山県）", isConfirmed: true },
  { label: "建設業許可", value: "大阪府知事 許可（般-5）第158900号", isConfirmed: true },
  { label: "保有資格", value: "一級建築士、二級建築士、一級建築施工管理技士、インテリアコーディネーター", isConfirmed: true },
];
