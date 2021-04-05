import '../style/menu.scss';
import PDF from '../source/Dandara-CV.pdf';

function Menu() {

    const toggleSidebar = () => {
        const box = document.getElementById('sidebar');
        box.classList.toggle("active");
        const btn = document.getElementById('sidebar-btn');
        btn.classList.toggle("toggle");
    }

    const DandaraAlmeida_pdf = '../source/Dandara-CV.pdf'
    return (
        <div className="sidebar" id="sidebar">
            <ul>
                <li><a href="#aboutme">about</a></li>
                <li><a href="#education">education</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#experiences">work</a></li>
                <li><a href={PDF} download={DandaraAlmeida_pdf}>PDF</a></li>
            </ul>
            <button id="sidebar-btn" className="sidebar-btn" onClick={toggleSidebar}>
                <span></span>
            </button>
        </div>

    );
}

export default Menu;
