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
import { textContents } from './utils/datalist'
function App() {

  return (
    <div className="App md:mx-[10%]">
      <Header />
      <br />
      <Intro text={textContents.introText} />
      <br />
      <Skillset text={textContents.skillText} />
      <br />
      <Processes />
      <br />
      <RecentProjects />
      <br />
      <Carrer />
      <br />
      <AboutMe text={textContents.aboutMeText} />
      <br />
      <CaseStudies />
      <br />
      <div className='my-10 '>
        <MiniTitle
          text={"What's Next"} />
        <h1 className='text-[38px] font-bold  mx-4 leading-10 mb[-30px] '>Lets work together.</h1>
        <p className='px-2 mx-4 mt-4 text-center'>
          {textContents.nextText[0]} </p><strong><a href='mailto:shaibalsharif@gmail.com'>shaibalsharif@gmail.com</a></strong>
        <p className='px-2 text-center mx-4 mb-8'>   {textContents.nextText[1]}</p>
        <a href='mailto:shaibalsharif@gmail.com'>
          <FooterButton

            text={'write me an email'}
            visible={true} />
        </a>

      </div>
    </div>
  );
}

export default App;
