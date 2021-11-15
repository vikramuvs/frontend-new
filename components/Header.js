import Image from "next/image";
import logo from "/assets/images/Institute-of-Technology-transparent-bkg.png";

export default function Header() {
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
                <nav className="w-auto h-3/6 bg-gray-menu bg-opacity-50 space-x-4 text-xl text-white hidden lg:inline-flex">
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
                    className="font-bold border-b-2 p-2"
                    href="/academics"
                  >
                    Academics
                  </a>
                  <a className="sm:hover:font-bold p-2" href="/placement">
                    Placement
                  </a>
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
