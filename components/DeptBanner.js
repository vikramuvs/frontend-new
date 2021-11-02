export default function DeptBanner() {
  return (
    <>
      <div className="grid gap-5 grid-cols-12 h-auto lg:h-auto">
        <div className="col-start-1 col-end-13 bg-gray-deptHeader min-h-full">
          <div className="grid gap-5 grid-cols-12 min-h-full">
            <div className="col-span-full lg:col-start-2 lg:col-end-7 bg-bt bg-cover text-center sm:text-2xl font-bold flex">
              <div className="m-auto font-heading lg:text-3xl text-blue-ramaiah">
                DEPARTMENT OF <br />
                BIOTECHNOLOGY
              </div>
            </div>
            <div className="col-span-12 lg:col-start-7 lg:col-end-12 inline-flex text-center text-blue-ramaiah">
              <div className="w-1/2 lg:w-1/2 lg:mr-2">
                <span className="text-xl font-heading ">LATEST NEWS</span>
                <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white">
                  <span className="font-heading lg:text-2xl">26</span> Aug 2021
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500">
                  Exam Fee Notification for Supplementary Semester Offline
                  Examinations - B.E./B.Arch III to VIII Sem |
                  MBA/MCA/M.TECH/M.ARCH All Semesters (Theory &nbsp; Practical)
                  - Sept / Oct 2021
                </div>
              </div>
              <div className="w-1/2 lg:w-1/2 lg:mr-2 ">
                <span className="text-xl font-heading">LATEST EVENTS</span>
                <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white">
                  <span className="font-heading lg:text-2xl">26</span> Aug 2021
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500">
                  Exam Fee Notification for Supplementary Semester Offline
                  Examinations - B.E./B.Arch III to VIII Sem |
                  MBA/MCA/M.TECH/M.ARCH All Semesters (Theory &nbsp; Practical)
                  - Sept / Oct 2021
                </div>
              </div>
              {/* <div className="w-1/2 bg-gray-600">Latest Events</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
