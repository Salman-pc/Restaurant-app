import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

function ContactUs() {
  return (
    <section id="contact-section" className="contact-us bg-gray-100 py-10 bg-opacity-35 px-5 md:px-20 lg:px-40">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif mb-5">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-6">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, 
          feel free to reach out to us at MSPC Restaurant.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
          <div className="contact-info mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-2xl font-semibold mb-3">Get in Touch</h3>
            <p className="text-lg mb-3">Email: <a href="mailto:info@mspcrestaurant.com" className="text-blue-500">info@mspcrestaurant.com</a></p>
            <p className="text-lg mb-3">Phone: (123) 456-7890</p>
            <p className="text-lg">Address: 123 Foodie Lane, Culinary City, 45678</p>
          </div>
          <div className="social-media md:w-1/3">
            <h3 className="text-2xl font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/mspcrestaurant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={32} />
              </a>
              <a href="https://www.instagram.com/mspcrestaurant" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={32} />
              </a>
              <a href="mailto:info@mspcrestaurant.com" className="text-red-600 hover:text-red-800">
                <FaEnvelope size={32} />
              </a>
            </div>
          </div>
        </div>
        <p className="text-lg leading-relaxed mt-6">
          We look forward to connecting with you and making your dining experience memorable!
        </p>
      </div>
    </section>
  );
}

export default ContactUs;
