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


function App() {
  return (
    <div className="App">
        <WeddingHeader/>
        <WeddingIntro/>
        <WeddingMap/>
        <WeddingTimeline/>
        <WeddingStory/>
        <WeddingPrenup/>
        <WeddingInformation/>
        <WeddingFAQ/>
        <WeddingRSVP/>
    </div>
  );
}

export default App;
