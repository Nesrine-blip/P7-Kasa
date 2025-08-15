import { Link, NavLink } from 'react-router-dom' // Correction : Link avec majuscule
import logo from '../../assets/logo.svg'

// Tableau des liens de navigation
const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' }
]

function Header() {
    return (
        <header className="header">
            {/* Logo qui redirige vers la page d'accueil */}
            <Link to="/">
                <img src={logo} alt="Kasa" className="header__logo" />
            </Link>

            {/* Menu de navigation */}
            <nav className="header__nav">
                {navLinks.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.name}
                        className={({ isActive }) => 
                            isActive ? 'active-link' : ''
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header
