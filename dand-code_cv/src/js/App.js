import Numbers from './Numbers';
import '../style/App.scss';

function App() {
  return (
    <div className="App">
       <Numbers />
        <header className="App-header">
          <p className="header_cv">&#60;CV&#62;</p>
          <h1>Dandara Almeida</h1>
          <h2>Front-end Developer</h2>
          <h3 className="header_contact">
            <span className="header_contact">
              &#8260;&#8260; HTML, CSS, Javascript and React
            </span>
            <span className="header_contact">
              &#8260;&#8260; dandara.avazquez@gmail.com
            </span>
            <span className="header_contact">
              &#8260;&#8260; Github
            </span>

            <span className="header_contact">
              &#8260;&#8260; Linkedin
            </span>
          </h3>
        </header>


        <main>
          <h2>about me </h2>
          <p>
            Soy desarrolladora front-end y periodista. Creo que hacer lo que me motiva es la clave para el éxito y por eso he dejado los 10 años que he pasado en las redaciones, por lo que me ha vuelto a apasionar: la experiencia del usuario y la programación.
          </p>
          <p>Mi principal objetivo es seguir aprendiendo para desarrollar códigos alineados con conceptos de accesibilidad para entregar contenidos y experiencias cada vez más más efectivos, para una audiencia cada vez más diversa.
          </p>
        </main>
        <section>
          <h2>education</h2>
          <div>
            <h3>Adalab</h3>
            <ul>
              <li>
                Maquetación: HTML5, CSS3, Flexbox, CSS Grid, Sass, Bootstrap;</li>
              <li>JavaScript y servicios web (APIs) de terceros;</li>
              <li>Control de versiones con Git;</li>
              <li>Creación de SPAs sencillas con React;</li>
              <li>Manejo de Slack, Trello, GitHub, Gulp, Terminal, Linter, Zeplin;</li>
            </ul>
          </div>
          <div>
            <h3>Universidade Federal do Pará (Brazil)</h3>
            <ul>
              <li>
                Journalism graduation
              </li>
            </ul>
          </div>
        </section>
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
        <section>
          <h2>projects</h2>
          <ul>
            <li>
              <h4>Search Ricky And Morty</h4>
              <p>03/2021</p>
              <p>Proyecto para Adalab usando React</p>
            </li>
            <li>
              <h4>Guess The Number - game</h4>
              <p>02/2021</p>
              <p>Proyecto para Adalab usando Javasript</p>
            </li>
            <li>
              <h4>Series browser</h4>
              <p>02/2021</p>
              <p>Proyecto para Adalab usando React</p>
            </li>
            <li>
              <h4>Web design</h4>
              <p>01/2021</p>
              <p>Proyecto para Adalab usando HTML and Sass</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>work experiences</h2>
          <div>
            <h3>Cabify + Easy Taxi</h3>
            <h4>Product Marketing (2017 - 2019)</h4>
            <ul>
              <li>
                Comunicación interna del equipo de Producto de Cabify para Latinoamérica y Europa (2018 - 2019).
              </li>
              <li>-Capacitaciones del equipo de soporte (2017 - 2018), en Easy Taxi.</li>
            </ul>
          </div>
          <div>
            <h3>Journalist</h3>
            <ul>
              <li>
                <h4>Jornal O liberal (2014 - 2017)</h4>
              </li>
              <li>
                <h4>Prefeitura de Belém (2013 - 2016)</h4>
              </li>
              <li>
                <h4>Intercom (2012 - 2013).</h4>
              </li>
              <li>
                <h4>Senac (2010 - 2012)</h4>
              </li>
            </ul>
          </div>
          <p className="header_cv">&#60;CV&#62;</p>
        </section>


        <footer>
          by dand-code ©2021
      </footer>
      </div>
  ); 
}

export default App;
