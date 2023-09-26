import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useAds } from "../../../contexts/AdsContext";

export default function AdDetail() {
  const ads = useAds();

  const router = useRouter();

  const { adId } = router.query;

  const adData = ads.find((ad) => ad.id === Number(adId));

  if (!adData) {
    router.push("/");
    return;
  }

  const { title } = adData;

  return (
    <Layout title={`Annonce numero: ${title}`} hasBackButton>
      <h1>Bienvenue sur la page detail de l'annonce : {title}</h1>
    </Layout>
  );
}
