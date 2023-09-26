import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const adsData = [
  {
    id: 1,
    href: "/ads/table",
    title: "Table",
    price: 120,
    imageSrc: "/images/table.webp",
  },
  {
    id: 2,
    href: "/ads/dame-jeanne",
    title: "Dame-jeanne",
    price: 75,
    imageSrc: "/images/dame-jeanne.webp",
  },
  {
    id: 3,
    href: "/ads/vide-poche",
    title: "Vide poche",
    price: 4,
    imageSrc: "/images/vide-poche.webp",
  },
  {
    id: 4,
    href: "/ads/vaisselier",
    title: "Vasselier",
    price: 900,
    imageSrc: "/images/vaisselier.webp",
  },
  {
    id: 5,
    href: "/ads/bougie",
    title: "Bougie",
    price: 8,
    imageSrc: "/images/bougie.webp",
  },
  {
    id: 6,
    href: "/ads/porte-magazine",
    title: "Port magazine",
    price: 45,
    imageSrc: "/images/porte-magazine.webp",
  },
];

const AdsContext = createContext(adsData);

export function AdsProvider({ children }: { children: ReactNode }) {
  return <AdsContext.Provider value={adsData}>{children}</AdsContext.Provider>;
}

export const useAds = () => {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error("useAds must be used within a AdsProvider");
  }
  return context;
};
