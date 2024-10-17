import { useState } from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail, AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";
import Section from "./Section";
import Heading from "./Heading";
import { GradientLight } from "./design/Benefits";
import { Gradient } from "./design/Hero";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message, number } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_2o5q5p9";
    const templateID = "template_4julibc";
    const userID = "9jfKsifhXUcbK9RZH";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Section id="contact">
      <div className="container mx-auto px-4 py-8">
        <Heading
          title="Get In Touch"
          text="Reach out to us below"
          className="gradient-animation"
        />

        <div className="mt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex lg:flex-row gap-5 flex-col z-1">
              <div className="flex items-center bg-yellow-600 rounded-lg hover:bg-blue-400 transition py-2 px-4">
                <AiOutlineMail className="text-2xl mr-2" />
                <a
                  href="mailto:info@raisingconsciousness.co.za"
                  className="text-white"
                >
                  info@raisingconsciousness.co.za
                </a>
              </div>
              <div className="flex items-center bg-green-500 rounded-lg hover:bg-blue-400 transition py-2 px-4">
                <AiOutlineWhatsApp className="text-2xl mr-2" />
                <a href="https://wa.me/27783479977" className="text-white">
                  078 347 9977
                </a>
              </div>
              <div className="flex items-center bg-violet-600 rounded-lg hover:bg-blue-400 transition py-2 px-4">
                <AiFillPhone className="text-2xl mr-2" />
                <a href="tel:+27783479977" className="text-white">
                  078 347 9977
                </a>
              </div>
            </div>
          </div>

          <GradientLight className="z-0" />
          <form
            onSubmit={handleSubmit}
            className="mt-6 bg-white/15 rounded-lg shadow-lg p-6"
          >
            {!isFormSubmitted ? (
              <div className="flex flex-col space-y-4">
                <input
                  className="border border-gray-300 rounded-lg p-2"
                  type="text"
                  required
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={handleChangeInput}
                />
                <input
                  className="border border-gray-300 rounded-lg p-2"
                  type="email"
                  required
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
                <input
                  className="border border-gray-300 rounded-lg p-2"
                  type="text"
                  required
                  placeholder="Your Number"
                  name="number"
                  value={number}
                  onChange={handleChangeInput}
                />
                <textarea
                  required
                  className="border border-gray-300 rounded-lg p-2"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
                <button
                  type="submit"
                  className={`mt-4 bg-teal-600 text-white rounded-lg p-2 hover:bg-blue-500 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {!loading ? "Send Message" : "Sending..."}
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl">
                  <span className="font-bold">Thank you</span> for getting in
                  touch, <span className="font-bold">{name}</span>!
                </h3>
              </div>
            )}
          </form>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
