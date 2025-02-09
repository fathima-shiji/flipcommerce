
import "./NavBar.css";
const NavBar = () => {
    return (
        <nav>
          <ul className="main-nav">
            <li>
              <a class="nav-link active" href="/">Movies</a>
            </li>
            <li>
              <a class="nav-link" href="/shows">TV Shows</a>
            </li>
          </ul>
        </nav>
    );
}
export default NavBar