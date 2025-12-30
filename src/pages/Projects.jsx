import "../App.css";
// 1. Import your project images from the src/assets folder
import project1Img from "../assets/project-1.png";
import project2Img from "../assets/project-2.png";

const Projects = () => {
  const myProjects = [
    { 
      title: "Project One", 
      // 2. Use the imported variable name instead of a string path
      img: project1Img, 
      tags: ["HTML", "CSS", "JS"] 
    },
    { 
      title: "Project Two", 
      img: project2Img, 
      tags: ["React", "Node"] 
    }
  ];

  return (
    <section id="projects-page">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <div key={index} className="project-card details-container color-container">
            <div className="project-img-wrapper">
              {/* project.img now holds the correct Vite-processed path */}
              <img src={project.img} alt={project.title} className="project-img" />
            </div>
            <h2 className="project-title">{project.title}</h2>
            <div className="tech-stack">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="btn-container">
              <button className="btn btn-color-2" onClick={() => window.open('https://github.com/thawzin07')}>Github</button>
              <button className="btn btn-color-2" onClick={() => window.open('#')}>Demo</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;