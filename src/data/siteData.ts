// src/data/siteData.ts

// 1. 默认英文配置 (Default English - 已精准同步最新中文修正)
export const siteDataEn = {
  siteName: "JC NEW ENERGY",
  siteSubTitle: "JC BATTERY WAY",
  nav: {
    links: [
      { name: "Home", href: "#hero" },
      { name: "About Us", href: "#about" },
      { name: "Marine Battery", href: "#products" },
      { name: "Advantages", href: "#advantages" },
      { name: "Contact Us", href: "#contact" },
    ],
    quoteBtnText: "Get Quote",
  },
  about: {
    badge: "ABOUT JC NEW ENERGY",
    title: "About JC New Energy",
    subTitle: "15 years of R&D in lithium battery & ESS for a sustainable green future",
    mainTitle: "Smart Manufacturing · Empowering Clean Energy",
    paragraphs: [
      "Yongkang JC New Energy Co., Ltd. is a high-tech enterprise integrating R&D, production, and sales of lithium-ion batteries. The company has tens of thousands of square meters of modern standard plants and smart dust-free workshops, equipped with industry-leading fully automated battery packaging and testing equipment.",
      "We focus on high-safety, high-energy-density NMC and LFP cell applications, certified by ISO9001, CE, UN38.3, and widely serving global high-end markets such as electric marine vessels, medical devices, and commercial ESS."
    ],
    stats: [
      { num: "15+", label: "Years Experience" },
      { num: "20+", label: "R&D Patents" },
      { num: "15GWh", label: "Annual Capacity" },
      { num: "30+", label: "Countries Served" },
    ],
    showcaseTitle: "🏢 Modern Manufacturing Base & Equipment Strength",
  },
  products: {
    badge: "SUPER ISLAND SERIES",
    title: "SUPER ISLAND 90kWh Marine Power Battery Pack",
    subTitle: "High Efficiency · Low Carbon · Powerful Drive for Electric Yachts & Commercial Vessels",
    model: "MODEL: SUPER ISLAND 90kWh",
    mainCardTitle: "90kWh High-Efficiency Marine Power Battery Pack",
    overlayBadge: "🔍 Click for Gallery | 🛡️ ISO9001 Certified",
    specs: [
      { val: "90 kWh", label: "Nominal Capacity" },
      { val: "60 L", label: "Gasoline Equivalent" },
      { val: "120,000 L", label: "Lifetime Fuel Saved" },
      { val: "1.5 - 2.5", label: "Efficiency (kWh/km)" },
    ],
    features: [
      {
        bold: "Decarbonization & Fuel Saving: ",
        text: "Single pack provides 60L gasoline equivalent energy, saving ~120,000L fuel over lifetime."
      },
      {
        bold: "Excellent Cruising Efficiency: ",
        text: "Cruising efficiency reaches 1.5 - 2.5 kWh/km, highly adapted to various hull designs."
      },
      {
        bold: "International Safety Certifications: ",
        text: "Fully compliant with CE, REACH, RoHS standards for long-term safe operation."
      }
    ],
    ctaBtnText: "Get Specification & Quote for SUPER ISLAND 90kWh ➔",
  },
  advantages: {
    badge: "CORE ADVANTAGES",
    title: "Core Competitive Advantages",
    subTitle: "Driven by strict quality control and advanced lithium technology",
    items: [
      {
        num: "01",
        icon: "🛡️",
        title: "Ultimate Safety Defense",
        desc: "Multiple thermal runaway protection technologies combined with automotive-grade explosion-proof pressure relief design to eliminate safety hazards at source."
      },
      {
        num: "02",
        icon: "⚡",
        title: "Ultra-Long Cycle Life",
        desc: "Powered by ternary system (NMC) cells from top-tier domestic manufacturers, achieving 3000+ cycles at ambient temperature with lower lifetime cost."
      },
      {
        num: "03",
        icon: "🧠",
        title: "Smart BMS Management",
        desc: "Customized BMS from Tier-1 manufacturers, supporting 24/7 thermal runaway warning and high-precision algorithms for accurate SOC/SOH estimation."
      },
      {
        num: "04",
        icon: "⚓",
        title: "Deep-Sea Anti-Corrosion",
        desc: "IP67 waterproof & salt-spray resistant, reinforced 316L stainless steel anti-wave casing, fully meeting international marine safety standards."
      }
    ]
  },
  contact: {
    badge: "CONTACT US",
    title: "Contact Us",
    subTitle: "Get custom battery solution quotes and global technical support",
    items: [
      { icon: "📍", title: "Address", desc: "Building 8, SPIC State Nuclear New Energy Industrial Park, Yongkang, Zhejiang, China" },
      { icon: "📞", title: "Hotline", desc: "+86 18018962196" },
      { icon: "✉️", title: "Email", desc: "wahagee@126.com" },
      { icon: "⚡", title: "Inquire Now", btnText: "Submit Request ➔" }
    ]
  },
  footer: {
    brandDesc: "Committed to high-safety, green, and efficient battery technology serving global zero-carbon energy transition.",
    productsTitle: "Products",
    productsLinks: ["ESS Series", "Marine Power", "Industrial Battery"],
    qualitiesTitle: "Quality & Certifications",
    qualitiesList: ["ISO 9001 / 14001", "UL1973 / IEC62619 / UN38.3"],
    headquartersTitle: "Headquarters",
    address: "Building 8, SPIC State Nuclear New Energy Industrial Park, Yongkang, Zhejiang, China",
    tel: "Tel: +86 18018962196",
    email: "Email: wahagee@126.com",
    copyright: "© 2026 Yongkang JC New Energy Co., Ltd. All rights reserved.",
    privacyText: "Privacy Policy",
    icpText: "ICP License 13001471-1"
  }
};

// 2. 中文词典 (你最新提交的版本)
export const siteDataZh = {
  siteName: "嘉程新能源",
  siteSubTitle: "JC BATTERY WAY",
  nav: {
    links: [
      { name: "首页", href: "#hero" },
      { name: "公司简介", href: "#about" },
      { name: "船舶锂电", href: "#products" },
      { name: "核心优势", href: "#advantages" },
      { name: "联系我们", href: "#contact" },
    ],
    quoteBtnText: "获取报价 (Get Quote)",
  },

  about: {
    badge: "ABOUT JC NEW ENERGY",
    title: "关于嘉程新能源",
    subTitle: "专注锂电池与储能系统研发 15 年，打造可持续发展的绿色未来",
    mainTitle: "智造驱动 · 科技赋能新能源",
    paragraphs: [
      "嘉程新能源是一家集锂离子电池研发、生产和销售于一体的高新技术企业。公司拥有数万平方米现代化标准厂房与智能化无尘车间，配置了行业领先的全自动化电池封装及测试设备。",
      "我们专注于高安全、高能量密度NMC及LFP电芯应用，产品通过 ISO9001、CE、UN38.3 等多项国际权威认证，广泛服务于全球电动船舶、医疗器械、工商业储能等高端市场。"
    ],
    stats: [
      { num: "15+", label: "行业沉淀经验" },
      { num: "20+", label: "研发专利授权" },
      { num: "15GWh", label: "年产出能力" },
      { num: "30+", label: "覆盖国家与地区" },
    ],
    showcaseTitle: "🏢 现代化生产基地与装备实力",
  },

  products: {
    badge: "SUPER ISLAND SERIES",
    title: "SUPER ISLAND 90kWh 船用动力电池包",
    subTitle: "高效·低碳·强劲动力，专为电驱动游艇与商业船舶打造的 90kWh 旗舰电池系统",
    model: "MODEL: SUPER ISLAND 90kWh",
    mainCardTitle: "90kWh 高效船用动力电池包",
    overlayBadge: "🔍 点击放大画廊 | 🛡️ ISO9001 认证",
    specs: [
      { val: "90 kWh", label: "电池标称容量" },
      { val: "60 L", label: "等效汽油能量" },
      { val: "120,000 L", label: "终身节省燃油" },
      { val: "1.5 - 2.5", label: "航行能效 (kWh/km)" },
    ],
    features: [
      {
        bold: "极致减碳与省油效益：",
        text: "单包具备 60L 汽油等效能量，全生命周期可累计节省约 12 万升汽油消耗。"
      },
      {
        bold: "卓越巡航能效：",
        text: "巡航能效达 1.5 ~ 2.5 kWh/km，高度适配各类船体设计与水域运行环境。"
      },
      {
        bold: "国际合规安全认证：",
        text: "全面符合 CE、REACH、RoHS 等国际环保与高压安全标准，保障系统长久稳定运行。"
      }
    ],
    ctaBtnText: "获取 SUPER ISLAND 90kWh 详细规格书与报价 ➔",
  },

  advantages: {
    badge: "CORE ADVANTAGES",
    title: "核心竞争优势",
    subTitle: "严苛品质控管与先进电池技术驱动",
    items: [
      {
        num: "01",
        icon: "🛡️",
        title: "极致安全防御",
        desc: "采用多重热失控防护技术，结合车规级防爆泄压设计，从源头杜绝电池安全隐患。"
      },
      {
        num: "02",
        icon: "⚡",
        title: "超长循环寿命",
        desc: "搭载国内一线电池厂三元体系电芯，常温循环寿命突破 3000+ 次，全生命周期成本更低。"
      },
      {
        num: "03",
        icon: "🧠",
        title: "智能 BMS 管理",
        desc: "采用一线厂家定制化BMS 电池管理系统，支持全天候热失控预警与高精度算法，精准估算 SOC 与 SOH 健康状态。"
      },
      {
        num: "04",
        icon: "⚓",
        title: "深海级防腐防爆",
        desc: "整包通过 IP67 防水防盐雾腐蚀测试，加固抗海浪冲击316L材质箱体，全面满足国际严苛的海事安全规范。"
      }
    ]
  },

  contact: {
    badge: "CONTACT US",
    title: "联系我们",
    subTitle: "获取专属电池方案报价与全球技术支持",
    items: [
      { icon: "📍", title: "公司地址", desc: "浙江省永康市中电国核新能源产业园8栋" },
      { icon: "📞", title: "商务热线", desc: "+86 18018962196" },
      { icon: "✉️", title: "电子邮箱", desc: "wahagee@126.com" },
      { icon: "⚡", title: "获取报价", btnText: "在线递交需求 ➔" }
    ]
  },

  footer: {
    brandDesc: "致力于以高安全、绿色、高效率的电池技术，服务于全球绿色零碳经济和能源转型战略。",
    productsTitle: "产品中心",
    productsLinks: ["储能系列", "动力系列", "工业电池组"],
    qualitiesTitle: "质量与认证",
    qualitiesList: ["ISO 9001 / 14001", "UL1973 / IEC62619 / UN38.3"],
    headquartersTitle: "企业总部",
    address: "中国·浙江省永康市中电国核新能源产业园8栋",
    tel: "Tel: +86 18018962196",
    email: "Email: wahagee@126.com",
    copyright: "© 2026 永康嘉程新能源有限公司. All rights reserved.",
    privacyText: "隐私政策",
    icpText: "ICP备13001471-1号"
  }
};

// 默认导出英文词典
export const siteData = siteDataEn;