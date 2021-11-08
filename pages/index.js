import Head from "next/head";
import DeptBanner from "../components/DeptBanner";
import Header from "../components/Header";
import DeptStats from "../components/DeptStats";
import DeptMainContent from "../components/DeptMainContent";
import Footer from "../components/Footer";

export default function Home(props) {
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
        <DeptMainContent data={props.visionData} />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/api/v1/vision_mission/");
  const json = await res.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: { visionData: json }, // will be passed to the page component as props
  };
}
