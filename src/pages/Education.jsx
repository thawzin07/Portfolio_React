import "../App.css";
import checkmarkIcon from "../assets/checkmark.png";

const Education = () => {
  // Grouped skills for the highlighted buttons
  const skills = [
    "JavaScript", "Java", "SQL", "Prompt Engineering", 
    "React", "Node JS", "Python", "Git", "MongoDB"
  ];

  return (
    <section id="education">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Education & Skills</h1>

      <div className="education-details-container">
        
        {/* --- EDUCATION TIMELINE SECTION --- */}
        <div className="about-containers">
          <div className="details-container">
            <h2 className="education-sub-title">Formal Education</h2>
            <div className="timeline-container">
              
              <article className="education-item">
                <img src={checkmarkIcon} className="icon" alt="Check" />
                <div>
                  <h3>Diploma in Information Technology</h3>
                  <h4>Specialized in Software Engineer with Minor in 5G & AIoT</h4>
                  <p>Singapore Polytechnic</p>
                </div>
              </article>

              <article className="education-item">
                <img src={checkmarkIcon} className="icon" alt="Check" />
                <div>
                  <h3>Bachelor of Engineering (Civil)</h3>
                  <p>Mandalay Technological University</p>
                  <p className="sub-detail">Discontinued - Completed foundation year in 2020</p>
                  <p className="merits">Excellence Merits: Engineering Mathematics, Physics, Chemistry, AutoCAD Drawing, English</p>
                </div>
              </article>

              <article className="education-item">
                <img src={checkmarkIcon} className="icon" alt="Check" />
                <div>
                  <h3>High School Diploma</h3>
                  <p>Basic Education High School No. 4 Hlaing, Myanmar | 2018</p>
                  <p className="sub-detail">Equivalent to IGCSE O-levels - Distinctions in Math, Physics, Chemistry, Biology, Myanmar</p>
                </div>
              </article>

              <article className="education-item">
                <img src={checkmarkIcon} className="icon" alt="Check" />
                <div>
                  <h3>Practical A+ Certificate</h3>
                  <p>KMD Institute</p>
                  <p className="sub-detail">Training in installation, configuration, maintenance and troubleshooting of IT systems</p>
                </div>
              </article>

            </div>
          </div>

          {/* --- SKILLS BUTTONS SECTION --- */}
          <div className="details-container">
            <h2 className="education-sub-title">Technical Skills</h2>
            <div className="skills-badge-container">
              {skills.map((skill) => (
                <button key={skill} className="skill-badge">
                  {skill}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;