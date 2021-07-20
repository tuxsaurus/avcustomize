import Head from "next/head";

import Header from "../header";
import Footer from "../footer";

import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Árvore da Vida Customize</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
