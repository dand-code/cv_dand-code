import '../style/App.scss';

function Projects() {
  return (
    <section id="projects">
      <h2 className="subtitle">proyectos</h2>
      <h4 className="subtitle">Destacado</h4>
      <article>
        <h4 className="list">&#8260;&#8260; PopUpWords <a className="link" href="https://github.com/dand-code/plugin-chrome">project</a> <a className="link" href="https://chrome.google.com/webstore/detail/popupwords-app/omegbdlfeocacplbgonijebhibeblnml?hl=es">web</a></h4>

        <p className="description">PopUpWords es un plugin para Chrome direccionado a las personas que quieren mejorar su vocabulario en un idioma extranjero. Funciona resaltando en las páginas web o documentos digitales, las palabras guardadas en una lista creada previamente por el usuario. Al pasar con el ratón en la palabra subrayada, se mostrará la nota añadadida por el usuario y así recordar el significado de forma fácil.</p>
      </article>
      
      <h4 className="subtitle">Otros proyectos</h4>
      <ul className="list">
        {/* <li>
          <h4>&#8260;&#8260; Trividado <a className="link" href="https://github.com/dand-code/trivia-numbers">project</a> <a className="link" href="https://affectionate-hopper-ec48cd.netlify.app/#/">web</a></h4>
        </li> */}
        <li>
          <h4>&#8260;&#8260; Searcher Rick And Morty <a className="link" href="https://github.com/dand-code/search_ricky-morty">project</a> <a className="link" href="https://beta.adalab.es/modulo-3-evaluacion-final-dand-code/#/">web</a></h4>
        </li>
        <li>
          <h4>&#8260;&#8260; Guess The Number - Game <a className="link" href="https://github.com/dand-code/Guess-the-Number---Game">project</a> <a className="link" href="https://dand-code.github.io/Guess-the-Number---Game/">web</a></h4>
        </li>
        <li>
          <h4>&#8260;&#8260; TV shows browser <a className="link" href="https://github.com/dand-code/search_series">project</a> <a className="link" href="https://beta.adalab.es/modulo-2-evaluacion-final-dand-code/">web</a></h4>
        </li>
        <li>
          <h4>&#8260;&#8260; Web design <a className="link" href="https://github.com/dand-code/Web-layout">project</a> <a className="link" href="https://dand-code.github.io/Web-layout/">web</a></h4>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
