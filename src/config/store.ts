export const STORE_CONFIG = {
  // Confirm one catalogue-wide price with the business before launch.
  productPriceMAD: null as number | null,
  // Enter a single shared product size once verified (for example, "50 × 70 cm").
  productDimensions: null as string | null,
  whatsappNumber: "212627025271",
  currency: "MAD",
};

export function formatPrice(value: number | null, language: "fr" | "ar") {
  if (value === null) return language === "fr" ? "Prix à confirmer" : "السعر قيد التأكيد";
  return new Intl.NumberFormat(language === "fr" ? "fr-MA" : "ar-MA", {
    style: "currency", currency: STORE_CONFIG.currency, maximumFractionDigits: 0,
  }).format(value);
}
