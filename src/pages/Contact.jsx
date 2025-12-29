import "../App.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-header">
        <p className="section__text__p1">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
      </div>
      
      <div className="contact-wrapper">
        {/* Main Direct Contact Cards */}
        <div className="contact-methods">
          <div className="contact-card details-container">
            <img src="/assets/email.png" alt="Email" className="icon contact-icon" />
            <h3>Email</h3>
            <p>john.doe.ai@email.com</p>
            <a href="mailto:john.doe.ai@email.com" className="contact-link">Send Message</a>
          </div>

          <div className="contact-card details-container">
            <img src="/assets/linkedin.png" alt="LinkedIn" className="icon contact-icon" />
            <h3>LinkedIn</h3>
            <p>Professional Network</p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">Connect Now</a>
          </div>
        </div>

        {/* Professional Networks Section */}
        <div className="ai-networks-container">
          <h2 className="sub-title">Research & Code</h2>
          <div className="network-grid">
            
            
            <a href="https://github.com/thawzin07" target="_blank" rel="noreferrer" className="network-card details-container">
              <div className="network-content">
                <img src="/assets/github.png" className="icon" alt="GitHub" />
                <div>
                  <h3>GitHub</h3>
                  <p>View My Repositories</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;