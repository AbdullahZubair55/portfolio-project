import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import projectsData from '../data/projects'
import { fetchUsers } from '../services/api'

type Project = {
  id: number
  title: string
  description: string
}

type User = {
  id: number
  name: string
  email: string
}

function Projects() {
  const [projects] = useState<Project[]>(projectsData)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data)
    })
  }, [])

  return (
    <section className='projects'>
      <h2>Projects</h2>

      <div className='projects-container'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      <h2>API Users</h2>

      {users.map((user) => (
        <div key={user.id} className='user-card'>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects