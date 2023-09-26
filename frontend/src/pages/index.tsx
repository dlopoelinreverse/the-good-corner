import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import RecentAds from "@/components/RecentAds";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="TGC - Accueil">
      <RecentAds />
    </Layout>
  );
}
