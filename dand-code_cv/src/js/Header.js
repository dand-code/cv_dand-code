import '../style/App.scss';

function Header() {
    return (
        <header className="App-header" id="header">
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
            &#8260;&#8260; <a className="style-none"  href="https://github.com/dand-code"> Github</a>
            </span>
            <span className="header_contact">
                    &#8260;&#8260; <a className="style-none" href="https://www.linkedin.com/in/dandara-de-almeida/">Linkedin</a>
            </span>
            </h3>
        </header>
    );
}

export default Header;
