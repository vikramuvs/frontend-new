import FacultyMainContent from "../components/FacultyMainContent";
import Head from "next/head";
import DeptBanner from "../components/DeptBanner";
import Header from "../components/Header";
import DeptStats from "../components/DeptStats";
import Footer from "../components/Footer";

function faculty({ facultyProfile }) {
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
        <FacultyMainContent data={facultyProfile} />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/api/v1/fd_responses/");
  const json = await res.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: { facultyProfile: json }, // will be passed to the page component as props
  };
}

export default faculty;
