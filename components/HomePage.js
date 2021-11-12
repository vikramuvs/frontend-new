import Footer from "./Footer";
import logo from "/assets/images/Institute-of-Technology.png";
import Image from "next/image";

function HomePage() {
  return (
    <div>
      {/* Home Page Module */}
      <main>
        {/* Header */}
        <section className="flex items-center p-2 max-w-6xl m-auto justify-between bg-transparent">
          <div className="w-32 h-20 relative">
            <Image src={logo} alt="Logo" layout="fill" className="absolute" />
          </div>
          <div className="h-4 bg-gray-menu text-white justify-end">
            <nav>
              <a className="p-3 border-b-2 border-orange-ramaiah font-medium">
                Home
              </a>
              <a>About Us</a>
              <a>Admissions</a>
              <a>Academics</a>
              <a>Placement</a>
            </nav>
          </div>
        </section>

        {/* left-half-div */}
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
