import { Link } from 'react-router-dom'

function Skills() {
  const skills = [
    { name: 'HTML', icon: '📄', desc: 'Structure web content' },
    { name: 'CSS', icon: '🎨', desc: 'Style and layout' },
    { name: 'JavaScript', icon: '⚡', desc: 'Interactive behavior' },
    { name: 'React', icon: '⚛️', desc: 'Component-based UI' },
    { name: 'Git', icon: '🔧', desc: 'Version control' },
    { name: 'GitHub', icon: '🌐', desc: 'Repository hosting' }
  ]

  const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <section id='skills' className='skills'>
      <h2>Skills</h2>

      <div className='skills-container grid'>
        {skills.map((skill, index) => (
          <Link to={`/skills/${slug(skill.name)}`} key={index} className='skill-card-link'>
            <div className='skill-card' role='button' aria-label={`Open ${skill.name} details`}>
              <div className='skill-icon'>{skill.icon}</div>
              <div className='skill-name'>{skill.name}</div>
              <div className='skill-desc'>{skill.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Skills