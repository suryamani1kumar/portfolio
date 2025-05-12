import ExpertArea from "@/component/ExpertArea/ExpertArea";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>MERN Stack & React.js Developer | Frontend Portfolio</title>
        <meta
          name="description"
          content="Portfolio of a skilled MERN Stack and React.js developer specializing in building responsive, high-performance web apps with modern JavaScript and UI/UX best practices."
        />
        <meta
          name="keywords"
          content="MERN Stack Developer, React.js Developer, Frontend Developer, JavaScript Developer, Web Developer Portfolio, Node.js, MongoDB, Express.js, UI Developer"
        />
      </Head>
      <div className="container">
        <div className={styles.subContainer}>
          <div></div>
          <div>
            <ExpertArea />
          </div>
        </div>
      </div>
    </>
  );
}
