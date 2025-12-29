import "../App.css";

const Education = () => {
  const skills = [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Backend", items: ["Node JS", "Express", "Git", "MongoDB"] }
  ];

  return (
    <section id="education">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Education & Skills</h1>
      <div className="about-containers">
        {skills.map((skill, index) => (
          <div key={index} className="details-container">
            <h2 className="education-sub-title">{skill.title}</h2>
            <div className="article-container">
              {skill.items.map(item => (
                <article key={item}>
                  <img src="/assets/checkmark.png" className="icon" alt="Check" />
                  <div>
                    <h3>{item}</h3>
                    <p>Proficient</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;