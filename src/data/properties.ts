import type { DistrictSlug } from "./districts";

export type PropertyType = "apart" | "villa";

export type FeatureKey =
  | "pool"
  | "privatePool"
  | "wifi"
  | "ac"
  | "seaView"
  | "parking"
  | "kitchen"
  | "balcony"
  | "washer"
  | "dishwasher"
  | "smartTv"
  | "garden"
  | "bbq"
  | "elevator"
  | "petFriendly"
  | "babyCrib"
  | "workspace"
  | "detached"
  | "jacuzzi"
  | "fireplace"
  | "outdoorShower";

export const featureLabel: Record<FeatureKey, { tr: string; en: string }> = {
  pool: { tr: "Ortak havuz", en: "Shared pool" },
  privatePool: { tr: "Özel havuz", en: "Private pool" },
  wifi: { tr: "Wi-Fi", en: "Wi-Fi" },
  ac: { tr: "Klima", en: "Air conditioning" },
  seaView: { tr: "Deniz manzarası", en: "Sea view" },
  parking: { tr: "Otopark", en: "Parking" },
  kitchen: { tr: "Tam donanımlı mutfak", en: "Full kitchen" },
  balcony: { tr: "Balkon / teras", en: "Balcony / terrace" },
  washer: { tr: "Çamaşır makinesi", en: "Washing machine" },
  dishwasher: { tr: "Bulaşık makinesi", en: "Dishwasher" },
  smartTv: { tr: "Smart TV", en: "Smart TV" },
  garden: { tr: "Özel bahçe", en: "Private garden" },
  bbq: { tr: "Mangal", en: "BBQ" },
  elevator: { tr: "Asansör", en: "Elevator" },
  petFriendly: { tr: "Evcil hayvan dostu", en: "Pet-friendly" },
  babyCrib: { tr: "Bebek beşiği", en: "Baby crib" },
  workspace: { tr: "Çalışma alanı", en: "Workspace" },
  detached: { tr: "Müstakil", en: "Detached" },
  jacuzzi: { tr: "Jakuzi", en: "Jacuzzi" },
  fireplace: { tr: "Şömine", en: "Fireplace" },
  outdoorShower: { tr: "Açık duş", en: "Outdoor shower" },
};

export interface Property {
  id: string;
  slug: string;
  type: PropertyType;
  titleTr: string;
  titleEn: string;
  district: DistrictSlug;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  area_m2: number;
  features: FeatureKey[];
  highSeasonPrice: number;
  lowSeasonPrice: number;
  descriptionTr: string;
  descriptionEn: string;
  images: string[];
  rating: number;
  reviewCount: number;
  bookingFallbackUrl: string;
  featured?: boolean;
  tags?: string[];
  hasPrivatePool?: boolean;
  hasGarden?: boolean;
  isDetached?: boolean;
}

// Pre-launch state: villa catalogue is intentionally empty. The original demo
// dataset (apart + villa fixtures) was removed during the public-launch
// cleanup. See `_backup/original-images/README.md`. The shape and helpers
// below are preserved so that consumer code (pages, sitemap, JSON-LD) keeps
// compiling without modification.

export const properties: Property[] = [];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug || p.id === slug);
}

export function getPropertiesByDistrict(districtSlug: string): Property[] {
  return properties.filter((p) => p.district === districtSlug);
}

export function getPropertiesByType(type: PropertyType): Property[] {
  return properties.filter((p) => p.type === type);
}
