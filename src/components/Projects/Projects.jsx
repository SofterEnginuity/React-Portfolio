import projects from "../../data/projects"
import './Projects.css'
import ProjectCard from "../ProjectCard/ProjectCard.jsx"

const Projects = () => {
    return (
      
        <section class="projectlayout">
       <section>
        <h2 class="projectTitle">Projects</h2>
       </section>
          <section className="projectsContainer">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          </section>
        </section>
    )
}

export default Projects;