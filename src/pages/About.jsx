import "../App.css";

const About = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/assets/profile-pic.jpg" alt="ThawZin Htun profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">ThawZin Htun</h1>
        <p className="section__text__p2">I am a Software Engineer specializing in Applied Artificial Intelligence. 
          Currently pursuing a BSc in Applied AI at Singapore Institute of Technology (est. 2028), 
          I hold a Diploma in IT from Singapore Polytechnic, with a focus on Software Engineering and
           a minor in 5G & AIoT. I combine strong software development skills with AI expertise 
           to build intelligent, practical solutions.</p>
        
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('/assets/Resume.pdf')}>
            Resume
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href='/contact'}>
            Contact Info
          </button>
        </div>

        {/* Improved Socials Layout */}
        <div id="socials-container">
          <div className="social-icon-wrapper">
            <img 
              src="/assets/linkedin.png" 
              alt="LinkedIn" 
              className="social-icon" 
              onClick={() => window.open('https://www.linkedin.com/in/thawzin-htun/', '_blank')} 
            />
          </div>
          <div className="social-icon-wrapper">
            <img 
              src="/assets/github.png" 
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