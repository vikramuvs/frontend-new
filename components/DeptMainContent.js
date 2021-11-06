import { useEffect, useState } from "react";

function DeptMainContent() {
  const [vision, setVision] = useState(null);
  const [mission, setMission] = useState(null);

  useEffect(() => {
    setVision();
    setMission();
  }, []);

  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 bg-blue-ramaiah lg:bg-transparent lg:relative font-body">
        <div className="col-span-full h-8 lg:bg-blue-ramaiah  bg-opacity-30 text-blue-ramaiah space-x-3 m-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full lg:absolute">
          <div className="lg:w-full lg:flex lg:flex-col text-center">
            <a
              href=""
              className="lg:hover:font-bold active:bg-opacity-100 active:border-b-2 border-white bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Overview
            </a>
            <a
              href=""
              className="sm:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Faculty
            </a>
            <a
              href=""
              className="lg:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Research
            </a>
            <a
              href=""
              className="sm:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              BOS|BOE
            </a>
            <a
              href=""
              className="sm:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Achievements
            </a>
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <div>
            <div className="font-heading text-lg"> VISION</div> <br /> To be a
            leading Biotechnology Engineering department that imparts quality
            technical education with strong research component, to develop
            solutions in the field of food, health and environment.
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br /> To
            provide quality technical education in a conducive learning
            environment to produce professionals, researchers with a zeal for
            lifelong learning and a commitment to society.
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            The department of Biotechnology established in 2002 offers a four
            year B.E. Biotechnology Program with an intake of 60 students and a
            two years PG Program, M.Tech in Biotechnology with an intake of 18
            students. The department is a recognized Research Centre by VTU,
            Belgaum, offering M.Sc (Engg.) by research and PhD programs. The
            Department also offers a Post Graduate Diploma in Biopharmaceutical
            Technology under the Biotechnology Skill Enhancement Programme
            (BiSEP), supported by the Department of IT &nbsp; BT, Government of
            Karnataka with a sanctioned budget of Rs. 162.5 Lakhs. <br />
            The department has 14 faculty members, of them 11 are Ph.D holders
            and the others are M.Tech pursuing Ph.D. The faculty members have
            competence in Core areas of Biotechnology viz. Food and Agricultural
            Biotechnology, Health and Medical Biotechnology &nbsp; Environmental
            Biotechnology and Bioprocess Engineering. The department research is
            focused towards these core areas and funded by national and state
            funding agencies like DST, KBITS, AICTE, VGST, VTU and RGUHS. <br />
            The department have publications in SCI and SCOPUS indexed journals.
            Faculties have published book chapters and presented their research
            work in National and International conferences. A sizeable number of
            students have pursued their higher education at various premier
            institutes in India and abroad after having qualified GATE, GRE
            &nbsp; TOEFL exams. The students undergo internships at various
            premier institutes in India and abroad. Several students receive the
            Indian Science Academies Summer Internship every year. The
            department has collaborations with some of the leading biotech
            industries like: Biocon, Hindustan Unilever Limited (HUL), Bristol
            Myers Squibb India Ltd, Novozymes South Asia Pvt Ltd, Himalaya Drug
            Company, Beckman Coulter, Sami Labs, Sartorius Stedim, Genotypic
            Technology, Aristogene Biosciences, GangaGen, Connexios Life
            Sciences, Acquity Labs &nbsp; Celest Pharma.
            <br />
            <div className="font-heading pt-2 text-lg">DEPARTMENT HISTORY</div>
            <br />
            <ul className="list-disc ml-3">
              <li>
                2002 B.E. Biotechnology program started under Visvesvaraya
                Technological University (VTU), Belgaum, with an intake of 30
                students.
              </li>
              <li>2006 Student intake increased from 30 to 60. </li>
              <li>2007 Autonomous under VTU. </li>
              <li>
                2008 Recognized R&nbsp;D centre offering PhD / M.Sc. (Engg.) in
                Biotechnology under VTU.
              </li>
              <li>
                2009 NBA Accredited B.E-Biotechnology Programme for three years:
                (June 2010 - 2013)
              </li>
              <li> 2011 Outcome Based Education is implemented. </li>
              <li>
                2012 M. Tech in Biotechnology program started under autonomous
                scheme, with an intake of 18 students.
              </li>
              <li>
                2016 NBA Accredited B.E-Biotechnology Programme for three years:
                (June 2016 - 2019)
              </li>
              <li>
                2018 PG Diploma in Biopharmaceutical Technology started. This
                Program is supported by the Department of IT &nbsp; BT,
                Government of Karnataka.
              </li>
              <li>
                2019 NBA Accredited B.E-Biotechnology Programme for three years
                (June 2019-2022)
              </li>
              <li>
                2019 NBA Accredited M.Tech.- Biotechnology Programme for three
                years (June 2019-2022)
              </li>
            </ul>
          </div>

          <div className="lg:space-x-2 flex m-auto pt-6 flex-wrap">
            <button className="bg-blue-ramaiah text-white p-2 bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-md border-[1px] lg:border-none">
              Offered Programs
            </button>
            <button className="bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none">
              Objectives UG
            </button>
            <button className="bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none">
              Objectives PG
            </button>
            <button className="bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none">
              HOD's Profile
            </button>
            <button className="bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none">
              Facilities
            </button>
          </div>

          <div className="pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2">
            Department of Biotechnology offers three programs that are
            affiliated to VTU – Belgaum and recognized by AICTE:
            <ul className="list-disc ml-3">
              <li>
                Bachelor of Engineering in Biotechnology with intake count of 60
              </li>
              <li>PG Diploma in Biopharmaceutical Technology (LINK HERE)</li>
              <li>
                Master of Technology in Biotechnology with intake count of 18
              </li>
              <li>M.Sc. (Engg) by Research with intake as per VTU norms</li>
              <li>Ph.D. with intake as per VTU norms </li>
            </ul>
          </div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah">
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Syllabus
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <ul className="list-disc">
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Syllabus
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <ul className="list-disc">
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Syllabus
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <ul className="list-disc">
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>1</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeptMainContent;
