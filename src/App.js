import Header from './components/Header';
import './App.css';
import Intro from './components/Intro';
import MiniTitle from './components/MiniTitle';
import FooterButton from './components/FooterButton';
import Skillset from './components/Skillset';
import Processes from './components/Processes';
import RecentProjects from './components/RecentProjects';
import Carrer from './components/Carrer';
import AboutMe from './components/AboutMe';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <div className="App flex flex-col justify-around items-center">
      <Header />
      <Intro />
      <Skillset />
      <Processes />
      <RecentProjects/>
      <Carrer />
      <AboutMe />
      <CaseStudies/>
      <div>
        WHATS NEXT
        {/*
            
            ###Whats Next section### 
          back image
            Title
            description
            <FooterButto/>
          
            

        */}
      </div>
      <div>
        FOOTER
        {/*
            
            ###Footer section### 
          
        test logo
            

        */}
      </div>
    </div>
  );
}

export default App;
