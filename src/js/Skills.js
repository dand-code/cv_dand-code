import '../style/App.scss';

function Skills() {
  return (
    <section id="skills">
      <h2 className="subtitle">skills</h2>
      <div className="wrap_skills">
        <div className="margin_elements">
          <h3>technicals</h3>
          <ul className="list">
            <li>&#8260;&#8260; HTML</li>
            <li>&#8260;&#8260; CSS</li>
            <li>&#8260;&#8260; Javascript</li>
            <li>&#8260;&#8260; React</li>
          </ul>
        </div>
        <div className="margin_elements">
          <h3>soft</h3>
          <ul className="list">
            <li>&#8260;&#8260; Trabajo remoto</li>
            <li>&#8260;&#8260; Comunicación</li>
            <li>&#8260;&#8260; Adaptabilidad</li>
            <li>&#8260;&#8260; Trabajo en equipo</li>
          </ul>
        </div>
        <div className="margin_elements">
          <h3>languages</h3>
          <ul className="list">
            <li>&#8260;&#8260; Portugués: nativa</li>
            <li>&#8260;&#8260; Español: C1</li>
            <li>&#8260;&#8260; Inglés: B2</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
