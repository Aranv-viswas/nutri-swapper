/**
 * Nutri Swapper food database.
 *
 * All macros are per 100 g of the food in its commonly-logged state (dry for
 * legumes/grains/protein powders, raw for meats, as-eaten for dairy/nuts).
 * Sources: USDA FoodData Central + common packaged-label values, rounded to
 * the precision a kitchen actually cares about.
 */

export interface Food {
  /** URL slug, e.g. "soya-chunks" */
  slug: string;
  /** Display name, e.g. "Soya Chunks" */
  name: string;
  /** Short emoji used as a lightweight, no-request glyph */
  glyph: string;
  /** Per-100g macros */
  kcal: number;
  protein: number; // g
  carbs: number; // g
  fat: number; // g
  /** A relatable real-world portion, in grams */
  portion: number;
  /** Human label for that portion, e.g. "1 large egg" */
  portionLabel: string;
}

export const FOODS: Food[] = [
  { slug: "soya-chunks", name: "Soya Chunks", glyph: "🟤", kcal: 345, protein: 52, carbs: 33, fat: 0.5, portion: 25, portionLabel: "1 handful (dry)" },
  { slug: "eggs", name: "Eggs", glyph: "🥚", kcal: 155, protein: 13, carbs: 1.1, fat: 11, portion: 50, portionLabel: "1 large egg" },
  { slug: "chicken-breast", name: "Chicken Breast", glyph: "🍗", kcal: 165, protein: 31, carbs: 0, fat: 3.6, portion: 100, portionLabel: "1 small fillet" },
  { slug: "paneer", name: "Paneer", glyph: "🧀", kcal: 265, protein: 18, carbs: 1.2, fat: 21, portion: 50, portionLabel: "1 cube block" },
  { slug: "tofu", name: "Tofu", glyph: "⬜", kcal: 144, protein: 17, carbs: 2.8, fat: 9, portion: 100, portionLabel: "1 slab" },
  { slug: "almonds", name: "Almonds", glyph: "🌰", kcal: 579, protein: 21, carbs: 22, fat: 50, portion: 28, portionLabel: "23 almonds (1 oz)" },
  { slug: "peanuts", name: "Peanuts", glyph: "🥜", kcal: 567, protein: 26, carbs: 16, fat: 49, portion: 28, portionLabel: "1 small handful" },
  { slug: "roasted-chana", name: "Roasted Chana", glyph: "🟡", kcal: 364, protein: 19, carbs: 61, fat: 6, portion: 30, portionLabel: "1 handful" },
  { slug: "whey-protein", name: "Whey Protein", glyph: "🥤", kcal: 400, protein: 80, carbs: 8, fat: 6, portion: 30, portionLabel: "1 scoop" },
  { slug: "greek-yogurt", name: "Greek Yogurt", glyph: "🍶", kcal: 59, protein: 10, carbs: 3.6, fat: 0.4, portion: 170, portionLabel: "1 tub" },
  { slug: "moong-dal", name: "Moong Dal", glyph: "🟢", kcal: 347, protein: 24, carbs: 59, fat: 1.2, portion: 40, portionLabel: "1 serving (dry)" },
  { slug: "milk", name: "Milk", glyph: "🥛", kcal: 61, protein: 3.2, carbs: 4.8, fat: 3.3, portion: 240, portionLabel: "1 glass" },
  { slug: "oats", name: "Oats", glyph: "🌾", kcal: 389, protein: 17, carbs: 66, fat: 7, portion: 40, portionLabel: "1/2 cup (dry)" },
  { slug: "white-rice", name: "White Rice", glyph: "🍚", kcal: 365, protein: 7, carbs: 80, fat: 0.7, portion: 50, portionLabel: "1/4 cup (dry)" },
  { slug: "peanut-butter", name: "Peanut Butter", glyph: "🫙", kcal: 588, protein: 25, carbs: 20, fat: 50, portion: 32, portionLabel: "2 tbsp" },
  { slug: "cottage-cheese", name: "Cottage Cheese", glyph: "🥣", kcal: 98, protein: 11, carbs: 3.4, fat: 4.3, portion: 100, portionLabel: "1/2 cup" },
  { slug: "lentils", name: "Lentils", glyph: "🔴", kcal: 352, protein: 25, carbs: 63, fat: 1.1, portion: 40, portionLabel: "1 serving (dry)" },
  { slug: "chickpeas", name: "Chickpeas", glyph: "🟠", kcal: 364, protein: 19, carbs: 61, fat: 6, portion: 40, portionLabel: "1 serving (dry)" },

  // ── Animal protein ──────────────────────────────────────
  { slug: "canned-tuna", name: "Canned Tuna", glyph: "🐟", kcal: 116, protein: 26, carbs: 0, fat: 0.8, portion: 100, portionLabel: "1 can (drained)" },
  { slug: "salmon", name: "Salmon", glyph: "🍣", kcal: 208, protein: 20, carbs: 0, fat: 13, portion: 100, portionLabel: "1 fillet" },
  { slug: "shrimp", name: "Shrimp", glyph: "🦐", kcal: 99, protein: 24, carbs: 0.2, fat: 0.3, portion: 100, portionLabel: "≈10 large" },
  { slug: "egg-whites", name: "Egg Whites", glyph: "🍳", kcal: 52, protein: 11, carbs: 0.7, fat: 0.2, portion: 33, portionLabel: "1 egg white" },
  { slug: "lean-beef", name: "Lean Beef", glyph: "🥩", kcal: 176, protein: 20, carbs: 0, fat: 10, portion: 100, portionLabel: "1 small patty" },
  { slug: "turkey-breast", name: "Turkey Breast", glyph: "🦃", kcal: 111, protein: 24, carbs: 0, fat: 1.7, portion: 100, portionLabel: "1 small fillet" },

  // ── Plant protein ───────────────────────────────────────
  { slug: "tempeh", name: "Tempeh", glyph: "🟫", kcal: 192, protein: 20, carbs: 8, fat: 11, portion: 100, portionLabel: "1 slab" },
  { slug: "seitan", name: "Seitan", glyph: "🫓", kcal: 150, protein: 25, carbs: 6, fat: 2, portion: 100, portionLabel: "1 serving" },
  { slug: "edamame", name: "Edamame", glyph: "🫛", kcal: 122, protein: 11, carbs: 9, fat: 5, portion: 100, portionLabel: "1/2 cup shelled" },
  { slug: "rajma", name: "Kidney Beans", glyph: "🫘", kcal: 333, protein: 24, carbs: 60, fat: 0.8, portion: 40, portionLabel: "1 serving (dry)" },
  { slug: "black-beans", name: "Black Beans", glyph: "⚫", kcal: 341, protein: 21, carbs: 62, fat: 1.4, portion: 40, portionLabel: "1 serving (dry)" },

  // ── Grains & carbs ──────────────────────────────────────
  { slug: "quinoa", name: "Quinoa", glyph: "⚪", kcal: 368, protein: 14, carbs: 64, fat: 6, portion: 45, portionLabel: "1/4 cup (dry)" },
  { slug: "brown-rice", name: "Brown Rice", glyph: "🍙", kcal: 370, protein: 8, carbs: 77, fat: 2.9, portion: 50, portionLabel: "1/4 cup (dry)" },
  { slug: "banana", name: "Banana", glyph: "🍌", kcal: 89, protein: 1.1, carbs: 23, fat: 0.3, portion: 118, portionLabel: "1 medium" },
  { slug: "sweet-potato", name: "Sweet Potato", glyph: "🍠", kcal: 86, protein: 1.6, carbs: 20, fat: 0.1, portion: 130, portionLabel: "1 medium (raw)" },
  { slug: "potato", name: "Potato", glyph: "🥔", kcal: 77, protein: 2, carbs: 17, fat: 0.1, portion: 150, portionLabel: "1 medium (raw)" },

  // ── Nuts, seeds & fats ──────────────────────────────────
  { slug: "cashews", name: "Cashews", glyph: "🌰", kcal: 553, protein: 18, carbs: 30, fat: 44, portion: 28, portionLabel: "1 small handful" },
  { slug: "walnuts", name: "Walnuts", glyph: "🥜", kcal: 654, protein: 15, carbs: 14, fat: 65, portion: 28, portionLabel: "14 halves" },
  { slug: "pumpkin-seeds", name: "Pumpkin Seeds", glyph: "🎃", kcal: 559, protein: 30, carbs: 11, fat: 49, portion: 28, portionLabel: "1 small handful" },
  { slug: "chia-seeds", name: "Chia Seeds", glyph: "⬛", kcal: 486, protein: 17, carbs: 42, fat: 31, portion: 15, portionLabel: "1 tbsp" },
  { slug: "avocado", name: "Avocado", glyph: "🥑", kcal: 160, protein: 2, carbs: 9, fat: 15, portion: 100, portionLabel: "1/2 avocado" },
  { slug: "hummus", name: "Hummus", glyph: "🧆", kcal: 166, protein: 8, carbs: 14, fat: 10, portion: 30, portionLabel: "2 tbsp" },

  // ── Dairy ───────────────────────────────────────────────
  { slug: "cheddar", name: "Cheddar Cheese", glyph: "🧀", kcal: 403, protein: 25, carbs: 1.3, fat: 33, portion: 30, portionLabel: "1 slice" },
  { slug: "mozzarella", name: "Mozzarella", glyph: "⚪", kcal: 300, protein: 22, carbs: 2.2, fat: 22, portion: 30, portionLabel: "1 slice" },
];

export const FOOD_BY_SLUG: Record<string, Food> = Object.fromEntries(
  FOODS.map((f) => [f.slug, f]),
);

/**
 * Curated high-intent swap pairs that each get a dedicated, statically rendered
 * pSEO page at /swap/[a]-to-[b]. Hand-picked rather than full cartesian so every
 * page maps to a query a lifter or meal-prepper actually types.
 */
export const SWAP_PAIRS: Array<[string, string]> = [
  ["soya-chunks", "eggs"],
  ["soya-chunks", "chicken-breast"],
  ["peanuts", "roasted-chana"],
  ["almonds", "peanuts"],
  ["chicken-breast", "paneer"],
  ["paneer", "tofu"],
  ["tofu", "chicken-breast"],
  ["whey-protein", "greek-yogurt"],
  ["whey-protein", "soya-chunks"],
  ["greek-yogurt", "cottage-cheese"],
  ["milk", "greek-yogurt"],
  ["oats", "white-rice"],
  ["peanut-butter", "almonds"],
  ["moong-dal", "soya-chunks"],
  ["lentils", "chickpeas"],
  ["chickpeas", "roasted-chana"],
  ["eggs", "paneer"],
  ["cottage-cheese", "chicken-breast"],

  // Lean animal-protein swaps
  ["chicken-breast", "canned-tuna"],
  ["chicken-breast", "salmon"],
  ["chicken-breast", "turkey-breast"],
  ["chicken-breast", "shrimp"],
  ["salmon", "canned-tuna"],
  ["eggs", "egg-whites"],
  ["whey-protein", "egg-whites"],

  // Plant-protein swaps
  ["tofu", "tempeh"],
  ["tofu", "seitan"],
  ["chicken-breast", "seitan"],
  ["soya-chunks", "tempeh"],
  ["chickpeas", "rajma"],
  ["lentils", "black-beans"],
  ["soya-chunks", "edamame"],

  // Carb swaps
  ["white-rice", "brown-rice"],
  ["white-rice", "quinoa"],
  ["white-rice", "sweet-potato"],
  ["white-rice", "potato"],
  ["oats", "quinoa"],
  ["oats", "banana"],

  // Nut, seed & fat swaps
  ["almonds", "cashews"],
  ["almonds", "walnuts"],
  ["peanuts", "cashews"],
  ["pumpkin-seeds", "almonds"],
  ["peanut-butter", "hummus"],
  ["peanut-butter", "avocado"],

  // Dairy swaps
  ["paneer", "cheddar"],
  ["paneer", "mozzarella"],
  ["cheddar", "paneer"],
];

export type SwapMode = "protein" | "calories";

/**
 * Core swap math.
 *   Match protein:  W_b = W_a × (P_a / P_b)
 *   Match calories: W_b = W_a × (C_a / C_b)
 * Returns the weight of B plus the full macro profile of both portions.
 */
export function computeSwap(a: Food, b: Food, weightA: number, mode: SwapMode) {
  const ratio =
    mode === "protein"
      ? a.protein / b.protein
      : a.kcal / b.kcal;
  const weightB = weightA * ratio;

  const profile = (food: Food, grams: number) => ({
    kcal: (food.kcal * grams) / 100,
    protein: (food.protein * grams) / 100,
    carbs: (food.carbs * grams) / 100,
    fat: (food.fat * grams) / 100,
  });

  return {
    weightB,
    a: profile(a, weightA),
    b: profile(b, weightB),
  };
}
