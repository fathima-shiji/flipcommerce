import NavBar from "./NavBar";

import "./header.css"

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="logo">
                    <a href="/">FLIXX</a>
                </div>
                <NavBar />
            </div>

        </header>
    )
}

export default Header;