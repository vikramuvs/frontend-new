import { useState } from "react";

export default function BosMainContent({ data }) {
  //   const [facultyData, setfacultyData] = useState(data[0].fa);
  //   const [mission, setMission] = useState(data[0].mission);
  //   const [profile, setProfile] = useState(data[0].profile);

  //console.log(data);

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
          <h2 className="text-2xl font-heading">BOS | BOE Members</h2>
          <br />
          {data.map((bos, i) => {
            return (
              <div
                key={bos.id}
                className="w-full border-gray-400 flex bg-gray-deptHeader space-x-2 shadow-md p-4 place-items-start border-[1px]"
              >
                <div className="flex-grow-0 min-w-[15%] max-w-[15%]">
                  {bos.name}
                </div>
                <div className="flex-grow-1 min-w-[75%] max-w-[75%]">
                  {bos.designation}
                </div>
                <div className="flex-grow-0 min-w-[15%] max-w-[15%] content-end">
                  {bos.ug_PG}
                </div>
              </div>
            );
          })}
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
