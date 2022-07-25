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
    <div className="App ">
      <Header />
      <Intro />
      <Skillset />
      <Processes />
      <RecentProjects />
      <Carrer />
      <AboutMe />
      <br />
      <CaseStudies />
      <div>
        <MiniTitle
          text={"What's Next"} />
        <h1 className='text-[38px] font-bold  text-center leading-10 mb[-30px] '>Lets work together.</h1>
        <p className='px-2 mx-4 mt-4 text-center'>
          If you'd like to talk about a project you want help with or need an advice about product design,
          just drop me a message at </p><strong>nathan@ojieame.design</strong>
         <p className='px-2 text-center mx-4'> I'm currently Available for any design systems projects, dashboard designs or landing pages gigs
        </p>
        <FooterButton
        text={ 'write me an email'}
        visible={true}/>
        
      </div>
    </div>
  );
}

export default App;
