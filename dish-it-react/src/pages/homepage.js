import "./homepage.css";
import HomeBackground from "../homepageComponents/homeBackground";
import NavBar from "../homepageComponents/navBar";
import ChatBot from "../chatBot/chatbot-component";
import ScrollUp from "../homepageComponents/scrollUp";
import SearchOption from "../homepageComponents/searchOption";
import HowItWorks from "../homepageComponents/howItWorks";
import AboutTheProject from "../homepageComponents/aboutTheProject";
import ContactUs from "../homepageComponents/contactUs";

function Homepage() {
  return (
    <div>
      <HomeBackground />
      <NavBar />
      <ChatBot />
      <ScrollUp />
      <SearchOption />
      <HowItWorks />
      <AboutTheProject />
      <ContactUs />
    </div>
  );
}

export default Homepage;
