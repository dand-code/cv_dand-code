import '../style/App.scss';

function Education() {
  return (
    <section id="education">
      <h2 className="subtitle">education</h2>
      <div className="margin_elements">
        <h3>Adalab</h3>
        <ul className="list">
          <li>
            &#8260;&#8260; Maquetación: HTML5, CSS3, Flexbox, CSS Grid, Sass, Bootstrap;</li>
          <li> &#8260;&#8260; JavaScript y servicios web (APIs) de terceros;</li>
          <li> &#8260;&#8260; Control de versiones con Git;</li>
          <li> &#8260;&#8260; Creación de SPAs sencillas con React;</li>
          <li> &#8260;&#8260; Manejo de Slack, Trello, GitHub, Gulp, Terminal, Linter, Zeplin;</li>
        </ul>
      </div>
      <div className="margin_elements">
        <h3>Universidade Federal do Pará (Brazil)</h3>
        <ul className="list">
          <li>
            &#8260;&#8260; Graduada en Periodismo
            </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
