import './navbar.css'

export default function NavBar() {
    return (
        <nav className="nav-container">
            <div className="logo">
                <h3>NavLogo</h3>
            </div>
            <ul className="nav-links">
                <li>NavLink1</li>
                <li>NavLink2</li>
                <li>NavLink3</li>
                <li>NavLink4</li>
            </ul>
            <div className="rsvp">
                <a href="">+2348023022936</a>
            </div>
        </nav>
    )
}
