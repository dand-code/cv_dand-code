import Numbers from './Numbers';
import Header from './Header';
import Main from './Main';
import Education from './Education';
import Skills from './Skills';
import Experiences from './Experiences';
import '../style/App.scss';

function App() {
  return (
    <div className="App">
      <Numbers />
      <Header />
      <Main />
      <Education />
      <Skills />
      <Experiences />

      <footer>
        by dand-code ©2021
      </footer>
    </div>
  );
}

export default App;
