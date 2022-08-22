import type {NextPage} from "next";
import Head from "next/head";

// styles
import styles from "../styles/Home.module.css";

// component
import About from "./about";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Studio Rara+</title>
        <meta name="description" content="Webiste of studio rara+" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About />
    </div>
  );
};

export default Home;
