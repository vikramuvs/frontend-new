import Head from "next/head";
import DeptBanner from "../components/DeptBanner";
import Header from "../components/Header";
import DeptStats from "../components/DeptStats";
import DeptMainContent from "../components/DeptMainContent";
import Footer from "../components/Footer";

export default function Home() {
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
        <DeptMainContent />
        <Footer />
      </div>
    </>
  );
}
