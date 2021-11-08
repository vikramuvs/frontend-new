import AchievementsContent from "../components/AchievementsContent";
import Head from "next/head";
import DeptBanner from "../components/DeptBanner";
import Header from "../components/Header";
import DeptStats from "../components/DeptStats";
import Footer from "../components/Footer";

function achievements({ stu_achievements, fac_achievements, patents }) {
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
        <AchievementsContent
          st_achieve={stu_achievements}
          fa_achieve={fac_achievements}
          pat={patents}
        />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/api/v1/achievements/");
  const json = await res.json();

  const fa = await fetch("http://localhost:8080/api/v1/faculty_achievemnts/");
  const fa_json = await fa.json();

  const patent = await fetch("http://localhost:8080/api/v1/patents/");
  const patent_json = await patent.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: {
      stu_achievements: json,
      fac_achievements: fa_json,
      patents: patent_json,
    }, // will be passed to the page component as props
  };
}

export default achievements;
