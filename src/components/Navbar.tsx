function Navbar() {
  const navLinks = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Contact'
  ]

  return (
    <nav className='navbar'>
      <h1>Abdullah Portfolio</h1>

      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar