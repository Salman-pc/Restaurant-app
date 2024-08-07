import React from 'react';
import SwiggyLogo from "../asetes/Swiggy Logo _ SVG _ Real Company _ Alphabet, Letter S Logo.png";
import ZomatoLogo from "../asetes/Zomato Logo _ 01 - PNG Logo Vector Brand Downloads (SVG, EPS).png";
import UberEatsLogo from "../asetes/ubers eats.png";
import FoodpandaLogo from "../asetes/foodpanda-logo-RGB-stacked.png";

function OurOnlinePartners() {
  const partners = [
    { name: 'Swiggy', logo: SwiggyLogo, link: 'https://www.swiggy.com' },
    { name: 'Zomato', logo: ZomatoLogo, link: 'https://www.zomato.com' },
    { name: 'Uber Eats', logo: UberEatsLogo, link: 'https://www.ubereats.com' },
    { name: 'Foodpanda', logo: FoodpandaLogo, link: 'https://www.foodpanda.com' },
  ];

  return (
    <div className="flex items-center justify-center h-auto w-full bg-white">
      <div className="w-full bg-white p-6">
        <h2 className="text-2xl font-bold flex justify-center text-gray-900 mb-4">Our Online Partners</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 w-25 md:w-40 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 mt-2 inline-block"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-20 h-20 object-contain mb-2"
                />
                <h3 className="text-lg text-center font-semibold text-gray-700">{partner.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurOnlinePartners;
