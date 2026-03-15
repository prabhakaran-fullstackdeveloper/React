import { useState } from "react";

function ContactForm() {

const scriptURL = "https://docs.google.com/spreadsheets/d/1ZWIeZoFUPKxEt8vVmZOTy8VRWhVHqHkqUsTVensjzsI/edit?usp=sharinghttps://docs.google.com/spreadsheets/d/1ZWIeZoFUPKxEt8vVmZOTy8VRWhVHqHkqUsTVensjzsI/edit?usp=sharing";

const [msg, setMsg] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  setLoading(true);

  try {

    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    });

    if (response.ok) {

      setMsg("✅ Message sent successfully!");
      form.reset();

      setTimeout(() => {
        setMsg("");
      }, 5000);

    } else {
      throw new Error("Submission failed");
    }

  } catch (error) {

    setMsg("❌ Failed to send message. Please try again.");
    console.error(error);

  }

  setLoading(false);
};

return (

  <div className="contact-form">

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="Name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="Email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="Message"
        rows="6"
        placeholder="Your Message"
      ></textarea>

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>

    <p>{msg}</p>

  </div>

);

}

export default ContactForm;