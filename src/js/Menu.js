import '../style/menu.scss';
import PDF from '../source/Dandara-CV.pdf';

function Menu() {
    const DandaraAlmeida_pdf = '../source/Dandara-CV.pdf'

    function openNav() {
    document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    }
    return (
        <>
            <div id="myNav" className="overlay">
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <div className="overlay-content">
                    <a href="#aboutme" onClick={closeNav}>sobre mí</a>
                    <a href="#projects" onClick={closeNav}>proyectos</a>
                    <a href="#education" onClick={closeNav}>formación</a>
                    <a href="#skills" onClick={closeNav}>habilidades</a>
                    <a href="#experiences" onClick={closeNav}>experiencias</a>
                    <a href={PDF} download={DandaraAlmeida_pdf} onClick={closeNav}>CV.pdf</a>
                </div>
            </div>
            <span className="menuIcon" onClick={openNav}><i className="fa fa-bars" aria-hidden="true"></i></span>
        </>
    )      
}
 
export default Menu;
