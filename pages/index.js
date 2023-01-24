import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
export default function Home({ pizzaList }) {
  return (
    <div>
      <Head>
        <title>LuLu&apos;s Pizza</title>
        <meta name="description" content="Best Pizza in Chicago" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
