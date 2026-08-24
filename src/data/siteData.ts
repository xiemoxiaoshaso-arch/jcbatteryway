// src/data/siteData.ts

// 1. 默认英文配置 (Default English - 已精准同步最新中文与表单修正)
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
  // 1.1 Hero Banner 3页轮播数据 (英文)
  hero: [
    {
      order: 1,
      badge: "Industrial & ESS Lithium Solution Specialist",
      badgeColor: "emerald",
      title: "Driving a Green Future",
      subtitle: "Defining Clean Energy with Safety & Quality",
      description: "We specialize in R&D of high-safety, long-life LiFePO4 (LFP) cells and energy storage system integration, planning 15 GWh annual capacity to provide one-stop customized power & ESS battery pack solutions for global clients.",
      ctaText1: "Explore Products ➔",
      ctaLink1: "#products",
      ctaText2: "Request Custom Solution",
      ctaLink2: "#contact",
    },
    {
      order: 2,
      badge: "C&I & Residential Energy Storage Integration",
      badgeColor: "blue",
      title: "Smart Energy Storage Systems",
      subtitle: "24/7 Guarding Your Zero-Carbon Power",
      description: "Providing high-efficiency containerized liquid-cooled ESS, C&I distributed storage cabinets, and residential stacked high-voltage battery packs, seamlessly compatible with mainstream inverters for peak-shaving and backup power.",
      ctaText1: "Explore ESS Products ➔",
      ctaLink1: "#products",
      ctaText2: "Request Custom Solution",
      ctaLink2: "#contact",
    },
    {
      order: 3,
      badge: "Smart Workshop & IATF 16949 Quality System",
      badgeColor: "cyan",
      title: "Marine-Grade Smart Manufacturing",
      subtitle: "Precision Craftsmanship for Ultimate Safety",
      description: "Fully automated MES traceability system and Class 10,000 cleanroom standards. Every outgoing cell undergoes 100% ultrasonic NDT testing, charge-discharge, and X-ray inspection to eliminate all safety risks.",
      ctaText1: "Explore Products ➔",
      ctaLink1: "#products",
      ctaText2: "Request Custom Solution",
      ctaLink2: "#contact",
    }
  ],
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
    showcaseList: [
      { tag: "R&D Base", title: "Modern R&D Park" },
      { tag: "Cleanroom", title: "Automated Workshop" },
      { tag: "Equipment", title: "Precision Testing Setup" },
      { tag: "Warehouse", title: "Smart Logistics Center" }
    ],
    // 👈 放在 about 内部最下方
    factoryVideo: {
      tag: "Factory Tour Video",
      playBtnText: "Watch Factory Tour",
      expandBtnText: "Full Screen Pop-up",
    },
  },
  // 3. Products Section (Multi-Product List)
  products: {
    badge: "SUPER ISLAND SERIES",
    title: "SUPER ISLAND Marine Battery Systems",
    subTitle: "High Efficiency · Low Carbon · Powerful Drive for Electric Yachts & Commercial Vessels",
    list: [
      {
        id: "90kwh",
        badge: "SUPER ISLAND SERIES",
        title: "SUPER ISLAND 90kWh Marine Power Battery Pack",
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
        ctaBtnText: "View Technical Specifications & Datasheet ➔",
      },
      {
        id: "60kwh",
        badge: "SUPER ISLAND SERIES",
        title: "SUPER ISLAND 60kWh Marine Power Battery Pack",
        model: "MODEL: SUPER ISLAND 60kWh",
        mainCardTitle: "60kWh Lightweight Marine Power Battery Pack",
        overlayBadge: "🔍 Click for Gallery | 🛡️ ISO9001 Certified",
        specs: [
          { val: "60 kWh", label: "Nominal Capacity" },
          { val: "40 L", label: "Gasoline Equivalent" },
          { val: "80,000 L", label: "Lifetime Fuel Saved" },
          { val: "1.2 - 2.0", label: "Efficiency (kWh/km)" },
        ],
        features: [
          {
            bold: "Lightweight High-Density Design: ",
            text: "Pack weight only 355kg with energy density up to 168 Wh/kg, reducing vessel payload."
          },
          {
            bold: "Flexible Parallel Expansion: ",
            text: "Supports multi-pack parallel expansion, perfectly suited for medium & small speedboats."
          },
          {
            bold: "316L Stainless Steel Protection: ",
            text: "Constructed with 316L anti-corrosion stainless steel casing & powder coating, IP67 grade."
          }
        ],
        ctaBtnText: "View Technical Specifications & Datasheet ➔",
      }
    ]
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

  // Quote Form Modal (English)
  quoteModal: {
    title: "Inquire for Customized Quote",
    subTitle: "Please fill in your battery specifications and requirements for our engineers to calculate costs.",
    labels: {
      name: "FULL NAME*",
      email: "WORK EMAIL*",
      company: "COMPANY NAME*",
      country: "COUNTRY / REGION*",
      voltage: "VOLTAGE",
      capacity: "CAPACITY",
      quantity: "QUANTITY",
      requirements: "DETAILED REQUIREMENTS*",
    },
    placeholders: {
      name: "e.g. Mr. Muller",
      email: "example@company.com",
      company: "e.g. JC Storage Ltd.",
      country: "e.g. Germany, USA",
      voltage: "e.g. 48V / 350V/540V",
      capacity: "e.g. 300Ah / 166Ah",
      quantity: "e.g. 500 packs",
      requirements: "e.g. We need batteries for electric boat projects. Please specify if the operating environment is inland freshwater or marine, communication protocols needed, or provide detailed technical specifications for custom development.",
    },
    btnText: "Submit Inquiry ➔"
  },

  // 参数规格表弹窗字典 (英文)
  specsModal: {
    title: "SUPER ISLAND Series Technical Specifications",
    subTitle: "Engineering parameters for 60kWh & 90kWh marine power battery packs",
    headers: ["Specification Item", "60kWh Pack", "90kWh Pack", "Remarks"],
    rows: [
      { item: "Battery Chemistry", v60: "NCM / Graphite", v90: "NCM / Graphite", remark: "-" },
      { item: "Nominal Voltage (V)", v60: "359.04 V", v90: "538.56 V", remark: "1/3C" },
      { item: "Nominal Capacity (Ah)", v60: "166 Ah", v90: "166 Ah", remark: "1/3C" },
      { item: "Nominal Energy (kWh)", v60: "59.6 kWh", v90: "89.4 kWh", remark: "1/3C" },
      { item: "Weight (kg)", v60: "355 ± 5 kg", v90: "540 ± 5 kg", remark: "-" },
      { item: "Energy Density (Wh/kg)", v60: "168 Wh/kg", v90: "166 Wh/kg", remark: "1/3C" },
      { item: "Dimensions L×W×H (mm)", v60: "1154×710×300 ±3", v90: "1665×710×300 ±3", remark: "-" },
      { item: "Protection Level", v60: "IP67", v90: "IP67", remark: "-" },
      { item: "Enclosure Material", v60: "316L Stainless Steel", v90: "316L Stainless Steel", remark: "-" },
      { item: "Surface Finish", v60: "Electrophoresis + Powder Coating", v90: "Electrophoresis + Powder Coating", remark: "-" },
      { item: "External Bolt Material", v60: "316L Stainless Steel", v90: "316L Stainless Steel", remark: "-" },
      { item: "Parallel Expansion", v60: "Multi-pack Parallel Supported", v90: "Multi-pack Parallel Supported", remark: "-" }
    ],
    inquireBtnText: "Request Customized Quote ➔"
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
    productsLinks: ["Power Battery System Series"],
    qualitiesTitle: "Quality & Certifications",
    qualitiesList: ["ISO 9001", "IEC62619 / UN38.3"],
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
  // 1.1 Hero Banner 3页轮播数据 (中文)
  hero: [
    {
      order: 1,
      badge: "工业级 & 储能级锂电池方案专家",
      badgeColor: "emerald",
      title: "驱动绿色未来",
      subtitle: "以安全与品质定义新能源",
      description: "我们专注于高安全、长寿命磷酸铁锂（LFP）电芯研发与储能系统集成，年产能规划 15 GWh，为全球客户提供一站式定制化动力与储能包方案。",
      ctaText1: "浏览产品中心 ➔",
      ctaLink1: "#products",
      ctaText2: "索取定制方案",
      ctaLink2: "#contact",
    },
    {
      order: 2,
      badge: "工商业 & 户用储能系统集成",
      badgeColor: "blue",
      title: "智慧储能系统",
      subtitle: "全天候守护您的零碳电力",
      description: "提供涵盖高效率集装箱液冷储能、工商业分布式储能柜、以及家庭堆叠式高压电池包，无缝兼容主流逆变器，实现峰谷套利与安全备电。",
      ctaText1: "探索储能产品 ➔",
      ctaLink1: "#products",
      ctaText2: "索取定制方案",
      ctaLink2: "#contact",
    },
    {
      order: 3,
      badge: "智造车间 & IATF 16949 体系",
      badgeColor: "cyan",
      title: "船舶级智能制造",
      subtitle: "以精密工艺成就极致安全",
      description: "全线引进全自动化 MES 追溯系统与万级无尘控制标准，出厂电芯历经 100% 超声波无损探伤、充放电及 X-ray 质检，杜绝安全隐患。",
      ctaText1: "探索储能产品 ➔",
      ctaLink1: "#products",
      ctaText2: "索取定制方案",
      ctaLink2: "#contact",
    }
  ],
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
    showcaseList: [
      { tag: "研发基地", title: "现代化智造园区" },
      { tag: "无尘车间", title: "全自动化生产车间" },
      { tag: "精密装备", title: "高精度检测加工设备" },
      { tag: "智能库房", title: "恒温成品与仓储中心" }
    ],
    // 👈 放在 about 内部最下方
    factoryVideo: {
      tag: "企业工厂实拍宣传片",
      playBtnText: "播放工厂实拍宣传片",
      expandBtnText: "放大全屏播放",
    },
  },

  // 3. 船舶锂电/旗舰产品板块 (中文)
  products: {
    badge: "SUPER ISLAND SERIES",
    title: "SUPER ISLAND 船用动力电池包系列",
    subTitle: "高效·低碳·强劲动力，专为电驱动游艇与商业船舶打造的旗舰电池系统",
    list: [
      {
        id: "90kwh",
        badge: "SUPER ISLAND SERIES",
        title: "SUPER ISLAND 90kWh 船用动力电池包",
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
        ctaBtnText: "查看产品详细参数规格表 ➔",
      },
      {
        id: "60kwh",
        badge: "SUPER ISLAND SERIES",
        title: "SUPER ISLAND 60kWh 船用动力电池包",
        model: "MODEL: SUPER ISLAND 60kWh",
        mainCardTitle: "60kWh 轻量级船用动力电池包",
        overlayBadge: "🔍 点击放大画廊 | 🛡️ ISO9001 认证",
        specs: [
          { val: "60 kWh", label: "电池标称容量" },
          { val: "40 L", label: "等效汽油能量" },
          { val: "80,000 L", label: "终身节省燃油" },
          { val: "1.2 - 2.0", label: "航行能效 (kWh/km)" },
        ],
        features: [
          {
            bold: "轻量化高密设计：",
            text: "整包重量仅 355kg，能量密度高达 168 Wh/kg，显著降低船体载重负担。"
          },
          {
            bold: "灵活并联拓展：",
            text: "支持多包轻松并联扩容，完美适配中小型电动快艇与巡逻船只动力需求。"
          },
          {
            bold: "316L 不锈钢强效防护：",
            text: "采用 316L 高阶防腐不锈钢箱体与电泳喷塑工艺，IP67 级全面抵御海浪侵蚀。"
          }
        ],
        ctaBtnText: "查看产品详细参数规格表 ➔",
      }
    ]
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

  // Quote Form Modal (中文)
  quoteModal: {
    title: "在线递交定制留言与报价申请",
    subTitle: "请详细填写您的电池技术指标和需求，以便我们的工程师为您核算精确的成本数据。",
    labels: {
      name: "您的姓名*",
      email: "企业邮箱*",
      company: "公司名称*",
      country: "国家 / 地区*",
      voltage: "定制电压",
      capacity: "定制容量",
      quantity: "首期需求量",
      requirements: "具体定制需求或应用场景*",
    },
    placeholders: {
      name: "例如：工程师 Mr. Muller",
      email: "example@company.com",
      company: "例如：JC Storage Ltd.",
      country: "例如：德国、北美",
      voltage: "如：48V / 350V/540V",
      capacity: "如：300Ah / 166Ah",
      quantity: "如：500 组",
      requirements: "例如：我们需要将电池用于电动船舶项目，使用场景是内陆淡水还是海洋环境，是否需要通讯，通讯协议，或者提供详细技术要求，进行定制开发",
    },
    btnText: "提交定制申请 ➔"
  },

  // 参数规格表弹窗字典 (中文)
  specsModal: {
    title: "SUPER ISLAND 系列详细技术参数表",
    subTitle: "60kWh 与 90kWh 船用动力电池包官方工程技术指标对比",
    headers: ["项目", "60kWh 电池包", "90kWh 电池包", "备注"],
    rows: [
      { item: "体系", v60: "NCM / 石墨", v90: "NCM / 石墨", remark: "-" },
      { item: "额定电压 (V)", v60: "359.04 V", v90: "538.56 V", remark: "1/3C" },
      { item: "额定容量 (Ah)", v60: "166 Ah", v90: "166 Ah", remark: "1/3C" },
      { item: "额定能量 (kWh)", v60: "59.6 kWh", v90: "89.4 kWh", remark: "1/3C" },
      { item: "重量 (kg)", v60: "355 ± 5 kg", v90: "540 ± 5 kg", remark: "-" },
      { item: "能量密度 (Wh/kg)", v60: "168 Wh/kg", v90: "166 Wh/kg", remark: "1/3C" },
      { item: "包络尺寸 (mm)", v60: "1154×710×300 ±3", v90: "1665×710×300 ±3", remark: "-" },
      { item: "防护等级", v60: "IP67", v90: "IP67", remark: "-" },
      { item: "外壳材质", v60: "316L 不锈钢", v90: "316L 不锈钢", remark: "-" },
      { item: "箱体处理工艺", v60: "电泳 + 喷塑", v90: "电泳 + 喷塑", remark: "-" },
      { item: "外部螺栓材质", v60: "316L 不锈钢", v90: "316L 不锈钢", remark: "-" },
      { item: "拓展功能", v60: "支持多包并联", v90: "支持多包并联", remark: "-" }
    ],
    inquireBtnText: "索取大货定制报价 ➔"
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
    productsLinks: ["动力电池系统系列"],
    qualitiesTitle: "质量与认证",
    qualitiesList: ["ISO 9001", "IEC62619 / UN38.3"],
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