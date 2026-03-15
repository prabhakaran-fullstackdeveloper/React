function Services() {

const services = [
  {
    icon: "fa-solid fa-code",
    title: "Web Development",
    description:
      "I develop responsive and high-performance websites using modern technologies like HTML, CSS, JavaScript, and React to deliver fast, scalable web applications."
  },
  {
    icon: "fa-solid fa-crop",
    title: "UI / UX Design",
    description:
      "I design intuitive and visually appealing user interfaces focused on user experience, usability, and modern design principles."
  },
  {
    icon: "fa-brands fa-app-store-ios",
    title: "App Development",
    description:
      "I build scalable mobile and web applications with clean architecture, optimized performance, and smooth user experiences."
  }
];

return (
<section className="services-section" id="services">

<div className="container">

<h2 className="section-title">My Services</h2>

<p className="section-subtitle">
I build modern, scalable, and user-focused digital solutions for businesses and startups.
</p>

<div className="services-grid">

{services.map((service, index) => (

<div className="service-card" key={index}>

<div className="service-icon">
<i className={service.icon}></i>
</div>

<h3>{service.title}</h3>

<p>{service.description}</p>

<a href="#" className="service-link">
Learn More →
</a>

</div>

))}

</div>

</div>

</section>
);
}

export default Services;