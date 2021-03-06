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
      <div className="App" id="app">
        <p className="cv">&#60;CV&#62;</p>
        <Main />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Experiences />
        <p className="cv">&#60;/CV&#62;</p>
        <footer id="footer">
          by dand-code ©2021
      </footer>
      </div>
    </>
  );
}

export default App;
