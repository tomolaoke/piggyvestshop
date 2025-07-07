
// --- Blog Page Imports ---
// (Uncomment Blognav if you want to use a custom blog navigation bar)
// import Blognav from "../components/Blog/Blognav";
// Importing images and assets for the Blog page
import Banner from "../assets/images/Blog/imgi_27_Frame-1000001336-1.png";
import Main from "../assets/images/Blog/Blog-featured.jpg";
import Bbanner from "../assets/images/Blog/Desktop.webp";
// Importing icons from react-icons for social and navigation icons
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
// Importing a reusable component to display recent blog posts
import RecentArray from "../components/Blog/RecentArray";

// --- Blog Page Component ---
// This is the main Blog page component. It displays blog banners, featured articles, categories, and recent posts.
// All sections are labeled and commented for beginner understanding.
const Blog = () => {
  return (
    // Main container for the Blog page
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      {/* Blognav can be enabled if you want a custom navigation bar for the blog */}
      {/* <Blognav/> */}

      {/* --- Banner Section --- */}
      <div className="position: relative">
        {/* Banner image at the top of the blog page */}
        <img src={Banner} alt="Blog Banner" />
        {/* Overlay text and quiz link on the banner */}
        <div className="position: absolute bottom-7 left-120 text-center">
          <h2>Which PiggyVest Feature are you?</h2>
          <a href="#" className="text-blue-800 underline ">
            Click to take quiz
          </a>
        </div>
      </div>

      {/* --- Featured Main Image Section --- */}
      <div className="my-[50px] w-[100%]">
        {/* Main featured blog image */}
        <img src={Main} alt="Blog Main Feature" className="w-[100%]" />
      </div>

      {/* --- Blog Feature and Most Popular Section --- */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-start gap-10 p-6">
        {/* Left: Blog feature details */}
        <div className="w-[600px] my-6">
          <h1 className="text-[42px] font-[400] w-[450px]">
            Introducing: Piggyvest Wellness Checks
          </h1>
          <p>Ifeoluwa Adekoya</p>
          <button className="self-start bg-blue-700 text-white py-[8px] px-[22px] rounded-[20px] my-7">
            Annoucements
          </button>
        </div>
        {/* Right: Most popular blog posts */}
        <div className="flex flex-col gap-5 w-[600px] items-start mt-[35px]">
              Scheme
          {/* Section title */}
          <h3 className="text-[21px] font-[500] text-blue-700">Most popular</h3>
          {/* Example of a popular blog post */}
          <div className="flex justify-between items-center gap-5 border-b-2 border-gray-100">
            <h4 className="text-[18px] font-[400] w-[350px]">
              Building Wealth in Your 20s: Practical Money-Saving Strategies for Young Nigerians
            </h4>
            <button className="self-end bg-blue-700 text-white py-[8px] px-[18px] rounded-[20px] my-7">
              Money Tips
            </button>
          </div>
          {/* Another example post */}
          <div className="flex justify-between items-center gap-5 border-b-2 border-gray-100">
            <h1 className="text-[18px] font-[400] w-[350px]">
              My Money Mistake: My Family Lost Over ₦10 Million To A Ponzi Scheme
            </h1>
            <button className="self-end bg-pink-500 text-white py-[8px] px-[14px] rounded-[20px] my-7">
              My Money Mistake
            </button>
          </div>
          {/* Another example post */}
          <div className="flex justify-between items-center gap-5">
            <h1 className="text-[18px] font-[400] w-[350px]">
              Women & Money: Ore Eni-Ibukun Is Prioritising Work-Rest Balance
            </h1>
            <button className="self-end bg-green-700 text-white py-[8px] px-[18px] rounded-[20px] my-7">
              Women & money
            </button>
          </div>
        </div>
      </div>

      {/* --- Most Recent Section --- */}
      <div className="w-[100%] mx-auto p-6">
        <div className="flex items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">Most Recent</h1>
          <hr className="w-150 border-t-2 border-gray-200" />
          <button className="border-1 rounded-[13px] border-gray-200 py-[13px] px-[80px] ">View all</button>
        </div>
        {/* RecentArray component displays a list of recent blog posts */}
        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px]">
          <RecentArray/>
        </div>
      </div>

      {/* --- Money Tip Section --- */}
      <div className="w-[100%] mx-auto gap-y-[30px] p-6">
        <div className="flex items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">Money Tip</h1>
          <hr className="w-150 border-t-2 border-gray-200" />
          <button className="border-1 rounded-[13px] border-gray-200 py-[13px] px-[80px] ">View all</button>
        </div>
        {/* RecentArray reused for money tips */}
        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px]">
          <RecentArray/>
        </div>
      </div>

      {/* --- How To Section --- */}
      <div className="w-[100%] mx-auto p-6">
        <div className="flex mb-[20px] items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">How To</h1>
          <hr className="w-195 border-t-2 border-gray-200" />
          <button className="border-1 rounded-[13px] border-gray-200 py-[10px] px-[60px] ">View all</button>
        </div>
        {/* RecentArray reused for how-to posts */}
        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px]">
          <RecentArray/>
        </div>
      </div>

      {/* --- Announcement Section --- */}
      <div className="w-[100%] mx-auto p-6">
        <div className="flex items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">Announcement</h1>
          <hr className="w-170 border-t-2 border-gray-200" />
          <button className="rounded-[13px] border-1 border-gray-200 py-[10px] px-[60px] ">View all</button>
        </div>
        {/* RecentArray reused for announcements */}
        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px] mb-[380px]">
          <RecentArray/>
        </div>
      </div>

      {/* --- Highlighted Money Mistake Section --- */}
      <div className="w-[100%] mx-auto p-6 relative">
        <div className="w-[1220px] px-[80px] h-[400px] mx-auto p-6 absolute bottom-[-85px] gap-y-[20px] bg-[#E9F4FE] rounded-[20px] flex flex-col justify-center items-center">
          <h3 className="text-[23px] font-[700]">MY MONEY MISTAKE</h3>
          <h1 className="text-[41px] leading-10 w-[1100] font-[500]">“I wasn’t even doing it for the money. I just didn’t want to lose the job. At this stage, my father was tired of me.”</h1>
          <h3 className="text-[23px] font-[700]">Adaora Nwodo</h3>
          <button className='text-white bg-blue-700 px-5 py-2 rounded-[20px]'>Money Tips</button>
        </div>
      </div>

      {/* --- My Money Mistake Section (Black background) --- */}
      <div className="w-[100%] h-[850px] mx-auto p-6 text-white bg-black flex flex-col justify-center items-center">
        <div className="flex items-center w-full gap-5">
          <h1 className="text-[40px] font-[600] mr-[30px]">My Money Mistake</h1>
          <hr className="w-150 border-t-2 border-gray-200" />
          <button className="border-1 rounded-[13px] border-gray-200 py-[10px] px-[60px] ">View all</button>
        </div>
        {/* RecentArray reused for money mistake stories */}
        <div className="w-[100%] mx-auto bg-black rounded-lg pb-[20px]">
          <RecentArray/>
        </div>
      </div>

      {/* --- Newsletter Subscription Section (Blue) --- */}
      <div className="w-full mx-auto p-6 bg-blue-700 text-white flex justify-between items-center gap-5 py-10">
        <h1 className="text-[45px] font-[600] py-[50px] w-[320px]">Subscribe to our newsletter..</h1>
        <div className="w-[550px]">
          <h2 className="flex justify-between items-center text-[27px] font-[400]"><span>Enter e-mail address</span> <span><IoMdArrowRoundForward/></span></h2>
          <hr className=" border-t-2 border-gray-100"/>
          <p className="text-[10px]">By “submitting”, you agree to join the ‘Money Matters’ Newsletter.</p>
        </div>
      </div>

      {/* --- Explore All Section --- */}
      <div className="w-[100%] mx-auto p-6">
        <div className="w-full">
          <h1 className="text-[40px] font-[600]">Explore All</h1>
          <div className="flex gap-5 mt-[20px]">
            <button className="border-1 border-gray-200 rounded-[10px] cursor-pointer py-[8px] px-[35px] ">Money Tips</button>
            <button className="border-1 border-gray-200 rounded-[10px] cursor-pointer py-[8px] px-[35px] ">Finance</button>
            <button className="border-1 border-gray-200 rounded-[10px] cursor-pointer py-[8px] px-[35px] ">App Guide</button>
          </div>
        </div>
        {/* RecentArray reused for explore all, with a load more button */}
        <div className="w-[100%] mx-auto bg-white rounded-lg pb-[20px] flex flex-col justify-center items-center">
          <RecentArray/>
          <RecentArray />
          <button className="self-center my-[50px] border-1 border-gray-200 rounded-[10px] cursor-pointer py-[8px] px-[35px] ">Load More</button>
        </div>
      </div>

      {/* --- Blog Bottom Banner Image --- */}
      <img src={Bbanner} alt="Blog Bottom Banner" className="w-fit rounded-[10px]"/>

      {/* --- Newsletter Subscription Section (Gray) --- */}
      <div>
        <div className="w-full mx-auto p-6 text-black flex justify-between items-center gap-5 py-10">
          <h1 className="text-[45px] font-[600] w-[320px]">Subscribe to our newsletter..</h1>
          <div className="w-[550px]">
            <h2 className="flex justify-between items-center text-gray-400 text-[27px] font-[400]"><span>Enter e-mail address</span> <span><IoMdArrowRoundForward/></span></h2>
            <hr className="border-t-2 border-gray-300"/>
            <p className="text-[10px]">By “submitting”, you agree to join the ‘Money Matters’ Newsletter.</p>
          </div>
        </div>
      </div>

      {/* --- Footer (commented out, can be enabled if needed) --- */}
      {/**
      <footer className="w-[1300px] bg-gray-100 gap-[20px] text-black grid grid-cols-7 py-10">
        <div className="spans col-span-2 mr-20">
          <img src="https://blog.piggyvest.com/wp-content/uploads/2021/09/Layer-21.svg" alt="footer logo" className="w-[300px]"/>
          <p className="mt-[10px] w-[360px] ">PiggyVest (formerly piggybank.ng) is the leading savings & investment platform in Nigeria.  For over 9 years our customers have saved and invested trillions of Naira that they would normally be tempted to spend.</p>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><a href="#"> PiggyBank</a></li>
            <li><a href="#">investify</a></li>
            <li><a href="#">Safelock Us</a></li>
            <li><a href="#">Target Savings</a></li>
            <li><a href="#">Flex Naira</a></li>
            <li><a href="#">Flex Dollar</a></li>
            <li><a href="#">House Money</a></li>
          </ul>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><a href="#"> PiggyBank</a></li>
            <li><a href="#">investify</a></li>
            <li><a href="#">Safelock Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><a href="#"> PiggyBank</a></li>
            <li><a href="#">investify</a></li>
            <li><a href="#">Safelock Us</a></li>
          </ul>
        </div>
        <div className="col-span-2">
          <div className="flex gap-4 text-[30px]">
            <span><FaFacebookSquare/></span>
            <span><FaInstagram/></span>
            <span><FaTwitterSquare/></span>
            <span><FaTiktok/></span>
            <span><FaYoutube/></span>
          </div>
        </div>
      </footer>
      */}

    {/* End of Blog page main container */}
    </div>
  );
};

// Exporting the Blog component for use in routing
export default Blog;
