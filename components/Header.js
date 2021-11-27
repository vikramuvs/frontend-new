import Image from "next/image";
import { useState } from "react";
import logo from "/assets/images/Institute-of-Technology-transparent-bkg.png";

export default function Header() {
  const [menuItemCLicked, setMenuItemClicked] = useState(false);

  console.log(menuItemCLicked);

  return (
    <>
      <div className="grid gap-5 grid-cols-12">
        <div className="col-start-1 col-end-13 bg-blue-ramaiah h-auto">
          <div className="grid gap-5 grid-cols-12 h-auto">
            <div className="col-start-2 col-end-12 bg-blue-ramaiah">
              <div className="flex flex-row justify-between items-center content-center">
                <div className="hidden lg:inline-block lg:h-5/6 lg:w-auto ">
                  <Image src={logo} alt="Logo" layout="fixed" />
                </div>
                <div className="h-20 w-[10rem] lg:hidden relative">
                  <Image
                    src={logo}
                    alt="Logo"
                    layout="fill"
                    className="absolute"
                  />
                </div>
                <nav className="w-auto h-3/6 bg-gray-menu bg-opacity-50 space-x-4 text-xl text-white hidden lg:inline-flex lg:relative">
                  <a className="sm:hover:font-bold p-2" href="/home">
                    Home
                  </a>
                  <a className="sm:hover:font-bold p-2" href="/about-us">
                    About Us
                  </a>
                  <a className="sm:hover:font-bold p-2" href="/admissions">
                    Admissions
                  </a>
                  <a
                    className="sm:hover:font-bold "
                    className="font-bold border-b-2 p-2 cursor-pointer"
                    onClick={() => {
                      setMenuItemClicked(!menuItemCLicked);
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

                  <a className="sm:hover:font-bold p-2" href="/contact">
                    Contact
                  </a>

                  <div
                    className={`lg:absolute lg:top-8 lg:min-h-[100px] lg:bg-[#7c688d] lg:-left-8 lg:flex-wrap lg:text-white lg:w-full lg:p-4 lg:pt-0 lg:z-[5] lg:transform lg:transition-all lg:translate-x-4 lg:translate-y-4  lg:duration-100 ${
                      !menuItemCLicked ? "lg:hidden" : "lg:flex"
                    }`}
                  >
                    {/* <div className="flex-grow w-full lg:border-t-8 lg:border-pink-ramaiah">
                      {" "}
                    </div> */}
                    <div className="text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col">
                      <div className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded">
                        {" "}
                        Circuit Branches{" "}
                      </div>
                      <br />{" "}
                      <div className="flex flex-col border-t-2 flex-grow-0 text-sm">
                        {" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Computer Science & Engg.
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Electrical & Electronics Engg.
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          {" "}
                          Electronics & Communications Engg.
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Electronics & Instrumentation Engg.
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Electronics & Telecommunications Engg.
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Information Science & Engg.
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Medical Electronics Engg.
                        </a>{" "}
                      </div>{" "}
                    </div>
                    <div className="text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col">
                      <div className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded">
                        {" "}
                        Non-circuit Branches{" "}
                      </div>
                      <br />{" "}
                      <div className="flex flex-col border-t-2 border-white text-sm">
                        {" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Architecture
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Biotechnology
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Civil Engineering
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Industrial Engineering & Mgmt
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Mechanical Engineering
                        </a>{" "}
                      </div>{" "}
                    </div>
                    <div className="text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col">
                      {" "}
                      <div className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded">
                        {" "}
                        Research Programs{" "}
                      </div>
                      <br />{" "}
                      <div className="flex flex-col border-t-2 border-white text-sm">
                        {" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          CAMFS
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          CFR
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          IRF
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          ISE
                        </a>{" "}
                      </div>{" "}
                    </div>
                    <div className="text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col">
                      {" "}
                      <div className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded">
                        {" "}
                        PhD{" "}
                      </div>{" "}
                      <br />{" "}
                      <div className="flex flex-col border-t-2 border-white text-sm">
                        {" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          ECE
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          EEE
                        </a>{" "}
                      </div>{" "}
                    </div>
                  </div>
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
