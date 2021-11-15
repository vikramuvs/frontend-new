import Footer from "./Footer";
import logo from "/assets/images/Institute-of-Technology.png";
import Image from "next/image";

function HomePage() {
  return (
    <div>
      {/* Home Page Module */}
      <main className="relative">
        {/* Header */}

        <div className="grid grid-cols-12 min-h-[100vh] max-h-[100vh] z-0">
          {/* left-half-div */}
          {/* <div className="col-span-6 bg-homeBanner bg-gray-100 bg-no-repeat bg-cover bg-top opacity-50 bg-blend-luminosity grid grid-rows-3">
            <div></div>
            <div></div>
            <div className="space-y-3 opacity-100 relative">
              
              <div className="h-40 bg-white shadow-2xl mx-auto w-[60%] z-10 before:h-auto before:w-auto before:-top-6 before:absolute before:rounded-t-lg before:text-white before:bg-orange-ramaiah before:z-0 before:content-['Latest_News'] ">
                <div className="p-2 ">
                  <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                    <p className="text-4xl font-extrabold inline-block">26</p>
                    <span>Aug 2021</span>
                  </div>
                  <div className="my-auto">
                    Exam Fee Notification for Supplementary Semester Offline
                    Examinations - B.E./B.Arch III to VIII Sem |
                    MBA/MCA/M.TECH/M.ARCH All Semesters (Theory & Practical) -
                    Sept / Oct 2021
                  </div>
                </div>
              </div>

              
              <div className="h-40 bg-white  shadow-2xl mx-auto w-[60%] ">
                <div className="p-2 ">
                  <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                    <p className="text-4xl font-extrabold inline-block">26</p>
                    <span>Aug 2021</span>
                  </div>
                  <div className="my-auto">
                    Five day Online FDP on "Mathematical Developments in
                    Cryptography and Data Science" by Dept. of Mathematics, RIT.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-span-6 bg-homeBanner bg-gray-100 bg-no-repeat bg-cover bg-top opacity-50 bg-blend-luminosity flex flex-col min-h-[100%] max-h-[100%]">
            <div className="h-[25%] flex-shrink"></div>
            <div className="h-[35%] flex-grow"></div>
            <div className="h-[40%] flex-grow">
              <div className="space-y-3 opacity-100 relative">
                <div className="h-40 bg-white shadow-2xl mx-auto w-[60%] z-10 before:h-auto before:w-auto before:-top-6 before:absolute before:rounded-t-lg before:text-white before:bg-orange-ramaiah before:z-0 before:content-['Latest_News'] ">
                  <div className="p-2 ">
                    <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                      <p className="text-4xl font-extrabold inline-block">26</p>
                      <span>Aug 2021</span>
                    </div>
                    <div className="my-auto">
                      Exam Fee Notification for Supplementary Semester Offline
                      Examinations - B.E./B.Arch III to VIII Sem |
                      MBA/MCA/M.TECH/M.ARCH All Semesters (Theory & Practical) -
                      Sept / Oct 2021
                    </div>
                  </div>
                </div>

                <div className="h-40 bg-white  shadow-2xl mx-auto w-[60%] ">
                  <div className="p-2 ">
                    <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                      <p className="text-4xl font-extrabold inline-block">26</p>
                      <span>Aug 2021</span>
                    </div>
                    <div className="my-auto">
                      Five day Online FDP on "Mathematical Developments in
                      Cryptography and Data Science" by Dept. of Mathematics,
                      RIT.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right-half-div */}
          {/* <div className="col-span-6 bg-blue-ramaiah grid grid-rows-3">
            <div></div>

            <div className="text-7xl text-white font-semibold leading-[1.125]">
              Open your world to{" "}
              <span className="text-orange-ramaiah border-orange-ramaiah border-b-[1px]">
                OPPORTUNITIES
              </span>{" "}
              <br />
              with us
            </div>

            <div className="space-y-3">
              <div className="flex flex-row justify-evenly flex-wrap border-[1px] border-gray-500">
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              </div>
              <div className="flex flex-row justify-evenly flex-wrap">
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              </div>
            </div>
          </div> */}
          <div className="col-span-6 bg-blue-ramaiah flex flex-col min-h-[100%] max-h-[100%]">
            <div className="h-[25%] flex-shrink"></div>
            <div className="h-[35%] flex-grow">
              <div className="text-7xl text-white font-semibold leading-[1.125]">
                Open your world to{" "}
                <span className="text-orange-ramaiah border-orange-ramaiah border-b-[1px]">
                  OPPORTUNITIES
                </span>{" "}
                <br />
                with us
              </div>
            </div>
            <div className="h-[40%] flex-grow">
              <div className="space-y-3">
                <div className="flex flex-row justify-evenly flex-wrap border-[1px] border-gray-500">
                  <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                  <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                  <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                </div>
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                  <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="min-w-[80%] flex items-center p-2 justify-between bg-transparent z-10 absolute top-0 left-[10%]">
          <div className="relative lg:h-5/6 lg:w-auto">
            <Image src={logo} alt="Logo" layout="fixed" className="absolute" />
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

        <div className="col-span-full bg-gray-homeSection h-[60vh] text-center ">
          <div className="text-blue-ramaiah underline capitalize font-heading text-4xl w-[65%] mx-auto h-full space-y-3 py-3">
            Virtual Tour
            <br />
            <iframe
              src="https://www.easytourz.com/BT-EmabedTour/all/87002a26d035a1f7"
              width="100%"
              height="90%"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowfullscreen=""
            ></iframe>
          </div>
        </div>

        <div className="bg-homeBannerJnanam h-[50vh] bg-no-repeat bg-cover bg-bottom">
          <div className="bg-samMsr mx-auto"></div>
        </div>
      </main>
      {/* Jnanam Vigyanam Module */}
      {/* Virtual Tour Module */}
      {/* Jnanam Vigyanam Module */}
      <Footer />
    </div>
  );
}

export default HomePage;
