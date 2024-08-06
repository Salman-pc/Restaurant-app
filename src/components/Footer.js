import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='m-0'>
      <footer id="footer-section" className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 transition-transform duration-300 hover:scale-105">MSPC Restaurant</h2>
            <p>&copy; 2024 MSPC Restaurant Pvt. Ltd</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Link to="/About"> <h3 className='font-semibold text-lg mb-2 hover:underline'>About us</h3> </Link>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul>
                <li><a href="#careers" className="hover:underline">Careers</a></li>
                <li><a href="#team" className="hover:underline">Team</a></li>
                <li><a href="#swiggy-one" className="hover:underline">MSPC One</a></li>
                <li><a href="#swiggy-instamart" className="hover:underline">MSPC Instamart</a></li>
                <li><a href="#swiggy-genie" className="hover:underline">MSPC Genie</a></li>
              </ul>
            </div>

            <div>
              <Link to="/Contact"> <h3 className="font-semibold text-lg hover:underline mb-2">Contact Us</h3> </Link>
              <ul>
                <li><a href="#help-support" className="hover:underline">Help & Support</a></li>
                <li><a href="#partner-with-us" className="hover:underline">Partner with Us</a></li>
                <li><a href="#ride-with-us" className="hover:underline">Ride with Us</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#cookie-policy" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#investor-relations" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-8">
          <h3 className="font-semibold mb-2">We deliver to:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div>Bangalore</div>
            <div>Gurgaon</div>
            <div>Hyderabad</div>
            <div>Delhi</div>
            <div>Mumbai</div>
            <div>Pune</div>
            <div>589 cities</div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="container mx-auto mt-8 text-center">
          <h3 className="font-semibold mb-2">Follow Us:</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-2xl hover:text-blue-600"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl hover:text-pink-600"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl hover:text-blue-400"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-2xl hover:text-blue-700"></i>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
