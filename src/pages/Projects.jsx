import "../App.css";

const Projects = () => {
  const myProjects = [
    { title: "Project One", img: "/assets/project-1.png", tags: ["HTML", "CSS", "JS"] },
    { title: "Project Two", img: "/assets/project-2.png", tags: ["React", "Node"] }
  ];

  return (
    <section id="projects-page">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <div key={index} className="project-card details-container color-container">
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.title} className="project-img" />
            </div>
            <h2 className="project-title">{project.title}</h2>
            <div className="tech-stack">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="btn-container">
              <button className="btn btn-color-2" onClick={() => window.open('#')}>Github</button>
              <button className="btn btn-color-2" onClick={() => window.open('#')}>Demo</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;