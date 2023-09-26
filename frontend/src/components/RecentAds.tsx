import { useState } from "react";
import { useAds } from "../../contexts/AdsContext";
import AdCard from "./AdCard";

export default function RecentAds() {
  const ads = useAds();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleAddTotal = (price: number) => {
    setTotalPrice((current) => current + price);
  };

  const handleResetTotalPrice = () => setTotalPrice(0);

  return (
    <>
      <h2>Annonces récentes</h2>
      <div>
        <p>Prix total : {totalPrice} eur</p>
        <button onClick={handleResetTotalPrice}>réinitialiser</button>
      </div>
      <section className="recent-ads">
        {ads.map((ad) => (
          <AdCard {...ad} key={ad.id} addPrice={handleAddTotal} />
        ))}
      </section>
    </>
  );
}
