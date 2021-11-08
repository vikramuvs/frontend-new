import BosMainContent from "../components/BosMainContent";
import Head from "next/head";
import DeptBanner from "../components/DeptBanner";
import Header from "../components/Header";
import DeptStats from "../components/DeptStats";
import Footer from "../components/Footer";

function bos({ bos }) {
  return (
    <>
      <Head>
        <title>Ramaiah Institute of Technology, Bengaluru - 54</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-body">
        <Header />
        <DeptBanner />
        <DeptStats />
        <BosMainContent data={bos} />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/api/v1/bos_boe/");
  const json = await res.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: { bos: json }, // will be passed to the page component as props
  };
}

export default bos;
