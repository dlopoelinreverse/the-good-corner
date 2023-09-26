import { useAds } from "../../contexts/AdsContext";
import AdCard from "./AdCard";

export default function RecentAds() {
  const ads = useAds();

  return (
    <>
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <AdCard {...ad} key={ad.id} />
        ))}
      </section>
    </>
  );
}
