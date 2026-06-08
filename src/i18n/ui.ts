/**
 * i18n core. English is the default (unprefixed) locale; every other locale lives
 * under /<lang>/… . Strings are flat dotted keys; templates use {placeholders}
 * filled by interpolate(). Missing keys fall back to English.
 *
 * Adding a language = add it to LOCALES + LOCALE_NAMES and add a block to `ui`
 * (and names in ./foods.ts). The routing and hreflang wiring picks it up for free.
 */

export const LOCALES = ["en", "es", "hi"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  hi: "हिन्दी",
};

/** og:locale codes */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  hi: "hi_IN",
};

type Dict = Record<string, string>;

export const ui = {
  en: {
    "nav.popular": "Popular swaps",
    "nav.how": "How it works",
    "nav.theme": "Toggle theme",
    "nav.language": "Language",

    "hero.badge": "Zero login · Instant · Free",
    "hero.title1": "Ran out of an ingredient?",
    "hero.title2": "Swap it without breaking macros.",
    "hero.sub":
      "Enter what you have, pick a substitute, and get the exact weight that matches your protein or calories — recalculated as you type.",

    "popular.eyebrow": "Common swaps",
    "popular.title": "Pre-built for the swaps lifters actually search.",
    "popular.sub":
      "Each one is a dedicated page with the calculator pre-loaded — open it, tweak the weight, done.",

    "how.eyebrow": "The math",
    "how.title": "One ratio. No spreadsheet.",
    "how.sub":
      "We hold one metric constant and solve for the weight of the substitute. That's the whole tool.",
    "how.matchProteinDesc": "Keep grams of protein identical, see the calorie delta.",
    "how.matchCaloriesDesc": "Keep calories identical, see how the macros shift.",
    "step1.t": "Pick what you have",
    "step1.d": "Choose your source ingredient and its weight in grams.",
    "step2.t": "Lock protein or calories",
    "step2.d": "Decide which number must stay the same.",
    "step3.t": "Get the exact weight",
    "step3.d": "We solve for the substitute — recalculated live.",

    "calc.matchProtein": "Match protein",
    "calc.matchCalories": "Match calories",
    "calc.ihave": "I have",
    "calc.of": "of",
    "calc.sameProtein": "same protein",
    "calc.sameCalories": "same calories",
    "calc.from": "from",
    "calc.dragHint": "Drag to adjust portion",
    "calc.youNeed": "You need",
    "calc.ofResult": "of",
    "calc.servingsTpl": "≈ {n}× a 100 g serving",
    "calc.perPortion": "Per portion",
    "calc.calories": "Calories",
    "calc.protein": "Protein",
    "calc.carbs": "Carbs",
    "calc.fat": "Fat",
    "calc.search": "Search foods…",
    "calc.noResults": "No matches",
    "calc.flipAria": "Swap the two foods",
    "calc.weightAria": "Weight in grams",
    "calc.sourceAria": "Source food",
    "calc.targetAria": "Target food",
    "calc.modeAria": "Match by",
    "calc.insightProteinMore": "Same protein ({kept}), but {food} adds {delta} kcal.",
    "calc.insightProteinLess": "Same protein ({kept}), and {food} saves {delta} kcal.",
    "calc.insightCaloriesMore": "Same calories ({kept}), and {food} gains {delta}g protein.",
    "calc.insightCaloriesLess": "Same calories ({kept}), but {food} loses {delta}g protein.",

    "footer.tagline":
      "The fastest macro & calorie swap calculator. Out of an ingredient? Find the exact weight of a substitute that matches your protein or calories — no login, no fluff.",
    "footer.popular": "Popular Swaps",
    "footer.tool": "Tool",
    "footer.swapCalc": "Swap calculator",
    "footer.allSwaps": "All swaps",
    "footer.disclaimer":
      "Macros are per 100 g and approximate. For information only — not medical or dietary advice.",

    "swap.home": "Home",
    "swap.h1Tpl": "{a} to {b} swap",
    "swap.leadTpl":
      "Out of {a}? {wa}g ({portion}) is matched by about {wbP}g of {b} for the same protein, or {wbC}g for the same calories. Adjust the weight below to fit your portion.",
    "swap.per100Tpl": "{a} vs {b}, per 100 g",
    "swap.per100Head": "Per 100 g",
    "swap.tableNote":
      "Values per 100 g, commonly-logged state. Your packaging may vary slightly.",
    "swap.faqTitleTpl": "{a} → {b} FAQ",
    "swap.related": "Related swaps",
    "swap.titleTpl": "{a} to {b} Swap — Match Protein or Calories | Nutri Swapper",
    "swap.descTpl":
      "How much {bl} replaces {al}? {wa}g of {al} ≈ {wbP}g {bl} for the same protein. Instant calculator, no login.",
    "faq.q1": "How much {bl} do I need to replace {wa}g of {al}?",
    "faq.a1":
      "To match the protein, you need about {wbP}g of {bl}. To match the calories instead, use about {wbC}g.",
    "faq.q2": "Does swapping {al} for {bl} change my calories?",
    "faq.a2":
      "Matching protein, {wa}g of {al} ({kcalA} kcal) becomes {wbP}g of {bl} at {kcalBP} kcal — a difference of {dk} kcal.",
    "faq.q3": "What's the protein difference at the same calories?",
    "faq.a3":
      "Matched on calories, {wbC}g of {bl} gives {pBC}g protein versus {pA}g from the {al}.",

    "home.title": "Nutri Swapper — Instant Macro & Calorie Ingredient Swap Calculator",
    "home.desc":
      "Out of an ingredient? Instantly find the exact weight of a substitute that matches your protein or calories. Zero login, zero fluff — just swap and cook.",
  } satisfies Dict,

  es: {
    "nav.popular": "Intercambios populares",
    "nav.how": "Cómo funciona",
    "nav.theme": "Cambiar tema",
    "nav.language": "Idioma",

    "hero.badge": "Sin registro · Instantáneo · Gratis",
    "hero.title1": "¿Te quedaste sin un ingrediente?",
    "hero.title2": "Cámbialo sin romper tus macros.",
    "hero.sub":
      "Indica lo que tienes, elige un sustituto y obtén el peso exacto que iguala tu proteína o tus calorías — recalculado mientras escribes.",

    "popular.eyebrow": "Intercambios comunes",
    "popular.title": "Listos para los intercambios que de verdad se buscan.",
    "popular.sub":
      "Cada uno es una página dedicada con la calculadora precargada — ábrela, ajusta el peso y listo.",

    "how.eyebrow": "Las matemáticas",
    "how.title": "Una proporción. Sin hojas de cálculo.",
    "how.sub":
      "Mantenemos una métrica constante y calculamos el peso del sustituto. Esa es toda la herramienta.",
    "how.matchProteinDesc":
      "Mantén los gramos de proteína idénticos y ve la diferencia de calorías.",
    "how.matchCaloriesDesc":
      "Mantén las calorías idénticas y ve cómo cambian los macros.",
    "step1.t": "Elige lo que tienes",
    "step1.d": "Elige tu ingrediente de origen y su peso en gramos.",
    "step2.t": "Fija proteína o calorías",
    "step2.d": "Decide qué número debe mantenerse igual.",
    "step3.t": "Obtén el peso exacto",
    "step3.d": "Calculamos el sustituto — en tiempo real.",

    "calc.matchProtein": "Igualar proteína",
    "calc.matchCalories": "Igualar calorías",
    "calc.ihave": "Tengo",
    "calc.of": "de",
    "calc.sameProtein": "misma proteína",
    "calc.sameCalories": "mismas calorías",
    "calc.from": "de",
    "calc.dragHint": "Arrastra para ajustar la porción",
    "calc.youNeed": "Necesitas",
    "calc.ofResult": "de",
    "calc.servingsTpl": "≈ {n}× una porción de 100 g",
    "calc.perPortion": "Por porción",
    "calc.calories": "Calorías",
    "calc.protein": "Proteína",
    "calc.carbs": "Carbohidratos",
    "calc.fat": "Grasa",
    "calc.search": "Buscar alimentos…",
    "calc.noResults": "Sin resultados",
    "calc.flipAria": "Intercambiar los dos alimentos",
    "calc.weightAria": "Peso en gramos",
    "calc.sourceAria": "Alimento de origen",
    "calc.targetAria": "Alimento de destino",
    "calc.modeAria": "Igualar por",
    "calc.insightProteinMore":
      "Misma proteína ({kept}), pero {food} suma {delta} kcal.",
    "calc.insightProteinLess":
      "Misma proteína ({kept}), y {food} ahorra {delta} kcal.",
    "calc.insightCaloriesMore":
      "Mismas calorías ({kept}), y {food} gana {delta}g de proteína.",
    "calc.insightCaloriesLess":
      "Mismas calorías ({kept}), pero {food} pierde {delta}g de proteína.",

    "footer.tagline":
      "La calculadora de intercambios de macros y calorías más rápida. ¿Sin un ingrediente? Encuentra el peso exacto de un sustituto que iguale tu proteína o tus calorías — sin registro, sin relleno.",
    "footer.popular": "Intercambios populares",
    "footer.tool": "Herramienta",
    "footer.swapCalc": "Calculadora de intercambios",
    "footer.allSwaps": "Todos los intercambios",
    "footer.disclaimer":
      "Los macros son por 100 g y aproximados. Solo informativo — no es consejo médico ni dietético.",

    "swap.home": "Inicio",
    "swap.h1Tpl": "Intercambio de {a} por {b}",
    "swap.leadTpl":
      "¿Sin {a}? {wa}g ({portion}) equivalen a unos {wbP}g de {b} para la misma proteína, o {wbC}g para las mismas calorías. Ajusta el peso abajo según tu porción.",
    "swap.per100Tpl": "{a} vs {b}, por 100 g",
    "swap.per100Head": "Por 100 g",
    "swap.tableNote":
      "Valores por 100 g, en su estado habitual. Tu envase puede variar ligeramente.",
    "swap.faqTitleTpl": "Preguntas frecuentes: {a} → {b}",
    "swap.related": "Intercambios relacionados",
    "swap.titleTpl":
      "Intercambio de {a} por {b} — Igualar proteína o calorías | Nutri Swapper",
    "swap.descTpl":
      "¿Cuánto {bl} reemplaza a {al}? {wa}g de {al} ≈ {wbP}g de {bl} para la misma proteína. Calculadora instantánea, sin registro.",
    "faq.q1": "¿Cuánto {bl} necesito para reemplazar {wa}g de {al}?",
    "faq.a1":
      "Para igualar la proteína, necesitas unos {wbP}g de {bl}. Para igualar las calorías, usa unos {wbC}g.",
    "faq.q2": "¿Cambiar {al} por {bl} altera mis calorías?",
    "faq.a2":
      "Igualando proteína, {wa}g de {al} ({kcalA} kcal) pasan a {wbP}g de {bl} con {kcalBP} kcal — una diferencia de {dk} kcal.",
    "faq.q3": "¿Cuál es la diferencia de proteína con las mismas calorías?",
    "faq.a3":
      "Igualado en calorías, {wbC}g de {bl} aportan {pBC}g de proteína frente a {pA}g de {al}.",

    "home.title":
      "Nutri Swapper — Calculadora instantánea de intercambio de macros y calorías",
    "home.desc":
      "¿Sin un ingrediente? Encuentra al instante el peso exacto de un sustituto que iguale tu proteína o tus calorías. Sin registro, sin relleno — solo cambia y cocina.",
  } satisfies Dict,

  hi: {
    "nav.popular": "लोकप्रिय स्वैप",
    "nav.how": "यह कैसे काम करता है",
    "nav.theme": "थीम बदलें",
    "nav.language": "भाषा",

    "hero.badge": "लॉगिन नहीं · तुरंत · मुफ़्त",
    "hero.title1": "कोई सामग्री खत्म हो गई?",
    "hero.title2": "मैक्रोज़ बिगाड़े बिना उसे बदलें।",
    "hero.sub":
      "आपके पास जो है वह डालें, एक विकल्प चुनें, और वह सटीक वज़न पाएँ जो आपके प्रोटीन या कैलोरी से मेल खाता है — टाइप करते ही दोबारा गणना।",

    "popular.eyebrow": "सामान्य स्वैप",
    "popular.title": "उन्हीं स्वैप के लिए तैयार जो लोग सच में खोजते हैं।",
    "popular.sub":
      "हर एक एक अलग पेज है जिसमें कैलकुलेटर पहले से भरा है — खोलें, वज़न बदलें, हो गया।",

    "how.eyebrow": "गणित",
    "how.title": "एक अनुपात। कोई स्प्रेडशीट नहीं।",
    "how.sub":
      "हम एक मीट्रिक स्थिर रखते हैं और विकल्प का वज़न निकालते हैं। बस इतना ही टूल है।",
    "how.matchProteinDesc":
      "प्रोटीन के ग्राम समान रखें, कैलोरी का अंतर देखें।",
    "how.matchCaloriesDesc":
      "कैलोरी समान रखें, देखें मैक्रोज़ कैसे बदलते हैं।",
    "step1.t": "जो आपके पास है चुनें",
    "step1.d": "अपनी स्रोत सामग्री और उसका वज़न ग्राम में चुनें।",
    "step2.t": "प्रोटीन या कैलोरी तय करें",
    "step2.d": "तय करें कौन-सा अंक समान रहना चाहिए।",
    "step3.t": "सटीक वज़न पाएँ",
    "step3.d": "हम विकल्प का हिसाब लगाते हैं — लाइव।",

    "calc.matchProtein": "प्रोटीन मिलाएँ",
    "calc.matchCalories": "कैलोरी मिलाएँ",
    "calc.ihave": "मेरे पास है",
    "calc.of": "",
    "calc.sameProtein": "उतना ही प्रोटीन",
    "calc.sameCalories": "उतनी ही कैलोरी",
    "calc.from": "से",
    "calc.dragHint": "हिस्सा समायोजित करने के लिए खींचें",
    "calc.youNeed": "आपको चाहिए",
    "calc.ofResult": "",
    "calc.servingsTpl": "≈ {n}× 100 g हिस्सा",
    "calc.perPortion": "प्रति हिस्सा",
    "calc.calories": "कैलोरी",
    "calc.protein": "प्रोटीन",
    "calc.carbs": "कार्ब्स",
    "calc.fat": "वसा",
    "calc.search": "खाद्य खोजें…",
    "calc.noResults": "कोई मेल नहीं",
    "calc.flipAria": "दोनों खाद्य पदार्थ बदलें",
    "calc.weightAria": "वज़न ग्राम में",
    "calc.sourceAria": "स्रोत खाद्य",
    "calc.targetAria": "लक्ष्य खाद्य",
    "calc.modeAria": "इससे मिलाएँ",
    "calc.insightProteinMore":
      "उतना ही प्रोटीन ({kept}), पर {food} में {delta} kcal ज़्यादा।",
    "calc.insightProteinLess":
      "उतना ही प्रोटीन ({kept}), और {food} में {delta} kcal कम।",
    "calc.insightCaloriesMore":
      "उतनी ही कैलोरी ({kept}), और {food} में {delta}g प्रोटीन ज़्यादा।",
    "calc.insightCaloriesLess":
      "उतनी ही कैलोरी ({kept}), पर {food} में {delta}g प्रोटीन कम।",

    "footer.tagline":
      "सबसे तेज़ मैक्रो और कैलोरी स्वैप कैलकुलेटर। कोई सामग्री खत्म? ऐसे विकल्प का सटीक वज़न पाएँ जो आपके प्रोटीन या कैलोरी से मेल खाए — कोई लॉगिन नहीं, कोई झंझट नहीं।",
    "footer.popular": "लोकप्रिय स्वैप",
    "footer.tool": "टूल",
    "footer.swapCalc": "स्वैप कैलकुलेटर",
    "footer.allSwaps": "सभी स्वैप",
    "footer.disclaimer":
      "मैक्रोज़ प्रति 100 g और अनुमानित हैं। केवल जानकारी के लिए — चिकित्सकीय या आहार संबंधी सलाह नहीं।",

    "swap.home": "होम",
    "swap.h1Tpl": "{a} से {b} स्वैप",
    "swap.leadTpl":
      "{a} खत्म? {wa}g ({portion}) के बराबर समान प्रोटीन के लिए लगभग {wbP}g {b}, या समान कैलोरी के लिए {wbC}g है। नीचे वज़न अपने हिस्से के अनुसार समायोजित करें।",
    "swap.per100Tpl": "{a} बनाम {b}, प्रति 100 g",
    "swap.per100Head": "प्रति 100 g",
    "swap.tableNote":
      "मान प्रति 100 g, सामान्य रूप में दर्ज स्थिति। आपकी पैकेजिंग थोड़ी भिन्न हो सकती है।",
    "swap.faqTitleTpl": "{a} → {b} सामान्य प्रश्न",
    "swap.related": "संबंधित स्वैप",
    "swap.titleTpl": "{a} से {b} स्वैप — प्रोटीन या कैलोरी मिलाएँ | Nutri Swapper",
    "swap.descTpl":
      "{al} की जगह कितना {bl}? {wa}g {al} ≈ {wbP}g {bl} समान प्रोटीन के लिए। तुरंत कैलकुलेटर, कोई लॉगिन नहीं।",
    "faq.q1": "{wa}g {al} की जगह कितना {bl} चाहिए?",
    "faq.a1":
      "प्रोटीन मिलाने के लिए लगभग {wbP}g {bl} चाहिए। कैलोरी मिलाने के लिए लगभग {wbC}g लें।",
    "faq.q2": "{al} की जगह {bl} लेने से मेरी कैलोरी बदलती है?",
    "faq.a2":
      "प्रोटीन मिलाने पर, {wa}g {al} ({kcalA} kcal) बन जाता है {wbP}g {bl} जो {kcalBP} kcal है — {dk} kcal का अंतर।",
    "faq.q3": "समान कैलोरी पर प्रोटीन का अंतर क्या है?",
    "faq.a3":
      "कैलोरी मिलाने पर, {wbC}g {bl} देता है {pBC}g प्रोटीन बनाम {al} से {pA}g।",

    "home.title": "Nutri Swapper — तुरंत मैक्रो और कैलोरी सामग्री स्वैप कैलकुलेटर",
    "home.desc":
      "कोई सामग्री खत्म? तुरंत ऐसे विकल्प का सटीक वज़न पाएँ जो आपके प्रोटीन या कैलोरी से मेल खाए। कोई लॉगिन नहीं, कोई झंझट नहीं — बस बदलें और पकाएँ।",
  } satisfies Dict,
} satisfies Record<Locale, Dict>;

export type UIKey = keyof (typeof ui)["en"];

/** Returns a translator bound to a locale, falling back to English per-key. */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    const raw = ui[lang][key] ?? ui.en[key];
    return vars ? interpolate(raw, vars) : raw;
  };
}

/** Replace {token} placeholders. */
export function interpolate(
  str: string,
  vars: Record<string, string | number>,
): string {
  return str.replace(/\{(\w+)\}/g, (_, k) =>
    k in vars ? String(vars[k]) : `{${k}}`,
  );
}

/** Map an English canonical path ("/", "/swap/x-to-y") to its localized URL. */
export function localizePath(path: string, lang: Locale): string {
  if (lang === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** hreflang alternates for a given English canonical path. */
export function alternatesFor(path: string, site: string) {
  const alts = LOCALES.map((l) => ({
    lang: l,
    href: site + localizePath(path, l),
  }));
  alts.push({ lang: "x-default" as Locale, href: site + path });
  return alts;
}
