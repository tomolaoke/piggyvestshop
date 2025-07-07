import main1 from "../assets/images/main1.png";
import investors from "../assets/images/investors.png";
import explore from "../assets/images/explore.png";
import estate from "../assets/images/estate.png";
import PiggyBtn from "../components/reusable/PiggyBtn";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import woman from "../assets/images/woman.png";
import twentyOne from "../assets/images/twentyOne.png";
import nineteenFive from "../assets/images/nineteenFive.jpg";
import seventeen from "../assets/images/seventeen.png";
import nineteenFifty from "../assets/images/nineteenFifty.jpg";
import twentyTwoG from "../assets/images/twentyTwoG.jpg";
import twentyTwo from "../assets/images/twentyTwo.jpg";
import HouseInvest from "../components/block/housemoney/HouseInvest";
import Navbar from "../static/Navbar";


const Invest = () => {
  return (
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      {/* Navbar remains full width and purple as before */}
      <Navbar customBg="#7913e5" customScrolledBg="#7913e5" />
      {/* Hero Section: full width, purple background, only for hero */}
      <section className="w-full" style={{ background: '#7913e5' }}>
        <div className="flex flex-row max-w-[1280px] mx-auto px-8 md:px-16 pt-[150px] items-center pb-[130px] flex-wrap max-md:max-w-[100%] max-md:flex-col max-md:gap-y-[50px]">
          {/* Hero Text */}
          <div className="flex-1 text-white max-md:w-[100%] min-w-[300px]">
            <h1 className="text-5xl font-bold mb-8 max-md:text-center">
              Invest on the go
            </h1>
            <span
              className="bg-white text-xl mb-8 inline-block px-6 py-3 rounded-4xl max-md:mx-auto"
              style={{
                color: "#7913e5",
                backgroundColor: "#EFF5FC",
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Up to 35% returns
            </span>
            <p className="w-2/3 text-2xl mb-6 max-md:w-full">
              Invest securely and confidently on the go. Up to 35% returns, 6-12 month duration.
            </p>
            <div className="flex gap-4 mb-8">
              <span>
                <PiggyBtn
                  title="GetOniphone"
                  textColor="white"
                  bgColor="#122231"
                  iconTitle={<FaApple className="h-10" />}
                />
              </span>
              <span>
                <PiggyBtn
                  title="GetonAndroid"
                  textColor="white"
                  bgColor="#122231"
                  iconTitle={<FaGooglePlay className="h-10" />}
                />
              </span>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex-1 flex justify-center items-end min-w-[300px] mt-8 md:mt-0 h-[400px] md:h-[550px] lg:h-[600px]">
            <img 
              src={main1} 
              alt="Invest" 
              className="h-full w-auto object-contain" 
              style={{ maxHeight: '100%', minHeight: '300px', boxShadow: '0 8px 32px 0 rgba(121,19,229,0.15)', borderRadius: '2rem' }}
            />
          </div>
        </div>
      </section>
      {/* Main content below hero section, separated and not purple */}
      <div>
        {/* Section: Simple investments with great returns */}
        <section className="max-w-[1280px] mx-auto px-8 md:px-16 pt-20 pb-10">
          <div className="text-center ">
            <h1
              className="text-5xl font-bold mt-8"
              style={{ color: "#122231" }}
            >
              Simple investments with great returns
            </h1>
            <p className="text-xl" style={{ color: "#485F6E" }}>
              Investments are made readily accessible to everyone
            </p>
          </div>
        </section>
        {/* Section: Investment features cards */}
        <section
          className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-16 pb-20"
          style={{ backgroundColor: "#F2F7F8" }}
        >
          <div className="bg-white rounded-3xl pt-6 px-6 shadow-sm">
            <h1
              className="text-4xl font-bold mb-3"
              style={{ color: "#7913E5" }}
            >
              Investments simplified
            </h1>
            <p className="text-lg mb-20" style={{ color: "#485F6E" }}>
              With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.
            </p>
            <img src={investors} alt="Investors" className="max-h-[250px] mx-auto" />
          </div>
          <div className="bg-white rounded-3xl pt-6 px-6 shadow-sm">
            <h1
              className="text-4xl font-bold mb-3"
              style={{ color: "#7913E5" }}
            >
              Invest confidently
            </h1>
            <p className="text-lg mb-20" style={{ color: "#485F6E" }}>
              We work with leading licensed investment houses such as ARM, AIICO and Stanbic.
            </p>
            <img src={explore} alt="explore" className="max-h-[250px] mx-auto" />
          </div>
          <div className="bg-white rounded-3xl pt-6 px-6 shadow-sm">
            <h1
              className="text-4xl font-bold mb-3"
              style={{ color: "#7913E5" }}
            >
              Diversify your portfolio
            </h1>
            <p className="text-lg mb-20" style={{ color: "#485F6E" }}>
              Invest in various industries such as fixed income instruments, agriculture, transportation, etc.
            </p>
            <img src={estate} alt="Investment" className="max-h-[250px] mx-auto" />
          </div>
        </section>
        {/* Section: Get started highlight */}
        <section
          style={{ height: "80vh" }}
          className="max-w-[1280px] flex flex-col md:flex-row justify-between items-center mb-24 px-8 md:px-16"
        >
          <div
            className="px-0 md:px-16 py-20 space-y-6 rounded-3xl w-full md:w-2/3"
            style={{ backgroundColor: "hsl(269, 85%, 49%)" }}
          >
            <h1 className="text-5xl font-bold text-white leading-snug">
              We’ve made it easier for anyone to get started.
            </h1>
            <p className="text-white w-full md:w-[70%] text-xl">
              Finally, you can access pre-vetted low-medium risk primary and secondary investment opportunities easily with any amount you have. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/3 mt-8 md:mt-0">
            <img src={woman} alt="" className="h-[350px] md:h-[485px] w-auto object-contain rounded-3xl shadow-lg" />
          </div>
        </section>
      </div>
      <section className="max-w-[1280px] mx-auto">
        <h1
          className="text-center text-6xl font-bold pb-24"
          style={{ color: "#122231" }}
        >
          Recent Opportunities on Investify
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20 pb-8">
          {/* Card 1 */}
          <main className="max-w-[1280px]">
            <div className="bg-white rounded-3xl space-y-6 shadow-sm">
              <img
                src={twentyOne}
                alt=""
                className="rounded-tl-3xl rounded-tr-3xl w-full object-cover"
              />
              <div className="px-6">
                <h1
                  className="text-2xl font-bold pb-5"
                  style={{ color: "#122231" }}
                >
                  CORPORATE DEBT NOTE SERIES XLVII
                </h1>
                <div
                  className="flex justify-between items-center pb-5"
                  style={{ color: "#485F6E" }}
                >
                  <span>
                    <div className="text-xl">₦5,000</div>
                    <div>per Unit</div>
                  </span>
                  <span>
                    <div className="text-xl">578</div>
                    <div>investors</div>
                  </span>
                </div>
                <button
                  className="px-4 py-3 rounded-4xl font-bold text-md pb-2 bg-pink-100 mb-5"
                  style={{ color: "#B52E58" }}
                >
                  Sold Out
                </button>
              </div>
            </div>
          </main>
          {/* Card 2 */}
          <main className="max-w-[1280px]">
            <div className="bg-white rounded-3xl space-y-6 shadow-sm">
              <img
                src={nineteenFive}
                alt=""
                className="rounded-tl-3xl rounded-tr-3xl w-full object-cover"
              />
              <div className="px-6">
                <h1
                  className="text-2xl font-bold pb-5"
                  style={{ color: "#122231" }}
                >
                  CORPORATE DEBT NOTE SERIES XLVI
                </h1>
                <div
                  className="flex justify-between items-center pb-5"
                  style={{ color: "#485F6E" }}
                >
                  <span>
                    <div className="text-xl">₦5,000</div>
                    <div>per Unit</div>
                  </span>
                  <span>
                    <div className="text-xl">745</div>
                    <div>investors</div>
                  </span>
                </div>
                <button
                  className="px-4 py-3 rounded-4xl font-bold text-md pb-2 bg-pink-100 mb-5"
                  style={{ color: "#B52E58" }}
                >
                  Sold Out
                </button>
              </div>
            </div>
          </main>
          {/* Card 3 */}
          <main className="max-w-[1280px]">
            <div className="bg-white rounded-3xl space-y-6 shadow-sm">
              <img
                src={seventeen}
                alt=""
                className="rounded-tl-3xl rounded-tr-3xl w-full object-cover"
              />
              <div className="px-6">
                <h1
                  className="text-2xl font-bold pb-5"
                  style={{ color: "#122231" }}
                >
                  CORPORATE DEBT NOTE SERIES XLV
                </h1>
                <div
                  className="flex justify-between items-center pb-5"
                  style={{ color: "#485F6E" }}
                >
                  <span>
                    <div className="text-xl">₦5,000</div>
                    <div>per Unit</div>
                  </span>
                  <span>
                    <div className="text-xl">470</div>
                    <div>investors</div>
                  </span>
                </div>
                <button
                  className="px-4 py-3 rounded-4xl font-bold text-md pb-2 bg-pink-100 mb-5"
                  style={{ color: "#B52E58" }}
                >
                  Sold Out
                </button>
              </div>
            </div>
          </main>
          {/* Card 4 */}
          <main className="max-w-[1280px]">
            <div className="bg-white rounded-3xl space-y-6 shadow-sm">
              <img
                src={nineteenFifty}
                alt=""
                className="rounded-tl-3xl rounded-tr-3xl w-full object-cover"
              />
              <div className="px-6">
                <h1
                  className="text-2xl font-bold pb-5"
                  style={{ color: "#122231" }}
                >
                  CORPORATE DEBT NOTE SERIES XLVII
                </h1>
                <div
                  className="flex justify-between items-center pb-5"
                  style={{ color: "#485F6E" }}
                >
                  <span>
                    <div className="text-xl">₦5,000</div>
                    <div>per Unit</div>
                  </span>
                  <span>
                    <div className="text-xl">859</div>
                    <div>investors</div>
                  </span>
                </div>
                <button
                  className="px-4 py-3 rounded-4xl font-bold text-md pb-2 bg-pink-100 mb-5"
                  style={{ color: "#B52E58" }}
                >
                  Sold Out
                </button>
              </div>
            </div>
          </main>
          {/* Card 5 */}
          <main className="max-w-[1280px]">
            <div className="bg-white rounded-3xl space-y-6 shadow-sm">
              <img
                src={twentyTwoG}
                alt=""
                className="rounded-tl-3xl rounded-tr-3xl w-full object-cover"
              />
              <div className="px-6">
                <h1
                  className="text-2xl font-bold pb-5"
                  style={{ color: "#122231" }}
                >
                  CORPORATE DEBT NOTE SERIES XLVI
                </h1>
                <div
                  className="flex justify-between items-center pb-5"
                  style={{ color: "#485F6E" }}
                >
                  <span>
                    <div className="text-xl">₦5,000</div>
                    <div>per Unit</div>
                  </span>
                  <span>
                    <div className="text-xl">373</div>
                    <div>investors</div>
                  </span>
                </div>
                <button
                  className="px-4 py-3 rounded-4xl font-bold text-md pb-2 bg-pink-100 mb-5"
                  style={{ color: "#B52E58" }}
                >
                  Sold Out
                </button>
              </div>
            </div>
          </main>
          {/* Card 6 */}
          <main className="max-w-[1280px]">
            <div className="bg-white rounded-3xl space-y-6 shadow-sm">
              <img
                src={twentyTwo}
                alt=""
                className="rounded-tl-3xl rounded-tr-3xl w-full object-cover"
              />
              <div className="px-6">
                <h1
                  className="text-2xl font-bold pb-5"
                  style={{ color: "#122231" }}
                >
                  CORPORATE DEBT NOTE SERIES XLVII
                </h1>
                <div
                  className="flex justify-between items-center pb-5"
                  style={{ color: "#485F6E" }}
                >
                  <span>
                    <div className="text-xl">₦5,000</div>
                    <div>per Unit</div>
                  </span>
                  <span>
                    <div className="text-xl">578</div>
                    <div>investors</div>
                  </span>
                </div>
                <button
                  className="px-4 py-3 rounded-4xl font-bold text-md pb-2 bg-pink-100 mb-5"
                  style={{ color: "#B52E58" }}
                >
                  Sold Out
                </button>
              </div>
            </div>
          </main>
        </div>
      </section>
      <div>
        <HouseInvest />
      </div>
    </div>
  );
};

export default Invest;
