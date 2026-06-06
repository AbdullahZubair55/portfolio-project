import { Link } from 'react-router-dom'

function Navbar() {
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' }
  ]

  return (
    <nav className='navbar'>
      <h1>Abdullah Portfolio</h1>

      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar