import ActivitiesContent from "../components/ActivitiesContent";
import Head from "next/head";
import DeptBanner from "../components/DeptBanner";
import Header from "../components/Header";
import DeptStats from "../components/DeptStats";
import Footer from "../components/Footer";

function activities({ ind_visits, ssw_fdp, seo }) {
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
        <ActivitiesContent
          ivData={ind_visits}
          sswData={ssw_fdp}
          seoData={seo}
        />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const iv = await fetch("http://localhost:8080/api/v1/ind_visits/");
  const ivJson = await iv.json();

  const ssw = await fetch("http://localhost:8080/api/v1/ssw_fdp/");
  const sswJson = await ssw.json();

  const seo = await fetch("http://localhost:8080/api/v1/events_org/");
  const seoJson = await seo.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: {
      ind_visits: ivJson,
      ssw_fdp: sswJson,
      seo: seoJson,
    }, // will be passed to the page component as props
  };
}

export default activities;
