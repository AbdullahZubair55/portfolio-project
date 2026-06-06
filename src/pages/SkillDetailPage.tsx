import { useParams, Link } from 'react-router-dom'

const SKILL_INFO: Record<string, { title: string; icon: string; color?: string; description: string; highlights?: string[] }> = {
  html: {
    title: 'HTML',
    icon: '📄',
    color: '#E34F26',
    description:
      'HTML (HyperText Markup Language) is the backbone of the web. It provides structure for content and tells the browser how to display elements.',
    highlights: ['Semantic elements', 'Forms & inputs', 'Accessibility basics']
  },
  css: {
    title: 'CSS',
    icon: '🎨',
    color: '#2965f1',
    description:
      'CSS (Cascading Style Sheets) controls presentation — layout, colors, typography, and responsive design for different screens.',
    highlights: ['Flexbox & Grid', 'Responsive design', 'Animations & transitions']
  },
  javascript: {
    title: 'JavaScript',
    icon: '⚡',
    color: '#f7df1e',
    description:
      'JavaScript enables interactivity in the browser: updating the DOM, handling events, and fetching data from APIs.',
    highlights: ['ES6+', 'Async/Await', 'DOM manipulation']
  },
  react: {
    title: 'React',
    icon: '⚛️',
    color: '#61dafb',
    description:
      'React is a component-based library for building UIs. It encourages reusable components and declarative rendering.',
    highlights: ['Components & props', 'Hooks', 'Routing & state management']
  },
  git: {
    title: 'Git',
    icon: '🔧',
    color: '#f34f29',
    description:
      'Git is a distributed version control system. It lets you track changes, branch, merge, and collaborate safely with others.',
    highlights: ['Commits & branches', 'Merging', 'Resolving conflicts']
  },
  github: {
    title: 'GitHub',
    icon: '🌐',
    color: '#24292f',
    description:
      'GitHub hosts repositories and provides collaboration features like PRs, issues, and CI/CD integration.',
    highlights: ['Pull requests', 'Code review', 'Actions & workflows']
  }
}

function SkillDetailPage() {
  const { skill } = useParams<{ skill: string }>()
  const info = skill ? SKILL_INFO[skill.toLowerCase()] : undefined

  if (!info) {
    return (
      <section className='skill-detail container'>
        <h2>Skill not found</h2>
        <p>We couldn't find information for "{skill}".</p>
        <p>
          <Link className='back-link' to='/skills'>Back to skills</Link>
        </p>
      </section>
    )
  }

  return (
    <section className='skill-detail container'>
      <h2>
        <span className='skill-icon-large' aria-hidden>{info.icon}</span>
        {info.title}
      </h2>

      <p>{info.description}</p>

      {info.highlights && (
        <ul>
          {info.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      <p>
        <Link className='back-link' to='/skills'>Back to skills</Link>
      </p>
    </section>
  )
}

export default SkillDetailPage
