import logo from './logo.svg';
import './App.css';
import WeddingHeader from './components/WeddingHeader';
import WeddingIntro from './components/WeddingIntro';
import WeddingMap from './components/WeddingMap';
import WeddingTimeline from './components/WeddingTimeline';
import WeddingStory from './components/WeddingStory';
import WeddingPrenup from './components/WeddingPrenup';
import WeddingRSVP from './components/WeddingRSVP';
import WeddingFAQ from './components/WeddingFAQ';
import WeddingInformation from './components/WeddingInformation';
import WeddingProposal from './components/WeddingProposal';
import Countdown from './components/Countdown';
import WeddingPreloader from "./components/WeddingPreloader";
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time for the preloader duration
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <>
    {isLoading ? (
      <WeddingPreloader />
    ) : (

    <div className="App">
        <WeddingHeader/>
        {/* <WeddingIntro/> */}
        <WeddingStory/>
        <WeddingProposal/>
        <Countdown targetDate="2025-02-08T00:00:00" />
        <WeddingMap/>
        <WeddingTimeline/>
        <WeddingInformation/>
        <WeddingFAQ/>
        <WeddingPrenup/>
        <WeddingRSVP/>
    </div>
     )}
  </>
  );
}

export default App;
