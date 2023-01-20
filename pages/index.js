import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>LuLu&apos;s Pizza</title>
        <meta name="description" content="Best Pizza in Chicago" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
      <Footer />
    </div>
  );
}
