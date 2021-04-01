import '../style/App.scss';

function Skills() {
    return (
      <section>
      <h2>skills</h2>
      <div className="App-skills">
        <h3>tecnicals</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="App-skills">
        <h3>soft</h3>
        <ul>
          <li>Remote work</li>
          <li>Comunication</li>
          <li>Documentation</li>
          <li>Team work</li>
        </ul>
      </div>
      <div className="App-skills">
        <h3>language</h3>
        <ul>
          <li>Portuguese: native</li>
          <li>Spanish: C1</li>
          <li>English: A1</li>
        </ul>
      </div>
    </section>
    );
}

export default Skills;
