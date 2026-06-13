export const sampleDoc = {
  title: "Residential Rent Agreement — Flat 302, Green Heights",
  type: "Rent Agreement",
  parties: ["Mr. Rajesh Kumar (Landlord)", "Ms. Anita Sharma (Tenant)"],
  duration: "11 months",
  rent: "₹ 28,000 / month",
  deposit: "₹ 1,68,000 (6 months)",
  uploadedAt: "Today, 4:21 PM",
  fairnessScore: 62,
  riskLevel: "Moderate",
  summary:
    "This is an 11-month residential rent agreement for Flat 302, Green Heights, Pune. Monthly rent is ₹28,000 with a 6-month security deposit. The agreement allows the landlord to enter the premises with 24-hour notice, requires the tenant to bear all minor repairs under ₹5,000, and includes a 10% annual rent escalation. A few clauses lean significantly in the landlord's favour — review the Risk Radar below.",
  clauses: [
    {
      id: "c1",
      title: "Security Deposit",
      text: "Tenant shall deposit ₹1,68,000 (six months' rent), refundable within 90 days of vacating after deductions.",
      risk: "high",
      note: "Industry norm is 2–3 months; 6 months is unusually high.",
    },
    {
      id: "c2",
      title: "Rent Escalation",
      text: "Rent shall increase by 10% every 12 months.",
      risk: "medium",
      note: "Typical range is 5–8% per annum.",
    },
    {
      id: "c3",
      title: "Maintenance",
      text: "Tenant bears all repair costs under ₹5,000 per incident.",
      risk: "medium",
      note: "Threshold should ideally be ₹2,000 per Indian rental norms.",
    },
    {
      id: "c4",
      title: "Lock-in Period",
      text: "Tenant cannot vacate before 6 months; doing so forfeits the deposit.",
      risk: "high",
      note: "Forfeiture of entire deposit is legally contestable.",
    },
    {
      id: "c5",
      title: "Notice Period",
      text: "Either party may terminate with a 2-month written notice.",
      risk: "low",
      note: "Standard and balanced.",
    },
    {
      id: "c6",
      title: "Entry by Landlord",
      text: "Landlord may enter premises with 24-hour prior notice for inspection.",
      risk: "low",
      note: "Reasonable; protects tenant privacy.",
    },
    {
      id: "c7",
      title: "Late Payment",
      text: "Late rent attracts 2% interest per day after the 7th of each month.",
      risk: "high",
      note: "2% per day = ~730% per annum. Likely unenforceable.",
    },
  ],
  fairnessBreakdown: [
    { label: "Clarity", value: 78 },
    { label: "Balance", value: 54 },
    { label: "Tenant Rights", value: 48 },
    { label: "Legal Compliance", value: 72 },
    { label: "Financial Terms", value: 58 },
  ],
};

export const rightsHub = [
  {
    key: "consumer",
    label: "Consumer Rights",
    icon: "ShoppingBag",
    color: "from-amber-500 to-orange-500",
    items: [
      "Right to refund for defective goods within 30 days",
      "Right to file complaint at District Consumer Forum (claims up to ₹1 crore)",
      "Right to product safety information & MRP transparency",
      "E-commerce: 7-day return window mandated under CCPA 2020",
    ],
  },
  {
    key: "tenant",
    label: "Tenant Rights",
    icon: "Home",
    color: "from-emerald-500 to-teal-600",
    items: [
      "Security deposit capped at 2 months (Model Tenancy Act)",
      "Right to written rent receipt for every payment",
      "Landlord must give minimum 24 hours' notice before entry",
      "Eviction only through proper Rent Authority — not by force",
    ],
  },
  {
    key: "employee",
    label: "Employee Rights",
    icon: "Briefcase",
    color: "from-blue-500 to-indigo-600",
    items: [
      "Gratuity after 5 years of continuous service (Payment of Gratuity Act)",
      "Maternity leave: 26 weeks paid (Maternity Benefit Act 1961)",
      "Equal pay for equal work — Article 39(d)",
      "Provident Fund — 12% employer + 12% employee mandatory",
    ],
  },
  {
    key: "women",
    label: "Women's Rights",
    icon: "Heart",
    color: "from-rose-500 to-pink-600",
    items: [
      "Free legal aid under Section 12, Legal Services Authorities Act",
      "POSH Act 2013 — Internal Complaints Committee mandatory >10 employees",
      "Right against domestic violence — PWDVA 2005",
      "Equal inheritance rights in ancestral property — Hindu Succession Amendment 2005",
    ],
  },
  {
    key: "cyber",
    label: "Cyber Rights",
    icon: "Shield",
    color: "from-violet-500 to-purple-600",
    items: [
      "File cybercrime FIR online at cybercrime.gov.in",
      "Right to data deletion under DPDP Act 2023",
      "Compensation up to ₹5 crore for data breach",
      "Section 66E IT Act — privacy violation punishable up to 3 years",
    ],
  },
];

export const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "bn", label: "বাংলা" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
];

export const initialChat = [
  {
    role: "assistant" as const,
    content:
      "Namaste 👋 I'm your Jan-Nyay legal copilot. Ask me anything about the **Rent Agreement** you uploaded — clauses, risks, or your rights.",
  },
];

export const suggestedQuestions = [
  "Is the 6-month deposit legal?",
  "What happens if I leave in month 4?",
  "Can the landlord enter without notice?",
  "Explain the late payment clause in Hindi",
];

/* -------- i18n -------- */
export type LangCode = string;

export const translations: Record<string, Record<string, string>> = {
  "nav.features": { en: "Features", hi: "विशेषताएँ", mr: "वैशिष्ट्ये" },
  "nav.how": {
    en: "How it works",
    hi: "यह कैसे काम करता है",
    mr: "हे कसे काम करते",
  },
  "nav.rights": {
    en: "Know Your Rights",
    hi: "अपने अधिकार जानें",
    mr: "तुमचे हक्क जाणून घ्या",
  },
  "cta.tryDemo": { en: "Try Demo", hi: "डेमो आज़माएँ", mr: "डेमो वापरा" },
  "cta.analyse": {
    en: "Analyse a Document",
    hi: "दस्तावेज़ का विश्लेषण करें",
    mr: "दस्तऐवजाचे विश्लेषण करा",
  },
  "cta.seeDemo": {
    en: "See Demo Dashboard",
    hi: "डेमो डैशबोर्ड देखें",
    mr: "डेमो डॅशबोर्ड पहा",
  },
  "cta.launchDemo": {
    en: "Launch Demo Dashboard",
    hi: "डेमो डैशबोर्ड लॉन्च करें",
    mr: "डेमो डॅशबोर्ड सुरू करा",
  },
  "hero.badge": {
    en: "AI Legal Copilot · Built for Bharat",
    hi: "एआई कानूनी सहायक · भारत के लिए बना",
    mr: "एआय कायदेशीर सहाय्यक · भारतासाठी",
  },
  "hero.titleA": {
    en: "Understand any legal document —",
    hi: "किसी भी कानूनी दस्तावेज़ को समझें —",
    mr: "कोणताही कायदेशीर दस्तऐवज समजून घ्या —",
  },
  "hero.titleB": {
    en: "in your language",
    hi: "अपनी भाषा में",
    mr: "तुमच्या भाषेत",
  },
  "hero.titleC": {
    en: ", in seconds.",
    hi: ", सेकंडों में।",
    mr: ", काही सेकंदात.",
  },
  "hero.subtitle": {
    en: 'Upload a contract, rent agreement, insurance policy or government notice. Jan-Nyay summarises it in plain words, flags risky clauses, scores its fairness and lets you simulate "what-if" scenarios before you sign.',
    hi: "अनुबंध, किराया समझौता, बीमा पॉलिसी या सरकारी नोटिस अपलोड करें। जन-न्याय इसे सरल भाषा में सारांशित करता है, जोखिम भरी शर्तों को चिह्नित करता है, निष्पक्षता स्कोर देता है और हस्ताक्षर से पहले परिणामों का अनुकरण करने देता है।",
    mr: "करार, भाडे करार, विमा पॉलिसी किंवा सरकारी नोटीस अपलोड करा. जन-न्याय सोप्या भाषेत सारांश देते, धोकादायक कलमे ओळखते आणि सही करण्यापूर्वी परिणामांचे अनुकरण करू देते.",
  },
  "stat.languages": {
    en: "Indian languages",
    hi: "भारतीय भाषाएँ",
    mr: "भारतीय भाषा",
  },
  "stat.accuracy": {
    en: "Clause accuracy",
    hi: "खंड सटीकता",
    mr: "कलम अचूकता",
  },
  "stat.time": {
    en: "Avg. analysis time",
    hi: "औसत विश्लेषण समय",
    mr: "सरासरी विश्लेषण वेळ",
  },
  "features.kicker": {
    en: "Why Jan-Nyay",
    hi: "जन-न्याय क्यों",
    mr: "जन-न्याय का",
  },
  "features.title": {
    en: "Legal clarity, built for every citizen",
    hi: "हर नागरिक के लिए कानूनी स्पष्टता",
    mr: "प्रत्येक नागरिकासाठी कायदेशीर स्पष्टता",
  },
  "features.subtitle": {
    en: "Six powerful tools that turn dense legalese into decisions you can actually make.",
    hi: "छह शक्तिशाली उपकरण जो जटिल कानूनी भाषा को आपके निर्णयों में बदलते हैं।",
    mr: "सहा शक्तिशाली साधने जी गुंतागुंतीची कायदेशीर भाषा निर्णयांत बदलतात.",
  },
  "how.kicker": {
    en: "How it works",
    hi: "यह कैसे काम करता है",
    mr: "हे कसे काम करते",
  },
  "how.title": {
    en: "From confusing PDF to confident decision",
    hi: "भ्रमित करने वाले पीडीएफ से आत्मविश्वासी निर्णय तक",
    mr: "गोंधळवणाऱ्या PDF कडून आत्मविश्वासपूर्ण निर्णयापर्यंत",
  },
  "rights.kicker": {
    en: "Know Your Rights Hub",
    hi: "अपने अधिकार जानें हब",
    mr: "तुमचे हक्क जाणून घ्या हब",
  },
  "rights.title": {
    en: "Because law shouldn't be a luxury",
    hi: "क्योंकि कानून विलासिता नहीं होना चाहिए",
    mr: "कारण कायदा ही चैन नसावी",
  },
  "cta.justice": {
    en: "Justice begins with understanding.",
    hi: "न्याय समझ से शुरू होता है।",
    mr: "न्याय समजुतीने सुरू होतो.",
  },
  "cta.tryLive": {
    en: "Try the live demo with a real rent agreement — no signup required.",
    hi: "वास्तविक किराया समझौते के साथ लाइव डेमो आज़माएँ — कोई साइनअप नहीं।",
    mr: "खऱ्या भाडे करारासह थेट डेमो वापरा — साइनअप नाही.",
  },
  "tab.overview": { en: "Overview", hi: "अवलोकन", mr: "विहंगावलोकन" },
  "tab.risks": { en: "Risk Radar", hi: "जोखिम रडार", mr: "जोखीम रडार" },
  "tab.simulator": {
    en: "What-If Simulator",
    hi: "क्या-अगर सिम्युलेटर",
    mr: "तर-काय सिम्युलेटर",
  },
  "tab.chat": {
    en: "Legal Copilot",
    hi: "कानूनी सहायक",
    mr: "कायदेशीर सहाय्यक",
  },
  "tab.rights": {
    en: "Know Your Rights",
    hi: "अपने अधिकार जानें",
    mr: "तुमचे हक्क जाणून घ्या",
  },
  "doc.uploadNew": {
    en: "Upload new",
    hi: "नया अपलोड करें",
    mr: "नवीन अपलोड करा",
  },
  "footer.tagline": {
    en: "AI legal copilot built for every Indian citizen.",
    hi: "हर भारतीय नागरिक के लिए एआई कानूनी सहायक।",
    mr: "प्रत्येक भारतीय नागरिकासाठी एआय कायदेशीर सहाय्यक.",
  },
  "feat.summary.t": {
    en: "Plain-Language Summary",
    hi: "सरल भाषा सारांश",
    mr: "सोप्या भाषेतील सारांश",
  },
  "feat.summary.d": {
    en: "Dense contracts rewritten in 5–6 lines anyone can understand.",
    hi: "जटिल अनुबंध 5-6 पंक्तियों में पुनः लिखे जाते हैं।",
    mr: "जटिल करार ५-६ ओळींत पुन्हा लिहिले जातात.",
  },
  "feat.risk.t": { en: "Risk Radar", hi: "जोखिम रडार", mr: "जोखीम रडार" },
  "feat.risk.d": {
    en: "AI scans for unfair, predatory or unenforceable clauses with severity tags.",
    hi: "एआई अनुचित या लागू न होने वाली शर्तों को खोजता है।",
    mr: "एआय अन्यायकारक कलमे शोधते.",
  },
  "feat.fair.t": {
    en: "Fairness Score",
    hi: "निष्पक्षता स्कोर",
    mr: "निष्पक्षता गुण",
  },
  "feat.fair.d": {
    en: "A 0–100 score across clarity, balance and your rights as a citizen.",
    hi: "स्पष्टता और अधिकारों पर 0-100 स्कोर।",
    mr: "स्पष्टता व हक्कांवर ०-१०० गुण.",
  },
  "feat.sim.t": {
    en: "What-If Simulator",
    hi: "क्या-अगर सिम्युलेटर",
    mr: "तर-काय सिम्युलेटर",
  },
  "feat.sim.d": {
    en: "Simulate late payments, breaches or early exit and see the real cost.",
    hi: "देर से भुगतान या जल्दी निकलने की वास्तविक लागत देखें।",
    mr: "उशिरा पेमेंटची खरी किंमत पहा.",
  },
  "feat.bot.t": {
    en: "Legal Copilot Chat",
    hi: "कानूनी सहायक चैट",
    mr: "कायदेशीर सहाय्यक चॅट",
  },
  "feat.bot.d": {
    en: "Document-aware ChatGPT-style assistant. Ask in any Indian language.",
    hi: "किसी भी भारतीय भाषा में पूछें।",
    mr: "कोणत्याही भारतीय भाषेत विचारा.",
  },
  "feat.rights.t": {
    en: "Know Your Rights Hub",
    hi: "अपने अधिकार जानें हब",
    mr: "तुमचे हक्क जाणून घ्या हब",
  },
  "feat.rights.d": {
    en: "Consumer · Tenant · Employee · Women · Cyber rights, in one place.",
    hi: "उपभोक्ता · किरायेदार · कर्मचारी · महिला · साइबर अधिकार।",
    mr: "ग्राहक · भाडेकरू · कर्मचारी · महिला · सायबर हक्क.",
  },
  "how.1.t": { en: "Upload", hi: "अपलोड करें", mr: "अपलोड करा" },
  "how.1.d": {
    en: "Drop your contract, agreement or notice (PDF / image / text).",
    hi: "अपना अनुबंध या नोटिस छोड़ें।",
    mr: "तुमचा करार किंवा नोटीस टाका.",
  },
  "how.2.t": { en: "Analyse", hi: "विश्लेषण", mr: "विश्लेषण" },
  "how.2.d": {
    en: "Our AI reads every clause, cites Indian law and flags risk.",
    hi: "हमारा एआई हर खंड पढ़ता है और जोखिम चिह्नित करता है।",
    mr: "आमचे एआय प्रत्येक कलम वाचते.",
  },
  "how.3.t": { en: "Understand", hi: "समझें", mr: "समजून घ्या" },
  "how.3.d": {
    en: "Plain-language summary in your preferred language.",
    hi: "आपकी भाषा में सरल सारांश।",
    mr: "तुमच्या भाषेत सोपा सारांश.",
  },
  "how.4.t": { en: "Decide", hi: "निर्णय लें", mr: "निर्णय घ्या" },
  "how.4.d": {
    en: "Simulate outcomes & ask follow-up questions before you sign.",
    hi: "हस्ताक्षर से पहले परिणामों का अनुकरण करें।",
    mr: "सही करण्यापूर्वी परिणामांचे अनुकरण करा.",
  },
};

export function t(key: string, lang: string): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry.en || key;
}

/* ---------- Localized document content ---------- */

type LocStr = Record<string, string>;
const pick = (s: LocStr, lang: string) => s[lang] || s.en;

const docL = {
  title: {
    en: "Residential Rent Agreement — Flat 302, Green Heights",
    hi: "आवासीय किराया अनुबंध — फ्लैट 302, ग्रीन हाइट्स",
    mr: "निवासी भाडे करार — फ्लॅट ३०२, ग्रीन हाइट्स",
  },
  type: { en: "Rent Agreement", hi: "किराया अनुबंध", mr: "भाडे करार" },
  parties: [
    {
      en: "Mr. Rajesh Kumar (Landlord)",
      hi: "श्री राजेश कुमार (मकान मालिक)",
      mr: "श्री. राजेश कुमार (घरमालक)",
    },
    {
      en: "Ms. Anita Sharma (Tenant)",
      hi: "सुश्री अनीता शर्मा (किरायेदार)",
      mr: "सौ. अनिता शर्मा (भाडेकरू)",
    },
  ],
  duration: { en: "11 months", hi: "11 महीने", mr: "११ महिने" },
  rent: {
    en: "₹ 28,000 / month",
    hi: "₹ 28,000 / माह",
    mr: "₹ २८,००० / महिना",
  },
  deposit: {
    en: "₹ 1,68,000 (6 months)",
    hi: "₹ 1,68,000 (6 महीने)",
    mr: "₹ १,६८,००० (६ महिने)",
  },
  uploadedAt: {
    en: "Today, 4:21 PM",
    hi: "आज, शाम 4:21",
    mr: "आज, संध्या. ४:२१",
  },
  riskLevel: { en: "Moderate", hi: "मध्यम", mr: "मध्यम" },
  summary: {
    en: "This is an 11-month residential rent agreement for Flat 302, Green Heights, Pune. Monthly rent is ₹28,000 with a 6-month security deposit. The agreement allows the landlord to enter the premises with 24-hour notice, requires the tenant to bear all minor repairs under ₹5,000, and includes a 10% annual rent escalation. A few clauses lean significantly in the landlord's favour — review the Risk Radar below.",
    hi: "यह पुणे के ग्रीन हाइट्स, फ्लैट 302 के लिए 11 महीने का आवासीय किराया अनुबंध है। मासिक किराया ₹28,000 है और 6 महीने की सुरक्षा जमा राशि है। मकान मालिक 24 घंटे की पूर्व सूचना देकर परिसर में प्रवेश कर सकता है, किरायेदार को ₹5,000 से कम की सभी छोटी मरम्मत स्वयं करनी होगी, और हर साल किराये में 10% वृद्धि होगी। कुछ शर्तें स्पष्ट रूप से मकान मालिक के पक्ष में झुकी हुई हैं — नीचे जोखिम रडार देखें।",
    mr: "हा पुण्यातील ग्रीन हाइट्स, फ्लॅट ३०२ साठीचा ११ महिन्यांचा निवासी भाडे करार आहे. मासिक भाडे ₹२८,००० असून ६ महिन्यांची सुरक्षा ठेव आहे. घरमालक २४ तासांची पूर्वसूचना देऊन परिसरात प्रवेश करू शकतो, ₹५,००० पेक्षा कमी किरकोळ दुरुस्त्या भाडेकरूने कराव्यात आणि दरवर्षी १०% भाडेवाढ होईल. काही कलमे स्पष्टपणे घरमालकाच्या बाजूने झुकलेली आहेत — खालील जोखीम रडार पहा.",
  },
  clauses: [
    {
      id: "c1",
      risk: "high",
      title: { en: "Security Deposit", hi: "सुरक्षा जमा", mr: "सुरक्षा ठेव" },
      text: {
        en: "Tenant shall deposit ₹1,68,000 (six months' rent), refundable within 90 days of vacating after deductions.",
        hi: "किरायेदार ₹1,68,000 (छह महीने का किराया) जमा करेगा, जो कटौती के बाद खाली करने के 90 दिनों के भीतर वापसी योग्य है।",
        mr: "भाडेकरू ₹१,६८,००० (सहा महिन्यांचे भाडे) ठेव म्हणून देईल, कपातीनंतर ९० दिवसांत परत मिळेल.",
      },
      note: {
        en: "Industry norm is 2–3 months; 6 months is unusually high.",
        hi: "सामान्य मानदंड 2–3 महीने का है; 6 महीने असामान्य रूप से अधिक है।",
        mr: "सामान्यतः २–३ महिने असते; ६ महिने असामान्यपणे जास्त आहे.",
      },
    },
    {
      id: "c2",
      risk: "medium",
      title: { en: "Rent Escalation", hi: "किराया वृद्धि", mr: "भाडेवाढ" },
      text: {
        en: "Rent shall increase by 10% every 12 months.",
        hi: "हर 12 महीने में किराया 10% बढ़ेगा।",
        mr: "दर १२ महिन्यांनी भाडे १०% ने वाढेल.",
      },
      note: {
        en: "Typical range is 5–8% per annum.",
        hi: "सामान्य सीमा 5–8% प्रति वर्ष है।",
        mr: "सामान्यतः ५–८% प्रति वर्ष असते.",
      },
    },
    {
      id: "c3",
      risk: "medium",
      title: { en: "Maintenance", hi: "रखरखाव", mr: "देखभाल" },
      text: {
        en: "Tenant bears all repair costs under ₹5,000 per incident.",
        hi: "किरायेदार प्रति घटना ₹5,000 से कम की सभी मरम्मत लागत वहन करेगा।",
        mr: "भाडेकरू प्रति घटनेस ₹५,००० खालील दुरुस्ती खर्च करेल.",
      },
      note: {
        en: "Threshold should ideally be ₹2,000 per Indian rental norms.",
        hi: "भारतीय किराया मानकों के अनुसार सीमा ₹2,000 होनी चाहिए।",
        mr: "भारतीय मानकांनुसार ही मर्यादा ₹२,००० असावी.",
      },
    },
    {
      id: "c4",
      risk: "high",
      title: { en: "Lock-in Period", hi: "लॉक-इन अवधि", mr: "लॉक-इन कालावधी" },
      text: {
        en: "Tenant cannot vacate before 6 months; doing so forfeits the deposit.",
        hi: "किरायेदार 6 महीने से पहले खाली नहीं कर सकता; ऐसा करने पर जमा राशि जब्त हो जाएगी।",
        mr: "भाडेकरू ६ महिन्यांपूर्वी जागा सोडू शकत नाही; तसे केल्यास ठेव जप्त होईल.",
      },
      note: {
        en: "Forfeiture of entire deposit is legally contestable.",
        hi: "पूरी जमा राशि जब्त करना कानूनी रूप से चुनौती योग्य है।",
        mr: "संपूर्ण ठेव जप्त करणे कायदेशीरदृष्ट्या आव्हानात्मक आहे.",
      },
    },
    {
      id: "c5",
      risk: "low",
      title: { en: "Notice Period", hi: "नोटिस अवधि", mr: "नोटीस कालावधी" },
      text: {
        en: "Either party may terminate with a 2-month written notice.",
        hi: "कोई भी पक्ष 2 महीने की लिखित सूचना देकर समाप्त कर सकता है।",
        mr: "कोणताही पक्ष २ महिन्यांच्या लेखी सूचनेने करार संपवू शकतो.",
      },
      note: {
        en: "Standard and balanced.",
        hi: "मानक और संतुलित।",
        mr: "मानक आणि संतुलित.",
      },
    },
    {
      id: "c6",
      risk: "low",
      title: {
        en: "Entry by Landlord",
        hi: "मकान मालिक का प्रवेश",
        mr: "घरमालकाचा प्रवेश",
      },
      text: {
        en: "Landlord may enter premises with 24-hour prior notice for inspection.",
        hi: "मकान मालिक निरीक्षण के लिए 24 घंटे की पूर्व सूचना देकर परिसर में प्रवेश कर सकता है।",
        mr: "घरमालक तपासणीसाठी २४ तासांची पूर्वसूचना देऊन परिसरात प्रवेश करू शकतो.",
      },
      note: {
        en: "Reasonable; protects tenant privacy.",
        hi: "उचित; किरायेदार की गोपनीयता की रक्षा करता है।",
        mr: "वाजवी; भाडेकरूच्या गोपनीयतेचे रक्षण करते.",
      },
    },
    {
      id: "c7",
      risk: "high",
      title: { en: "Late Payment", hi: "विलंबित भुगतान", mr: "उशिराचे पेमेंट" },
      text: {
        en: "Late rent attracts 2% interest per day after the 7th of each month.",
        hi: "हर महीने की 7 तारीख के बाद देर से किराये पर प्रतिदिन 2% ब्याज लगेगा।",
        mr: "प्रत्येक महिन्याच्या ७ तारखेनंतर उशिरा भाड्यावर दररोज २% व्याज.",
      },
      note: {
        en: "2% per day = ~730% per annum. Likely unenforceable.",
        hi: "2% प्रति दिन = ~730% प्रति वर्ष। संभवतः लागू करने योग्य नहीं।",
        mr: "२% प्रति दिन = ~७३०% प्रति वर्ष. बहुधा लागू करण्यायोग्य नाही.",
      },
    },
  ],
  fairnessBreakdown: [
    { label: { en: "Clarity", hi: "स्पष्टता", mr: "स्पष्टता" }, value: 78 },
    { label: { en: "Balance", hi: "संतुलन", mr: "संतुलन" }, value: 54 },
    {
      label: {
        en: "Tenant Rights",
        hi: "किरायेदार अधिकार",
        mr: "भाडेकरू हक्क",
      },
      value: 48,
    },
    {
      label: {
        en: "Legal Compliance",
        hi: "कानूनी अनुपालन",
        mr: "कायदेशीर पालन",
      },
      value: 72,
    },
    {
      label: { en: "Financial Terms", hi: "वित्तीय शर्तें", mr: "आर्थिक अटी" },
      value: 58,
    },
  ],
};

export function getDoc(lang: string) {
  return {
    title: pick(docL.title, lang),
    type: pick(docL.type, lang),
    parties: docL.parties.map((p) => pick(p, lang)),
    duration: pick(docL.duration, lang),
    rent: pick(docL.rent, lang),
    deposit: pick(docL.deposit, lang),
    uploadedAt: pick(docL.uploadedAt, lang),
    riskLevel: pick(docL.riskLevel, lang),
    fairnessScore: 62,
    summary: pick(docL.summary, lang),
    clauses: docL.clauses.map((c) => ({
      id: c.id,
      risk: c.risk,
      title: pick(c.title, lang),
      text: pick(c.text, lang),
      note: pick(c.note, lang),
    })),
    fairnessBreakdown: docL.fairnessBreakdown.map((f) => ({
      label: pick(f.label, lang),
      value: f.value,
    })),
  };
}

/* Rights hub localized */
const rightsL = [
  {
    key: "consumer",
    icon: "ShoppingBag",
    color: "from-amber-500 to-orange-500",
    label: { en: "Consumer Rights", hi: "उपभोक्ता अधिकार", mr: "ग्राहक हक्क" },
    items: [
      {
        en: "Right to refund for defective goods within 30 days",
        hi: "30 दिनों के भीतर दोषपूर्ण वस्तुओं की वापसी का अधिकार",
        mr: "३० दिवसांत सदोष वस्तूंच्या परताव्याचा हक्क",
      },
      {
        en: "Right to file complaint at District Consumer Forum (claims up to ₹1 crore)",
        hi: "जिला उपभोक्ता मंच में शिकायत दर्ज करने का अधिकार (₹1 करोड़ तक के दावे)",
        mr: "जिल्हा ग्राहक मंचात तक्रार दाखल करण्याचा हक्क (₹१ कोटीपर्यंत)",
      },
      {
        en: "Right to product safety information & MRP transparency",
        hi: "उत्पाद सुरक्षा जानकारी और एमआरपी पारदर्शिता का अधिकार",
        mr: "उत्पादन सुरक्षा माहिती व MRP पारदर्शकतेचा हक्क",
      },
      {
        en: "E-commerce: 7-day return window mandated under CCPA 2020",
        hi: "ई-कॉमर्स: सीसीपीए 2020 के तहत 7 दिन की वापसी अनिवार्य",
        mr: "ई-कॉमर्स: CCPA २०२० अंतर्गत ७ दिवसांची परतावा खिडकी अनिवार्य",
      },
    ],
  },
  {
    key: "tenant",
    icon: "Home",
    color: "from-emerald-500 to-teal-600",
    label: { en: "Tenant Rights", hi: "किरायेदार अधिकार", mr: "भाडेकरू हक्क" },
    items: [
      {
        en: "Security deposit capped at 2 months (Model Tenancy Act)",
        hi: "सुरक्षा जमा 2 महीने तक सीमित (मॉडल टेनेंसी एक्ट)",
        mr: "सुरक्षा ठेव २ महिन्यांपर्यंत मर्यादित (मॉडेल टेनन्सी कायदा)",
      },
      {
        en: "Right to written rent receipt for every payment",
        hi: "हर भुगतान के लिए लिखित किराया रसीद का अधिकार",
        mr: "प्रत्येक पेमेंटसाठी लेखी पावतीचा हक्क",
      },
      {
        en: "Landlord must give minimum 24 hours' notice before entry",
        hi: "मकान मालिक को प्रवेश से पहले कम से कम 24 घंटे की सूचना देनी होगी",
        mr: "घरमालकाने प्रवेशापूर्वी किमान २४ तासांची सूचना द्यावी",
      },
      {
        en: "Eviction only through proper Rent Authority — not by force",
        hi: "बेदखली केवल उचित रेंट अथॉरिटी के माध्यम से — बलपूर्वक नहीं",
        mr: "हकालपट्टी फक्त योग्य भाडे प्राधिकरणामार्फत — बळजबरीने नाही",
      },
    ],
  },
  {
    key: "employee",
    icon: "Briefcase",
    color: "from-blue-500 to-indigo-600",
    label: {
      en: "Employee Rights",
      hi: "कर्मचारी अधिकार",
      mr: "कर्मचारी हक्क",
    },
    items: [
      {
        en: "Gratuity after 5 years of continuous service (Payment of Gratuity Act)",
        hi: "5 साल की निरंतर सेवा के बाद ग्रेच्युटी (ग्रेच्युटी भुगतान अधिनियम)",
        mr: "५ वर्षांच्या सलग सेवेनंतर ग्रॅच्युइटी (ग्रॅच्युइटी पेमेंट कायदा)",
      },
      {
        en: "Maternity leave: 26 weeks paid (Maternity Benefit Act 1961)",
        hi: "मातृत्व अवकाश: 26 सप्ताह सवेतन (मातृत्व लाभ अधिनियम 1961)",
        mr: "मातृत्व रजा: २६ आठवडे सशुल्क (मातृत्व लाभ कायदा १९६१)",
      },
      {
        en: "Equal pay for equal work — Article 39(d)",
        hi: "समान कार्य के लिए समान वेतन — अनुच्छेद 39(d)",
        mr: "समान कामासाठी समान वेतन — कलम ३९(ड)",
      },
      {
        en: "Provident Fund — 12% employer + 12% employee mandatory",
        hi: "भविष्य निधि — 12% नियोक्ता + 12% कर्मचारी अनिवार्य",
        mr: "भविष्य निर्वाह निधी — १२% मालक + १२% कर्मचारी अनिवार्य",
      },
    ],
  },
  {
    key: "women",
    icon: "Heart",
    color: "from-rose-500 to-pink-600",
    label: { en: "Women's Rights", hi: "महिला अधिकार", mr: "महिला हक्क" },
    items: [
      {
        en: "Free legal aid under Section 12, Legal Services Authorities Act",
        hi: "धारा 12, विधिक सेवा प्राधिकरण अधिनियम के तहत मुफ्त कानूनी सहायता",
        mr: "कलम १२, कायदेशीर सेवा प्राधिकरण कायद्यांतर्गत मोफत कायदेशीर मदत",
      },
      {
        en: "POSH Act 2013 — Internal Complaints Committee mandatory >10 employees",
        hi: "पॉश अधिनियम 2013 — 10 से अधिक कर्मचारियों पर आंतरिक शिकायत समिति अनिवार्य",
        mr: "POSH कायदा २०१३ — १० पेक्षा जास्त कर्मचाऱ्यांवर अंतर्गत तक्रार समिती अनिवार्य",
      },
      {
        en: "Right against domestic violence — PWDVA 2005",
        hi: "घरेलू हिंसा के विरुद्ध अधिकार — पीडब्ल्यूडीवीए 2005",
        mr: "घरगुती हिंसाचाराविरुद्ध हक्क — PWDVA २००५",
      },
      {
        en: "Equal inheritance rights in ancestral property — Hindu Succession Amendment 2005",
        hi: "पैतृक संपत्ति में समान उत्तराधिकार अधिकार — हिंदू उत्तराधिकार संशोधन 2005",
        mr: "वडिलोपार्जित संपत्तीत समान वारसा हक्क — हिंदू वारसा सुधारणा २००५",
      },
    ],
  },
  {
    key: "cyber",
    icon: "Shield",
    color: "from-violet-500 to-purple-600",
    label: { en: "Cyber Rights", hi: "साइबर अधिकार", mr: "सायबर हक्क" },
    items: [
      {
        en: "File cybercrime FIR online at cybercrime.gov.in",
        hi: "cybercrime.gov.in पर ऑनलाइन साइबर अपराध FIR दर्ज करें",
        mr: "cybercrime.gov.in वर ऑनलाइन सायबर गुन्हा FIR दाखल करा",
      },
      {
        en: "Right to data deletion under DPDP Act 2023",
        hi: "डीपीडीपी अधिनियम 2023 के तहत डेटा हटाने का अधिकार",
        mr: "DPDP कायदा २०२३ अंतर्गत डेटा हटवण्याचा हक्क",
      },
      {
        en: "Compensation up to ₹5 crore for data breach",
        hi: "डेटा उल्लंघन के लिए ₹5 करोड़ तक मुआवजा",
        mr: "डेटा उल्लंघनासाठी ₹५ कोटीपर्यंत भरपाई",
      },
      {
        en: "Section 66E IT Act — privacy violation punishable up to 3 years",
        hi: "धारा 66E आईटी अधिनियम — गोपनीयता उल्लंघन पर 3 साल तक की सजा",
        mr: "कलम ६६E IT कायदा — गोपनीयता उल्लंघनासाठी ३ वर्षांपर्यंत शिक्षा",
      },
    ],
  },
];

export function getRights(lang: string) {
  return rightsL.map((r) => ({
    key: r.key,
    icon: r.icon,
    color: r.color,
    label: pick(r.label, lang),
    items: r.items.map((i) => pick(i, lang)),
  }));
}

/* Chat localized */
const initialChatL: LocStr = {
  en: "Namaste 👋 I'm your Jan-Nyay legal copilot. Ask me anything about the **Rent Agreement** you uploaded — clauses, risks, or your rights.",
  hi: "नमस्ते 👋 मैं आपका जन-न्याय कानूनी सहायक हूँ। आपने जो **किराया अनुबंध** अपलोड किया है, उसके बारे में कुछ भी पूछें — शर्तें, जोखिम, या आपके अधिकार।",
  mr: "नमस्कार 👋 मी तुमचा जन-न्याय कायदेशीर सहाय्यक. तुम्ही अपलोड केलेल्या **भाडे करारा**बद्दल काहीही विचारा — कलमे, जोखीम किंवा तुमचे हक्क.",
};

const suggestedL = [
  {
    en: "Is the 6-month deposit legal?",
    hi: "क्या 6 महीने की जमा राशि कानूनी है?",
    mr: "६ महिन्यांची ठेव कायदेशीर आहे का?",
  },
  {
    en: "What happens if I leave in month 4?",
    hi: "अगर मैं 4वें महीने में चला जाऊँ तो क्या होगा?",
    mr: "मी ४थ्या महिन्यात सोडल्यास काय होईल?",
  },
  {
    en: "Can the landlord enter without notice?",
    hi: "क्या मकान मालिक बिना सूचना के प्रवेश कर सकता है?",
    mr: "घरमालक सूचनेशिवाय प्रवेश करू शकतो का?",
  },
  {
    en: "Explain the late payment clause",
    hi: "विलंब भुगतान खंड समझाएँ",
    mr: "उशिरा पेमेंट कलम समजावा",
  },
];

export function getInitialChat(lang: string) {
  return [{ role: "assistant" as const, content: pick(initialChatL, lang) }];
}
export function getSuggestedQuestions(lang: string) {
  return suggestedL.map((s) => pick(s, lang));
}

export function getMockReply(q: string, lang: string): string {
  const lower = q.toLowerCase();
  const replies: Record<string, LocStr> = {
    deposit: {
      en: "The 6-month deposit (₹1,68,000) is **much higher than the Indian norm of 2–3 months**, and the Model Tenancy Act 2021 caps residential deposits at 2 months. You can negotiate this down before signing.",
      hi: "6 महीने की जमा राशि (₹1,68,000) **भारतीय मानक 2–3 महीनों से कहीं अधिक है**, और मॉडल टेनेंसी एक्ट 2021 आवासीय जमा को 2 महीने तक सीमित करता है। आप हस्ताक्षर से पहले इसे कम करवा सकते हैं।",
      mr: "६ महिन्यांची ठेव (₹१,६८,०००) **भारतीय मानक २–३ महिन्यांपेक्षा खूप जास्त आहे**, आणि मॉडेल टेनन्सी कायदा २०२१ निवासी ठेव २ महिन्यांपर्यंत मर्यादित करतो. सही करण्यापूर्वी हे कमी करण्यासाठी वाटाघाटी करा.",
    },
    early: {
      en: "Clause 4 says leaving before 6 months **forfeits your entire deposit**. However, full forfeiture is legally contestable — courts usually allow recovery of part of the deposit. Negotiate a graded penalty instead.",
      hi: "खंड 4 कहता है कि 6 महीने से पहले छोड़ने पर **पूरी जमा राशि जब्त** हो जाएगी। हालाँकि, पूर्ण ज़ब्ती कानूनी रूप से चुनौती योग्य है — अदालतें आमतौर पर जमा राशि के एक हिस्से की वसूली की अनुमति देती हैं। इसके बजाय एक श्रेणीबद्ध जुर्माने पर बातचीत करें।",
      mr: "कलम ४ नुसार ६ महिन्यांपूर्वी सोडल्यास **संपूर्ण ठेव जप्त** होते. परंतु संपूर्ण जप्ती कायदेशीरदृष्ट्या आव्हानात्मक आहे — न्यायालये सहसा ठेवीचा काही भाग परत मिळवण्याची परवानगी देतात. त्याऐवजी श्रेणीबद्ध दंडासाठी वाटाघाटी करा.",
    },
    enter: {
      en: "No. Clause 6 requires the landlord to give **24 hours' written notice** before entry. Entry without notice violates your right to peaceful enjoyment under Indian rental law.",
      hi: "नहीं। खंड 6 के अनुसार मकान मालिक को प्रवेश से पहले **24 घंटे की लिखित सूचना** देनी चाहिए। बिना सूचना के प्रवेश भारतीय किराया कानून के तहत आपके शांतिपूर्ण उपयोग के अधिकार का उल्लंघन है।",
      mr: "नाही. कलम ६ नुसार घरमालकाने प्रवेशापूर्वी **२४ तासांची लेखी सूचना** द्यावी. सूचनेशिवाय प्रवेश भारतीय भाडे कायद्यांतर्गत तुमच्या शांततापूर्ण उपभोगाच्या हक्काचे उल्लंघन आहे.",
    },
    late: {
      en: "Late rent attracts **2% per day** (Clause 7) — about 730% annually! This rate is unenforceable under Indian law. You can negotiate it down to 1–2% per month.",
      hi: "देर से किराया देने पर **हर दिन 2% ब्याज** लगेगा (खंड 7) — यानी साल भर में ~730%! यह दर भारतीय कानून के तहत लागू नहीं की जा सकती। आप इसे 1–2% प्रति माह तक कम करवा सकते हैं।",
      mr: "उशिरा भाड्यावर **दररोज २% व्याज** (कलम ७) — म्हणजे वर्षाला ~७३०%! हा दर भारतीय कायद्यांतर्गत लागू करता येत नाही. तुम्ही तो दरमहा १–२% पर्यंत कमी करू शकता.",
    },
    default: {
      en: "Good question. Based on this rent agreement, I'd suggest reviewing the **Risk Radar** tab — it highlights 3 high-risk clauses that may need negotiation before signing.",
      hi: "अच्छा प्रश्न। इस किराया अनुबंध के आधार पर, मैं **जोखिम रडार** टैब देखने का सुझाव दूँगा — इसमें 3 उच्च-जोखिम वाली शर्तें हैं जिन पर हस्ताक्षर से पहले बातचीत आवश्यक है।",
      mr: "चांगला प्रश्न. या भाडे करारानुसार, **जोखीम रडार** टॅब पाहण्याचा सल्ला देतो — त्यात ३ उच्च-जोखीम कलमे आहेत ज्यांवर सही करण्यापूर्वी वाटाघाटी आवश्यक आहे.",
    },
  };
  if (
    lower.includes("deposit") ||
    lower.includes("जमा") ||
    lower.includes("ठेव")
  )
    return pick(replies.deposit, lang);
  if (
    lower.includes("month 4") ||
    lower.includes("early") ||
    lower.includes("leave") ||
    lower.includes("4थ") ||
    lower.includes("4व") ||
    lower.includes("सोड")
  )
    return pick(replies.early, lang);
  if (
    lower.includes("enter") ||
    lower.includes("without notice") ||
    lower.includes("प्रवेश")
  )
    return pick(replies.enter, lang);
  if (
    lower.includes("late") ||
    lower.includes("hindi") ||
    lower.includes("विलंब") ||
    lower.includes("उशिरा")
  )
    return pick(replies.late, lang);
  return pick(replies.default, lang);
}

/* UI strings used inside dashboard */
export const uiStrings: Record<string, LocStr> = {
  "ov.summaryTitle": {
    en: "Plain-Language Summary",
    hi: "सरल भाषा सारांश",
    mr: "सोप्या भाषेतील सारांश",
  },
  "ov.aiGenerated": {
    en: "AI Generated",
    hi: "एआई द्वारा निर्मित",
    mr: "एआय निर्मित",
  },
  "ov.party": { en: "Party", hi: "पक्ष", mr: "पक्ष" },
  "ov.keyClauses": { en: "Key Clauses", hi: "मुख्य शर्तें", mr: "मुख्य कलमे" },
  "ov.found": { en: "found", hi: "मिलीं", mr: "सापडली" },
  "ov.fairnessScore": {
    en: "Fairness Score",
    hi: "निष्पक्षता स्कोर",
    mr: "निष्पक्षता गुण",
  },
  "ov.fairnessNote": {
    en: "This document leans moderately in favour of the landlord.",
    hi: "यह दस्तावेज़ मध्यम रूप से मकान मालिक के पक्ष में झुका है।",
    mr: "हा दस्तऐवज मध्यम प्रमाणात घरमालकाच्या बाजूने झुकलेला आहे.",
  },
  "ov.fairnessBreakdown": {
    en: "Fairness Breakdown",
    hi: "निष्पक्षता विश्लेषण",
    mr: "निष्पक्षता विश्लेषण",
  },
  "risk.high": {
    en: "High Risk Clauses",
    hi: "उच्च जोखिम शर्तें",
    mr: "उच्च जोखीम कलमे",
  },
  "risk.medium": {
    en: "Medium Risk Clauses",
    hi: "मध्यम जोखिम शर्तें",
    mr: "मध्यम जोखीम कलमे",
  },
  "risk.low": {
    en: "Low Risk Clauses",
    hi: "कम जोखिम शर्तें",
    mr: "कमी जोखीम कलमे",
  },
  "risk.title": { en: "Risk Radar", hi: "जोखिम रडार", mr: "जोखीम रडार" },
  "risk.sorted": {
    en: "Severity sorted",
    hi: "गंभीरता अनुसार",
    mr: "गंभीरतेनुसार",
  },
  "risk.why": {
    en: "Why it matters:",
    hi: "यह क्यों मायने रखता है:",
    mr: "हे का महत्त्वाचे:",
  },
  "risk.highTag": { en: "High Risk", hi: "उच्च जोखिम", mr: "उच्च जोखीम" },
  "risk.mediumTag": { en: "Medium", hi: "मध्यम", mr: "मध्यम" },
  "risk.lowTag": { en: "Low Risk", hi: "कम जोखिम", mr: "कमी जोखीम" },
  "sim.lateTitle": {
    en: "Late Rent Payment",
    hi: "देर से किराया भुगतान",
    mr: "उशिरा भाडे पेमेंट",
  },
  "sim.scenarioA": { en: "Scenario A", hi: "परिदृश्य A", mr: "परिस्थिती A" },
  "sim.scenarioB": { en: "Scenario B", hi: "परिदृश्य B", mr: "परिस्थिती B" },
  "sim.lateDesc": {
    en: "Drag to see how penalty stacks up under Clause 7 (2% per day after the 7th).",
    hi: "देखें कि खंड 7 के तहत जुर्माना कैसे बढ़ता है (7 तारीख के बाद प्रतिदिन 2%)।",
    mr: "कलम ७ अंतर्गत दंड कसा वाढतो ते पहा (७ तारखेनंतर दररोज २%).",
  },
  "sim.daysLate": { en: "Days late", hi: "देर के दिन", mr: "उशिराचे दिवस" },
  "sim.estFee": {
    en: "Estimated late fee",
    hi: "अनुमानित विलंब शुल्क",
    mr: "अंदाजित विलंब शुल्क",
  },
  "sim.ofRent": {
    en: "of one month's rent",
    hi: "एक महीने के किराये का",
    mr: "एका महिन्याच्या भाड्याच्या",
  },
  "sim.lateWarn": {
    en: "⚠ Note: 2%/day ≈ 730% annual interest — likely unenforceable under Indian law.",
    hi: "⚠ ध्यान दें: 2%/दिन ≈ 730% वार्षिक ब्याज — भारतीय कानून के तहत संभवतः लागू नहीं।",
    mr: "⚠ टीप: २%/दिन ≈ ७३०% वार्षिक व्याज — भारतीय कायद्यांतर्गत बहुधा लागू नाही.",
  },
  "sim.earlyTitle": {
    en: "Early Exit",
    hi: "जल्दी निकलना",
    mr: "लवकर बाहेर पडणे",
  },
  "sim.earlyDesc": {
    en: "See what Clause 4 (6-month lock-in) means if you have to leave early.",
    hi: "देखें कि अगर आपको जल्दी जाना पड़े तो खंड 4 (6 महीने का लॉक-इन) का क्या मतलब है।",
    mr: "तुम्हाला लवकर जावे लागल्यास कलम ४ (६ महिन्यांचा लॉक-इन) चा अर्थ काय ते पहा.",
  },
  "sim.monthsStayed": {
    en: "Months stayed",
    hi: "रहे महीने",
    mr: "राहिलेले महिने",
  },
  "sim.atRisk": {
    en: "Deposit at risk",
    hi: "जोखिम में जमा",
    mr: "धोक्यातील ठेव",
  },
  "sim.noticeReq": {
    en: "Notice required",
    hi: "आवश्यक नोटिस",
    mr: "आवश्यक नोटीस",
  },
  "sim.months2": { en: "2 months", hi: "2 महीने", mr: "२ महिने" },
  "sim.suggests": {
    en: "💡 Copilot suggests",
    hi: "💡 सहायक का सुझाव",
    mr: "💡 सहाय्यक सुचवतो",
  },
  "sim.tipEarly": {
    en: "Forfeiture of the entire deposit is legally challengeable. Negotiate a graded forfeiture (e.g. 1 month's rent) before signing.",
    hi: "पूरी जमा राशि की ज़ब्ती कानूनी रूप से चुनौती योग्य है। हस्ताक्षर से पहले श्रेणीबद्ध ज़ब्ती (जैसे 1 माह का किराया) पर बातचीत करें।",
    mr: "संपूर्ण ठेवीची जप्ती कायदेशीर आव्हानात्मक आहे. सहीपूर्वी श्रेणीबद्ध जप्तीसाठी (उदा. १ महिन्याचे भाडे) वाटाघाटी करा.",
  },
  "sim.tipPast": {
    en: "You're past the lock-in. Serving 2 months' notice in writing protects your full deposit.",
    hi: "आप लॉक-इन पार कर चुके हैं। 2 महीने की लिखित सूचना देना आपकी पूरी जमा राशि की रक्षा करता है।",
    mr: "तुम्ही लॉक-इन पार केले आहे. २ महिन्यांची लेखी नोटीस तुमची संपूर्ण ठेव सुरक्षित ठेवते.",
  },
  "chat.title": {
    en: "Legal Copilot",
    hi: "कानूनी सहायक",
    mr: "कायदेशीर सहाय्यक",
  },
  "chat.docAware": {
    en: "Document-aware",
    hi: "दस्तावेज़-जागरूक",
    mr: "दस्तऐवज-जाणकार",
  },
  "chat.placeholder": {
    en: "Ask about a clause, risk, or your rights…",
    hi: "किसी शर्त, जोखिम या अधिकार के बारे में पूछें…",
    mr: "कलम, जोखीम किंवा हक्काबद्दल विचारा…",
  },
  "chat.suggested": { en: "Suggested", hi: "सुझाव", mr: "सुचवलेले" },
  "rt.categories": { en: "Categories", hi: "श्रेणियाँ", mr: "श्रेणी" },
  "rt.kicker": {
    en: "Know Your Rights",
    hi: "अपने अधिकार जानें",
    mr: "तुमचे हक्क जाणून घ्या",
  },
  "rt.needAid": {
    en: "Need a free legal aid lawyer?",
    hi: "क्या आपको मुफ्त कानूनी सहायता वकील चाहिए?",
    mr: "मोफत कायदेशीर मदत वकील हवा आहे का?",
  },
  "rt.aidSub": {
    en: "Every Indian citizen is entitled to free legal aid under Article 39A.",
    hi: "प्रत्येक भारतीय नागरिक अनुच्छेद 39A के तहत मुफ्त कानूनी सहायता का हकदार है।",
    mr: "प्रत्येक भारतीय नागरिक अनुच्छेद ३९अ अंतर्गत मोफत कायदेशीर मदतीस पात्र आहे.",
  },
  "rt.findHelp": { en: "Find Help", hi: "सहायता पाएँ", mr: "मदत मिळवा" },
  "gauge.fair": { en: "Fair", hi: "निष्पक्ष", mr: "निष्पक्ष" },
  "gauge.moderate": { en: "Moderate", hi: "मध्यम", mr: "मध्यम" },
  "gauge.unfair": { en: "Unfair", hi: "अनुचित", mr: "अन्यायकारक" },
};

export function ts(key: string, lang: string): string {
  const e = uiStrings[key];
  if (!e) return key;
  return e[lang] || e.en || key;
}
