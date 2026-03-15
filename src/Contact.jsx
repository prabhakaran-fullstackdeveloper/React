import ContactForm from "./ContactForm";
import file from "../src/assets/prabhakaran.V(resume).pdf"
function Contact(){
    return(
        <section className="contact-section" id="contact">

            <div className="container">

                            <h2 className="section-title">Contact Me</h2>
                            <p className="section-subtitle">
                            Feel free to reach out for collaboration, project discussions, or job opportunities.
                            </p>

            <div className="contact-grid">

      
               <div className="contact-info">

                            <div className="contact-item"><i className="fa-solid fa-envelope"></i>
                                <span><a href="mailto:prabhakaranv48289@gmail.com">
                                prabhakaranv48289@gmail.com</a></span>
                            </div>

                                <div className="contact-item">
                                <i className="fa-solid fa-phone"></i>
                                <span>+91 81483 44835</span>
                                </div>

                                <div className="contact-item">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>India</span>
                                </div>

        
                                <div className="social-icons">

                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>

                               <a href="https://www.linkedin.com/in/prabhakaran-v-47773b229/" target="_blank">
                                      <i className="fa-brands fa-linkedin"></i>
                                </a>

                                <a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>

                                <a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>


                 </div>

        <a href={file} download className="btn primary-btn">
          Download CV
        </a>

      </div>


      
      <div className="contact-form">

        

          <ContactForm/>
        

        <span id="msg"></span>

      </div>

    </div>

  </div>

</section>
    );
}
export default Contact