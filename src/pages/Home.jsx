// Import all the components that make up the Home page sections
import Diverse from "../components/block/home/Diverse"; // Section showing diversity of features
import Hero from "../components/block/home/Hero"; // Top hero/banner section
import Saver from "../components/block/home/Saver"; // Section about saving
import Testimony from "../components/block/home/Testimony"; // User testimonials section
import Savings from "../components/block/home/Savings"; // Savings features section
import Security from "../components/block/home/Security"; // Security info section

// This is the main Home page component
// It displays all the main sections for the homepage
const Home = () => {
  // The return statement describes what will be rendered on the page
  return (
    // The outermost div sets the background color and ensures the page fills the screen
    <div className="bg-[#f2f7f8] min-h-screen w-full min-w-0">
      {/* Hero displays the top banner/hero section */}
      <Hero />
      {/* Security section about how your money is safe */}
      <Security />
      {/* Savings section about different ways to save */}
      <Savings />
      {/* Diverse section about the variety of features */}
      <Diverse />
      {/* Saver section about saving habits */}
      <Saver />
      {/* Testimony section with user reviews */}
      <Testimony />
    </div>
  );
};

// Export the component so it can be used in routing and other parts of the app
export default Home;
