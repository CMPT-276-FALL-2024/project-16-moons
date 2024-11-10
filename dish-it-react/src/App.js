import './App.css';
import HomeBackground from './homepageComponents/homeBackground';
import NavBar from './homepageComponents/navBar';
import ChatBot from './homepageComponents/chatBot';
import ScrollUp from './homepageComponents/scrollUp';

function App() {
  return (
    <div>
      <HomeBackground />
      <NavBar />
      <ChatBot />
      <ScrollUp />
    </div>
  );
}

export default App;
