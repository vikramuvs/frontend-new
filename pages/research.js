import Head from "next/head";
import DeptBanner from "../components/DeptBanner";
import Header from "../components/Header";
import DeptStats from "../components/DeptStats";
import Footer from "../components/Footer";
import ResearchMainContent from "../components/ResearchMainContent";

function faculty({ research }) {
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
        <ResearchMainContent data={research} />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/api/v1/research/");
  const json = await res.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: { research: json }, // will be passed to the page component as props
  };
}

export default faculty;
