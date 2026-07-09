import { Link, useParams } from 'react-router-dom'
import projectsData from '../data/projects'

function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projectsData.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className='project-detail-page'>
        <section className='project-detail-card'>
          <div className='project-detail-content'>
            <h1>Project not found</h1>
            <p>The requested project could not be found.</p>
            <Link className='back-link' to='/projects'>Back to projects</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className='project-detail-page'>
      <section className='project-detail-card'>
        <img src={project.image} alt={project.title} />
        <div className='project-detail-content'>
          <span className='eyebrow'>Featured Project</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          {(project.slug === 'e-commerce-web' ||
            project.slug === 'gym-fitrack') && (
              <div className='project-actions'>
                <a
                  href={
                    project.slug === 'e-commerce-web'
                      ? 'https://e-commerce-website-one-pied.vercel.app/'
                      : 'https://gym-website-three-gules.vercel.app/'
                  }
                  target='_blank'
                  rel='noreferrer'
                  className='project-action-btn'
                >
                  View Website
                </a><a
                  href={
                    project.slug === 'e-commerce-web'
                      ? 'https://github.com/AbdullahZubair55/E-commerce-website'
                      : 'https://github.com/AbdullahZubair55/Gym-website'
                  }
                  target='_blank'
                  rel='noreferrer'
                  className='project-action-btn secondary'
                >
                  View Code
                </a>
              </div>
            )}

          <Link className='back-link' to='/projects'>Back to projects</Link>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetailPage
