import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>Hello world</h1>
      </main>
    </div>
  );
};

export default Home;
