import img from '../src/assets/img1.png';
import  { useState } from "react";

function Section() {

const [activeTab, setActiveTab] = useState("skills");
    return(
        <>
<section className="about-section" id="about">
      <div className="container">

        <div className="about-grid">

                    <div className="about-image">
                        <img src={img} alt="Prabhakaran Profile Photo"/>
                    </div>

        <div className="about-content">

                 <h2 className="section-title">About Me</h2>

                    <p className="about-description">
                    I am a passionate <strong>Front end Developer</strong> with experience in building
                    responsive and scalable web applications. With a strong background in 
                    <strong>Electronics and Communication Engineering</strong>, I combine analytical
                    thinking with modern web technologies to deliver efficient and user-friendly
                    digital solutions.<br/>
                    Designing and building high-performance, scalable, and user-centric web applications. Strong expertise in
React 18, JavaScript (ES6+), HTML5, CSS3, and Bootstrap, with a deep understanding of modern UI
architecture, responsive design, and performance optimization.Proven ability to develop clean,
maintainable, and reusable components while improving application efficiency and user experience.</p>
                    

                    <p className="about-description">
                    I specialize in creating dynamic interfaces using modern technologies like
                    JavaScript, React, and cloud-based tools while focusing on performance,
                    usability, and maintainability.
                    </p>

       
        <div className="about-tabs">

                    <button className={activeTab === "skills" ? "tab-button active" : "tab-button"}onClick={() => setActiveTab("skills")}>Skills</button>

                    <button className={activeTab === "experience" ? "tab-button active" : "tab-button"}onClick={() => setActiveTab("experience")}>Experience</button>

                    <button className={activeTab === "education" ? "tab-button active" : "tab-button"}onClick={() => setActiveTab("education")}>Education</button>

        </div>

       {activeTab === "skills" && (
    <div className="tab-content">
      <ul className="info-list">
        <li><span>Frontend</span> HTML, CSS, JavaScript, React</li>
        <li><span>Backend</span> Node.js, Express, REST APIs</li>
        <li><span>Database</span> MongoDB, SQL</li>
        <li><span>Tools</span> Git, GitHub, VS Code</li>
      </ul>
    </div>
  )}

  {/* Experience */}
  {activeTab === "experience" && (
    <div className="tab-content">
      <ul className="info-list">
        <li>
          <span>2023 – 2024</span>
          Junior Software Developer (intern)— Loveland Solution
        </li>

        <li>
          <span>2022 – 2023</span>
          Software Developer Intern — Notascos Technology
        </li>
      </ul>
    </div>
  )}

  {/* Education */}
  {activeTab === "education" && (
    <div className="tab-content">
      <ul className="info-list">
        <li>
          <span>2018 – 2022</span>
          B.E Electronics & Communication Engineering  
          Kamaraj College of Engineering and Technology
        </li>

        <li>
          <span>2022 – 2023</span>
          Software Developer Program  
          Notascos Technology
        </li>
      </ul>
    </div>
  )}
</div>
</div>

  </div>
</section>


</>

    );
}
export default Section