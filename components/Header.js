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
                    className="sm:hover:font-bold"
                    className="font-bold border-b-2 p-2 cursor-pointer"
                    onClick={() => {
                      setMenuItemClicked(!menuItemCLicked);
                    }}
                  >
                    Academics
                  </a>
                  <a className="sm:hover:font-bold p-2" href="/placement">
                    Placement
                  </a>

                  <div
                    className={`lg:absolute lg:top-10 lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:w-auto lg:p-4 lg:pt-0  lg:z-[5] lg:transform  lg:transition-all lg:translate-x-4 lg:translate-y-4 lg:space-x-3 lg:duration-100 ${
                      !menuItemCLicked ? "lg:hidden" : "lg:flex"
                    }`}
                  >
                    <div className="flex-grow w-full lg:border-t-8 lg:border-pink-ramaiah">
                      {" "}
                    </div>
                    <div className="text-base cursor-default">
                      {" "}
                      <span className="bg-pink-ramaiah py-3">
                        {" "}
                        Circuit Branches{" "}
                      </span>
                      <br />{" "}
                      <div className="flex flex-col border-t-2  text-lg">
                        {" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          ECE
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          EEE
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          {" "}
                          CSE
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          ISE
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          EIE
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          ETE
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          MLE
                        </a>{" "}
                      </div>{" "}
                    </div>
                    <div className="text-base cursor-default">
                      {" "}
                      <span className="bg-pink-ramaiah">
                        {" "}
                        Non-circuit Branches{" "}
                      </span>
                      <br />{" "}
                      <div className="flex flex-col border-t-2 border-pink-ramaiah text-lg">
                        {" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          BT
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          CV
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          ME
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          IEM
                        </a>{" "}
                        <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                          Architecture
                        </a>{" "}
                      </div>{" "}
                    </div>
                    <div className="text-base cursor-default">
                      {" "}
                      <span className="bg-pink-ramaiah">
                        {" "}
                        Research Programs{" "}
                      </span>
                      <br />{" "}
                      <div className="flex flex-col border-t-2 border-pink-ramaiah text-lg">
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
                    <div className="text-base cursor-default">
                      {" "}
                      <span className="bg-pink-ramaiah">Ph.D</span> <br />{" "}
                      <div className="flex flex-col  text-lg">
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
