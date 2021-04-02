import Menu from './Menu';
import Header from './Header';
import Main from './Main';
import Education from './Education';
import Skills from './Skills';
import Experiences from './Experiences';
import '../style/App.scss';
import '../style/toggleSwitch.scss';

function App() {

  const modes = (ev) => {
    const body = document.body;
      body.classList.toggle("light-mode");
      
  }

  return (
    <>
      <div className="line">
        <label className="switch">
          <input type="checkbox" onChange={modes} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="App">
      <Menu />
        <p className="header_cv">&#60;CV&#62;</p>
        <Header />
        <Main />
        <Education />
        <Skills />
        <Experiences />
        <p className="header_cv">&#60;/CV&#62;</p>
        <footer>
        by dand-code ©2021
      </footer>
      </div>
    </>
  );
}

export default App;
