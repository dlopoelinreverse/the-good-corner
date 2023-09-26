import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function AdDetail() {
  const router = useRouter();

  const { adId } = router.query;
  return (
    <Layout title={`Annonce numero: ${adId}`}>
      <h1>Bienvenue sur la page detail de l'annonce : {adId}</h1>
    </Layout>
  );
}
