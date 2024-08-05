import React from 'react';

function AboutUs() {
  return (
    
    <section id="about-section" className=" about-us m-1 bg-gray-100 bg-opacity-35 py-10 shadow-sm px-5 md:px-20 lg:px-40">
        
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif mb-5">About Us</h2>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <strong>MSPC Restaurant</strong>, where exceptional cuisine meets an inviting atmosphere. 
          Since our establishment, MSPC Restaurant has been dedicated to offering a diverse menu crafted with the freshest, 
          locally-sourced ingredients.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our talented chefs blend traditional recipes with modern culinary techniques to provide a unique dining experience. 
          Whether you're joining us for a special occasion or a casual meal, we are committed to making your visit unforgettable.
        </p>
        <div className="features grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
          <div className="feature-item p-5 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Fresh, Local Ingredients</h3>
            <p>
              At MSPC Restaurant, we prioritize freshness and quality. Our dishes are prepared using ingredients sourced 
              from local farms and markets, ensuring every bite is as fresh as possible.
            </p>
          </div>
          <div className="feature-item p-5 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Experienced Chefs</h3>
            <p>
              Our culinary team brings a wealth of experience and a passion for innovative cuisine. 
              We aim to surprise and delight your taste buds with each dish.
            </p>
          </div>
          <div className="feature-item p-5 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Cozy Dining Ambiance</h3>
            <p>
              Our restaurant offers a warm and welcoming environment, perfect for everything from romantic dinners 
              to family gatherings. Enjoy your meal in a relaxed and comfortable setting.
            </p>
          </div>
        </div>
        <p className="text-lg leading-relaxed mt-6">
          At MSPC Restaurant, we believe in creating more than just a meal; we aim to provide a memorable dining experience. 
          Thank you for choosing us, and we look forward to serving you soon!
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
