import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const ref = useRef<HTMLFormElement>(null);
	const [success, setSuccess] = useState(false);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (ref.current) {
			emailjs
				.sendForm(
					"service_4pasqyi",
					"template_k7bv08d",
					ref.current,
					"AU1p_xj5N1oAy9WJO"
				)
				.then(
					(result) => {
						console.log(result.text);
						setSuccess(true);
					},
					(error) => {
						console.log(error.text);
						setSuccess(false);
					}
				);
		}
	};

	return (
		<div className="contactSection">
			<div className="contactContainer">
				<div className="contactLeft">
					<form className="contactForm" ref={ref} onSubmit={handleSubmit}>
						<h2>Contact Me</h2>
						<input type="text" placeholder="Name" name="name" />
						<input type="text" placeholder="Email" name="email" />
						<textarea placeholder="Enquiry" name="message" rows={10}></textarea>
						<button type="submit">Send</button>
						{success &&
							"Your message has been sent. I will get back to you soon"}
					</form>
				</div>
				<div className="contactRight">
					<p>Hi</p>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
