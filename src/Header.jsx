import logo from '../src/assets/logo.png';
import img4 from '../src/assets/img4.jpg';


function Header(){
    return(
        <>
<header className="header" id="home">
    
         <div className="container">
         
        <nav className="navbar">

                        <div className="logo">
                        <img src={logo} alt="Prabhakaran Logo" />
                        </div>

                       <ul className="nav-menu" id="navMenu">
                                <li><a href="#home" className="nav-link">Home</a></li>
                                <li><a href="#about" className="nav-link">About</a></li>
                                <li><a href="#services" className="nav-link">Services</a></li>
                                <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                                <li><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                        
                        <div class="menu-toggle" id="menuToggle">
                
                         </div>

                            
        </nav>
    

           
      <div className="hero-section">
            <div className="hero-text">

                    <p className="hero-role">Frontend / UI-UX Designer</p>

                      <h1> Hi, I'm <span className="highlight">Prabhakaran</span></h1>
                       <h2 className="hero-subtitle">Building Modern & Responsive Web Applications</h2>

                        <p className="hero-description">
                            Passionate Frontend Developer specializing in modern UI,
                            responsive web design, and scalable applications using
                            JavaScript, React, and modern web technologies.
                        </p>

                        <div className="hero-buttons">
                            <a href="#portfolio" className="btn primary-btn">View My Work</a>
                            <a href="#contact" className="btn secondary-btn">Hire Me</a>
                        </div>

            </div>
        </div>

    </div>
</header>
        </>
    );
}
export default Header