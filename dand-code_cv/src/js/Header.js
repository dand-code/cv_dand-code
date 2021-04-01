import '../style/App.scss';

function Header() {
    return (
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
    );
}

export default Header;
