import '../style/App.scss';
import TypingEffect from './TypingEffect';

function Main() {

    return (
        <main className="App-header" id="main">
            <h1>Dandara Almeida</h1>
            <h2>Front-end Developer</h2>
            <h3 className="main_contact">
                <TypingEffect />
                <span className="main_contact">
                    &#8260;&#8260; <a className="style-none" href="mailto:dandara.avazquez@gmail.com"> dandara.avazquez@gmail.com</a>
                </span>
                <span className="main_contact">
                    &#8260;&#8260; <a className="style-none" href="https://github.com/dand-code"> Github</a>
                </span>
                <span className="main_contact">
                    &#8260;&#8260; <a className="style-none" href="https://www.linkedin.com/in/dandara-de-almeida/">Linkedin</a>
                </span>
            </h3>
        </main>
    );
}

export default Main;
