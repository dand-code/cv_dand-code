import Header from './Header';
import Main from './Main';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Experiences from './Experiences';
import '../style/App.scss';
import '../style/toggleSwitch.scss';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <p className="cv">&#60;CV&#62;</p>
        <Main />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Experiences />
        <p className="cv">&#60;/CV&#62;</p>
        <footer>
          by dand-code ©2021
      </footer>
      </div>
    </>
  );
}

export default App;
