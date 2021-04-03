import Menu from './Menu';
import '../style/header.scss';
import '../style/toggleSwitch.scss';

function Header() {
    const modes = (ev) => {
        const body = document.body;
        body.classList.toggle("light-mode");
    }
    return (
        <div className="line">
            <Menu />
            <input className="l" type="checkbox" onChange={modes} />
        </div>

    )
}
export default Header;
