import './App.css';
import HomeBackground from './homepageComponents/homeBackground';
import NavBar from './homepageComponents/navBar';
import ChatBot from './homepageComponents/chatBot';
import ScrollUp from './homepageComponents/scrollUp';
import SearchOption from './homepageComponents/searchOption';
import HowItWorks from './homepageComponents/howItWorks';
import AboutTheProject from './homepageComponents/aboutTheProject';

function App() {
  return (
    <div>
      <HomeBackground />
      <NavBar />
      <ChatBot />
      <ScrollUp />
      <SearchOption />
      <HowItWorks />
      <AboutTheProject />
    </div>
  );
}

export default App;
