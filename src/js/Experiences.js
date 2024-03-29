import '../style/App.scss';

function Experiences() {
  return (
    <section id="experiences">
      <h2 className="subtitle">experiencias</h2>
      <div className="margin_elements">
        <h3>Equinix</h3>
        <h4>Software Engineer (Sep 2021 - Present)</h4>
        <ul className="list">
          <li> &#8260;&#8260; Desarrollo frontend: desde propuesta de maqueta hasta implementación con ReactJS y pruebas con Cypress.
          </li>
          <li> &#8260;&#8260;  Elaboración de documentación técnica.
          </li>
          <li> &#8260;&#8260;  Aprendiendo backend con Python y Django.
          </li>
        </ul>
      </div>
      <div className="margin_elements">
        <h3>Cabify + Easy Taxi</h3>
        <h4>Product Marketing (Jun 2017 -  Dic 2019)</h4>
        <ul className="list">
          <li>
            &#8260;&#8260; Maquetación con HTML y CSS para comunicación interna y documentación técnica del equipo de Producto de Cabify para Latinoamérica y Europa. (2018 - 2019).
              </li>
          <li> &#8260;&#8260; Formación del equipo de soporte (2017 - 2018), en Easy Taxi.</li>
        </ul>
      </div>
      <div className="margin_elements">
        <h3>Periodista</h3>
        <ul className="list">
          <li>
            <h4>&#8260;&#8260; Jornal O liberal (2014 - 2017)</h4>
          </li>
          <li>
            <h4>&#8260;&#8260; Prefeitura de Belém (2013 - 2016)</h4>
          </li>
          <li>
            <h4>&#8260;&#8260; Intercom (2012 - 2013)</h4>
          </li>
          <li>
            <h4>&#8260;&#8260; Senac (2010 - 2012)</h4>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experiences;
