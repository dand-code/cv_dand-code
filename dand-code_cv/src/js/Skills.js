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
            <li>&#8260;&#8260; Remote work</li>
            <li>&#8260;&#8260; Comunication</li>
            <li>&#8260;&#8260; Documentation</li>
            <li>&#8260;&#8260; Team work</li>
          </ul>
        </div>
        <div className="margin_elements">
          <h3>language</h3>
          <ul className="list">
            <li>&#8260;&#8260; Portuguese: native</li>
            <li>&#8260;&#8260; Spanish: C1</li>
            <li>&#8260;&#8260; English: A1</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
