type ProjectCardProps = {
  title: string
  description: string
}

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className='project-card'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard