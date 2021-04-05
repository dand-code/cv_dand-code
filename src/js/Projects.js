import '../style/App.scss';

function Projects() {
  return (
    <section id="projects">
      <h2 className="subtitle">projects</h2>
      <ul className="list">
        <li>
          <h4>Search Ricky And Morty</h4>
          <span><a className="link" href="https://github.com/dand-code/search_ricky-morty">project</a></span> <span><a className="link" href="https://beta.adalab.es/modulo-3-evaluacion-final-dand-code/#/">web</a></span>
        </li>
        <li>
          <h4>Guess The Number - game</h4>
          <span><a className="link" href="https://github.com/dand-code/Guess-the-Number---Game">project</a></span> <span><a className="link" href="https://dand-code.github.io/Guess-the-Number---Game/">web</a></span>
        </li>
        <li>
          <h4>Series browser</h4>
          <span><a className="link" href="https://github.com/dand-code/search_series">project</a></span> <span><a className="link" href="https://beta.adalab.es/modulo-2-evaluacion-final-dand-code/">web</a></span>
        </li>
        <li>
          <h4>Web design</h4>
          <span><a className="link" href="https://github.com/dand-code/Web-layout">project</a></span> <span><a className="link" href="https://dand-code.github.io/Web-layout/">web</a></span>
        </li>
      </ul>
    </section>
  );
}

export default Projects;