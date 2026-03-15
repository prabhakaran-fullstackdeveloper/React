import img from '../src/assets/img2.png';
import img1 from '../src/assets/zoho1.png';
import img2 from '../src/assets/img3.png';

function Portfolio(){
    return(
<section className="portfolio-section" id="portfolio">
      <div className="container">

                <h2 className="section-title">My Work</h2>
                <p className="section-subtitle">
                Here are some of the projects I have developed using modern web technologies.
                </p>

            <div className="portfolio-grid">
                    <div className="portfolio-card">

                                <img src={img} alt="Restaurant Website"/>

                    <div className="portfolio-overlay">

                                <h3>Restaurant Website</h3>

                                <p>
                                    Responsive restaurant landing page built using
                                    HTML, CSS, and Bootstrap with modern UI design.
                                </p>

                                <a href="project1.html" target="_blank" className="project-link">
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                </a>

                    </div>

                     </div>


      
      <div className="portfolio-card">

                  <img src={img1} alt="Zoho Clone Website"/>

        <div className="portfolio-overlay">

                        <h3>Zoho Landing Page</h3>

                        <p>
                            A responsive Zoho-style website clone built using
                            HTML, CSS, and Bootstrap with modern layout techniques.
                        </p>

                        <a href="bootstrap.html" target="_blank" className="project-link">
                            <i className="fa-solid fa-up-right-from-square"></i>
                        </a>

        </div>

        </div>


      
      <div className="portfolio-card">

        <img src={img2} alt="Portfolio Website"/>

        <div className="portfolio-overlay">

                        <h3>Personal Portfolio</h3>

                        <p>
                            Modern developer portfolio built with responsive design,
                            animations, and interactive UI components.
                        </p>

                        <a href="#" className="project-link">
                            <i className="fa-solid fa-up-right-from-square"></i>
                        </a>

             </div>

              </div>

    </div>

  </div>

</section>
    );
}
export default Portfolio