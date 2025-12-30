import "../App.css";
// 1. Import your assets
import profilePic from "../assets/profile-pic.jpg";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import resumePdf from "../assets/Resume.pdf";

const About = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        {/* 2. Use the variable name, NOT a string */}
        <img src={profilePic} alt="ThawZin Htun profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">ThawZin Htun</h1>
        {/* ... description ... */}
        
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open(resumePdf)}>
            Resume
          </button>
          {/* ... contact button ... */}
        </div>

        <div id="socials-container">
          <div className="social-icon-wrapper">
            <img 
              src={linkedinIcon} 
              alt="LinkedIn" 
              className="social-icon" 
              onClick={() => window.open('https://www.linkedin.com/in/thawzin-htun/', '_blank')} 
            />
          </div>
          <div className="social-icon-wrapper">
            <img 
              src={githubIcon} 
              alt="Github" 
              className="social-icon" 
              onClick={() => window.open('https://github.com/thawzin07', '_blank')} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;