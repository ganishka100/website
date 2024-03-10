import React from 'react';
import './Contact.css';
import envelope from '../Contact/envelope.gif';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "49a81ca4-33cd-4726-8a38-4cda3278374e");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("Error occurred while submitting the form.");
        }
    };

    return (
        <div>
            <div className="container" style={{ marginTop: "90px" }} id="contact">
                <h5 className='contact_sm text-center mt-0 mt-md-3'>CONTACT US</h5>
                <h2 className='contact_bg text-center'>Get In Touch</h2>

                <div className="col-12 contact-form mt-5">
                    <div className="row">
                        <div className="col-lg-7 mt-5">
                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6 mb-4">
                                        <input type="text" className="form-control" placeholder="Your Name *" name="name" required />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input type="email" className="form-control" placeholder="Your Email *" name="email" required />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input type="text" className="form-control" placeholder="Your Address *" name="address" required />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input type="number" className="form-control" placeholder="Your Number *" name="number" required />
                                    </div>
                                    <div className="col-12 mb-4">
                                        <textarea className="form-control" placeholder="Your Message..." name="message" required style={{ border: "1px solid #212ea0" }}></textarea>
                                    </div>
                                    <div className="col-12 ">
                                        <button type="submit" className="btn contact_btn rounded-5 fs-5 ps-4 pe-4 mt-md-3 mb-5 mb-md-0">Submit Now</button>
                                    </div>
                                    <span className='sending'>{result}</span>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 mt-3">
                            <div className="content-box ms-sm-5">
                                <ul className="info-box clearfix list-unstyled">
                                    <li>
                                        <h3>Send us a message<img src={envelope} alt=".." width="80px" /></h3>
                                    </li>
                                    <li className="fs-6">
                                        <p className='text-muted'>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                                        <div>
                                            <div>
                                                <i className="fa-solid fa-envelope" ></i><a href="/" className='text-muted mx-2' style={{ textDecoration: "none", fontWeight: "400" }}>  Contact BhumikaNathwani@dev.</a>
                                            </div>
                                            <i className="fas fa-phone-alt mt-2"></i>
                                            <a href="/" className='text-muted mt-4 mx-2' style={{ textDecoration: "none" }}>  +91 798-323-6162</a>
                                            <div>
                                                <i className="fa-solid fa-location-dot mt-2"></i>
                                                <a href="/" className='text-muted mx-2' style={{ textDecoration: "none" }}>  77 Massachusetts Ave, Cambridge U.S.</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
