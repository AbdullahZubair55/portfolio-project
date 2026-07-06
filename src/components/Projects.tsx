import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import projectsData from '../data/projects'


type Project = {
  id: number
  slug: string
  title: string
  shortDescription: string
}

function Projects() {
  const [projects] = useState<Project[]>(projectsData)

  return (
    <section id='projects' className='projects'>
      <h2>Projects</h2>

      <div className='projects-container'>
        {projects.map((project) => (
          <Link to={`/projects/${project.slug}`} className='project-link' key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.shortDescription}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects