import Footer from "./Footer";
import logo from "/assets/images/Institute-of-Technology.png";
import Image from "next/image";

function HomePage() {
  return (
    <div>
      {/* Home Page Module */}
      <main className="relative">
        {/* Header */}

        {/* left-half-div */}
        <div className="grid grid-cols-12 gap-5 min-h-screen z-0">
          <div className="col-span-6 bg-homeBanner bg-gray-100 bg-no-repeat bg-cover bg-top opacity-50 bg-blend-luminosity grid grid-rows-3">
            <div></div>
            <div className="w-[70%] bg-white border-2 border-orange-ramaiah mx-auto h-[80%]"></div>
            <div className="w-[70%] bg-white border-2 border-orange-ramaiah mx-auto h-[80%]"></div>
          </div>
          <div className="col-span-6 bg-blue-ramaiah grid grid-rows-3">
            <div></div>
            <div className="text-7xl text-white font-semibold leading-[1.125]">
              Open your world to{" "}
              <span className="text-orange-ramaiah border-orange-ramaiah border-b-[1px]">
                OPPORTUNITIES
              </span>{" "}
              <br />
              with us
            </div>
            <div className="flex flex-row justify-evenly flex-wrap">
              <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
            </div>
          </div>
        </div>

        <section className="min-w-[80%] flex items-center p-2 justify-between bg-transparent z-10 absolute top-0 left-[10%]">
          <div className="w-52 h-20 relative">
            <Image src={logo} alt="Logo" layout="fill" className="absolute" />
          </div>
          <div className="h-10 bg-gray-menu bg-opacity-50  text-white justify-end">
            <nav className="space-x-6">
              <a className="p-4 border-b-2 border-orange-ramaiah font-medium">
                Home
              </a>
              <a className="p-4">About Us</a>
              <a className="p-4">Admissions</a>
              <a className="p-4">Academics</a>
              <a className="p-4">Placement</a>
            </nav>
          </div>
        </section>
        {/* right-half-div */}
      </main>
      {/* Jnanam Vigyanam Module */}
      {/* Virtual Tour Module */}
      {/* Jnanam Vigyanam Module */}
      <Footer />
    </div>
  );
}

export default HomePage;
