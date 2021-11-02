function Footer() {
  return (
    <>
      <footer className="h-auto bg-blue-ramaiah flex flex-col lg:grid w-full lg:grid-cols-12 lg:gap-5 text-white font-lightBody pt-6">
        <div className="col-start-2 col-end-4 w-full h-full content-center hidden lg:grid ">
          <img
            className="w-full"
            src="/Institute-of-Technology-transparent-bkg.png"
          ></img>
        </div>
        <div className="lg:col-start-4 lg:col-end-6">
          <div className="lg:text-left">
            <span className="font-heading py-4 lg:text-xl block border-b-2 border-white">
              SUPPORTING <br /> SECTIONS
            </span>
          </div>
          <div>
            <ul className="space-y-3">
              <li>QIP Center</li>
              <li>Proctorial System</li>
              <li>IEEE RIT</li>
              <li>Sports</li>
              <li>NSS</li>
              <li>Dept. Of Extra-Curricular Activities</li>
              <li>Entrepreneurship Development Cell</li>
              <li>Apple Training Center</li>
              <li>Co-curricular Activities</li>
              <li>Alumni</li>
              <li>TEQIP</li>
              <li>Mandatory Committees</li>
              <li>SPDC</li>
              <li>PMSSS NODAL OFFICER</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-start-6 lg:col-end-8">
          <span className="font-heading py-4 lg:text-xl block border-b-2 border-white">
            FEES <br /> PAYMENT
          </span>
          <div>
            <ul className="space-y-3">
              <li>NRI Students Fee Payment 2020-21 </li>
              <li>PG Students (Tuition Fees 2020-2021) </li>
              <li>UG Higher Semester (Tuition Fees 2020-2021) </li>
              <li>
                Supplementary Exam Fee Sept/Oct 2021-UG III to VIII Sem &nbsp;
                PG All Semesters
              </li>
              <li>Pay Hostel Fee Online</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-start-8 lg:col-end-10">
          <span className="font-heading py-4 lg:text-xl block border-b-2 border-white">
            IMPORTANT <br />
            LINKS
          </span>
          <div>
            <ul className="space-y-3">
              <li>Center of Excellence </li>
              <li>Grievance Redressal Committee </li>
              <li>Grievance Redressal System </li>
              <li>Student Information Systems </li> <li>Results </li>
              <li>Faculty Email Login </li> <li>MeraPurse </li>
              <li>GEF Conduct Rules </li> <li>GEF Service Rules </li>
              <li>Student Satisfaction </li> <li>Survey of the Institute </li>
              <li>Curriculum Feedback Analysis </li> <li>Code of Conduct </li>
              <li>Code of Ethics </li> <li>Consultancy Policy </li>
              <li>Research Policy </li> <li>Academic Calendar 2018-19 </li>
              <li>Academic Calendar 2019-20 </li> <li>Syllabus 2018-19 </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-start-10 lg:col-end-12">
          <span className="font-heading py-4 lg:text-xl block border-b-2 border-white">
            REPORTS & <br /> NOTIFICATIONS
          </span>
          <div>
            <ul className="space-y-3">
              <li>VTU Audit Report </li>
              <li>IQAC </li>
              <li>NIRF</li>
              <li>NBA</li>
              <li>AICTE</li>
              <li>Sudarshana Magazine</li>
              <li>Pradarshana</li>
              <li>Sampige Bulletin</li>
              <li>Strategic Planning </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
