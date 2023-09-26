import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function AdDetail() {
  const router = useRouter();

  console.log(router.query);

  const { id } = router.query;
  return (
    <Layout title={`Annonce numero: ${id}`}>
      <h1>Bienvenue sur la page detail de l'annonce : {id}</h1>
    </Layout>
  );
}
