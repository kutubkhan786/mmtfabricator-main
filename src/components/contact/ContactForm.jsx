import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";


function ContactForm() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            // Send to Admin
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_TO_ADMIN,
                formRef.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            // Auto Reply to User
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_TO_USER,
                formRef.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            setStatus("Message sent successfully ✅");
            formRef.current.reset();
        } catch (error) {
            console.error(error);
            setStatus("Something went wrong ❌");
        }

        setLoading(false);
    };

    return (
        <section className="contact-section">
            <div className="contact-card">
                <h2 className="contact-heading">Contact Us</h2>

                <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                    <input name="user_name" placeholder="Your Name" required className="contact-input" />
                    <input name="user_email" type="email" placeholder="Your Email" required className="contact-input" />
                    <input name="subject" placeholder="Subject" required className="contact-input" />
                    <textarea name="message" placeholder="Your Message" required className="contact-textarea" />

                    <button type="submit" disabled={loading} className="contact-button">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {status && <p className="contact-status">{status}</p>}
            </div>
        </section>
        //         <section className="contact-section">
        //   <div className="contact-wrapper">

        //     {/* LEFT SIDE - MAP */}
        //     <div className="contact-map">
        //       <iframe
        //         title="location"
        //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.595123456789!2d72.8777!3d19.0760"
        //         allowFullScreen=""
        //         loading="lazy"
        //       ></iframe>
        //     </div>

        //     {/* RIGHT SIDE - FORM */}
        //     <div className="contact-card">
        //       <h2 className="contact-heading">Contact Us</h2>

        //       <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        //         <input name="user_name" placeholder="Your Name" required className="contact-input" />
        //         <input name="user_email" type="email" placeholder="Your Email" required className="contact-input" />
        //         <input name="subject" placeholder="Subject" required className="contact-input" />
        //         <textarea name="message" placeholder="Your Message" required className="contact-textarea" />

        //         <button type="submit" disabled={loading} className="contact-button">
        //           {loading ? "Sending..." : "Send Message"}
        //         </button>
        //       </form>

        //       {status && <p className="contact-status">{status}</p>}
        //     </div>

        //   </div>
        // </section>


    );
}

export default ContactForm;
