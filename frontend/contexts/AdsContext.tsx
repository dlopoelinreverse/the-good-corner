import { ReactNode, createContext, useContext } from "react";

const adsData = [
  {
    id: 1,
    link: "/ads/table",
    title: "Table",
    price: 120,
    imgUrl: "/images/table.webp",
  },
  {
    id: 2,
    link: "/ads/dame-jeanne",
    title: "Dame-jeanne",
    price: 75,
    imgUrl: "/images/dame-jeanne.webp",
  },
  {
    id: 3,
    link: "/ads/vide-poche",
    title: "Vide poche",
    price: 4,
    imgUrl: "/images/vide-poche.webp",
  },
  {
    id: 4,
    link: "/ads/vaisselier",
    title: "Vasselier",
    price: 900,
    imgUrl: "/images/vaisselier.webp",
  },
  {
    id: 5,
    link: "/ads/bougie",
    title: "Bougie",
    price: 8,
    imgUrl: "/images/bougie.webp",
  },
  {
    id: 6,
    link: "/ads/porte-magazine",
    title: "Port magazine",
    price: 45,
    imgUrl: "/images/porte-magazine.webp",
  },
];

const AdsContext = createContext(adsData);

// export function AdsProvider({ children }: { children: ReactNode }) {
//   return <AdsContext.Provider value={adsData}>{children}</AdsContext.Provider>;
// }

export const useAds = () => {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error("useAds must be used within a AdsProvider");
  }
  return context;
};
