import Image from "next/image";
import { useState } from "react";
import logo from "/assets/images/Institute-of-Technology-transparent-bkg.png";

export default function Header() {
  const [menuItemCLicked, setMenuItemClicked] = useState(false);
  const [deptItemClicked, setDeptItemClicked] = useState(false);

  return (
    <>
      <div className="grid gap-5 grid-cols-12">
        <div className="col-start-1 col-end-13 bg-blue-ramaiah h-auto">
          <div className="grid gap-5 grid-cols-12 h-auto">
            <div className="col-start-2 col-end-12 bg-blue-ramaiah">
              <div className="flex flex-row justify-between items-center content-center">
                <div className="hidden lg:inline-block lg:h-5/6 lg:w-auto ">
                  <a href="/home">
                    <Image src={logo} alt="Logo" layout="fixed" />
                  </a>
                </div>
                <div className="h-20 w-[10rem] lg:hidden relative">
                  <a href="/home">
                    <Image
                      src={logo}
                      alt="Logo"
                      layout="fill"
                      className="absolute"
                    />
                  </a>
                </div>
                {/* <nav className="w-auto p-2 bg-gray-menu bg-opacity-50 space-x-4 text-base text-white hidden lg:inline-flex lg:relative"> */}
                <nav className="space-x-6 bg-gray-menu bg-opacity-50 p-2 box-border text-white  items-center hidden lg:inline-flex lg:relative ">
                  <a className="sm:hover:font-bold p-2" href="">
                    About Us
                  </a>
                  <a className="sm:hover:font-bold p-2" href="">
                    Admissions
                  </a>
                  <div className="inline-block relative ">
                    <a
                      className="sm:hover:font-bold font-bold border-b-2 p-2 cursor-pointer"
                      onMouseOver={() => {
                        setMenuItemClicked(!menuItemCLicked);
                        setDeptItemClicked(false);
                      }}
                      onClick={() => {
                        setMenuItemClicked(!menuItemCLicked);
                        setDeptItemClicked(false);
                      }}
                    >
                      Academics
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>

                    <div
                      className={`lg:absolute lg:top-10  lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:w-auto lg:p-2 lg:pt-0 lg:z-[5] ${
                        !menuItemCLicked ? "lg:hidden" : "lg:flex"
                      }`}
                    >
                      <div className="relative ">
                        <div className="flex flex-row gap-0 items-center">
                          <div>
                            <a
                              className="p-2 cursor-default"
                              onMouseOver={() => {
                                setDeptItemClicked(true);
                              }}
                              onClick={() => {
                                setDeptItemClicked(!deptItemClicked);
                              }}
                            >
                              Departments{" "}
                            </a>{" "}
                          </div>
                          <div className="">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          {/* </p> */}
                        </div>
                        <div
                          onMouseOver={() => {
                            setDeptItemClicked(true);
                          }}
                          onMouseOut={() => {
                            setDeptItemClicked(false);
                          }}
                          className={`lg:absolute lg:left-[110%] lg:top-0 lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:min-w-[20vw] lg:p-2 lg:pt-0 lg:z-[5] ${
                            !deptItemClicked ? "lg:hidden" : "lg:flex"
                          }`}
                        >
                          {" "}
                          <div>
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Architecture
                            </a>
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Artificial Intelligence & Machine Learning
                            </a>
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Artificial Intelligence & Data Science
                            </a>
                            <a
                              className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2"
                              href="/"
                            >
                              Biotechnology
                            </a>{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Chemical Engineering
                            </a>
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Civil Engineering
                            </a>
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Computer Science & Engg.
                            </a>{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Computer Science & Engg. (AI & ML)
                            </a>
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Computer Science & Engg. (Cyber Security)
                            </a>{" "}
                            {/* </div>
                      <div className="min-w-1/2"> */}{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Electrical & Electronics Engg.
                            </a>{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              {" "}
                              Electronics & Communications Engg.
                            </a>{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Electronics & Instrumentation Engg.
                            </a>{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Electronics & Telecommunications Engg.
                            </a>{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Information Science & Engg.
                            </a>{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Industrial Engineering & Mgmt
                            </a>{" "}
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-2">
                              Mechanical Engineering
                            </a>
                            <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer lg:block lg:pb-1">
                              Medical Electronics Engg.
                            </a>{" "}
                          </div>
                        </div>{" "}
                      </div>
                      <a
                        href=""
                        className="p-2"
                        onMouseOver={() => {
                          setDeptItemClicked(false);
                        }}
                      >
                        Centres of Excellence
                      </a>
                      <a
                        href=""
                        className="p-2"
                        onMouseOver={() => {
                          setDeptItemClicked(false);
                        }}
                      >
                        Research
                      </a>
                    </div>
                  </div>

                  <a className="sm:hover:font-bold p-2" href="">
                    Facilities
                  </a>
                  <a className="sm:hover:font-bold p-2" href="">
                    Examination
                  </a>
                  <a className="sm:hover:font-bold p-2" href="">
                    Placement
                  </a>
                  <a className="sm:hover:font-bold p-2" href="">
                    Skill Labs
                  </a>
                  <a className="sm:hover:font-bold p-2" href="">
                    Contact
                  </a>

                  {/* <a className="sm:hover:font-bold p-2" href="/contact">
                    Contact
                  </a> */}
                </nav>
                <nav className="text-xl text-white inline-flex lg:hidden cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
