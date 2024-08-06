import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import avatarPlaceholder from '../asetes/Profile_avatar_placeholder_large.png'; // Placeholder avatar image

const reviewsData = [
  {
    id: 1,
    name: 'Rajesh P',
    date: '27 Feb 2023',
    rating: 5.0,
    comment: 'Exact food destination for all types of foods. Food is awesome and no question about the quality and the services. Meat was extremely well cooked. Even Though it is crowded, they have maintained very hygiene as well as the rest rooms. Recommended!!!',
  },
  {
    id: 2,
    name: 'S Joseph',
    date: '22 Feb 2023',
    rating: 4.5,
    comment: 'This restaurant is situated in Lulu mall and with vast and hygienic area. It is famous for biriyani, Karimeen pollichathu and Traditional French soup. It was really amazing experience in the restaurant and visited this hotel many times and enjoyed food.',
  },
  {
    id: 3,
    name: 'Dennis',
    date: '10 Feb 2023',
    rating: 4.0,
    comment: 'The restaurant is located at the Lulu mall. Restaurant famous for Karmeen (fish fry preparation), Fish curry, seafood, chicken & beef dishes. They are also famous for their biriyanis. Also try the coconut pudding for dessert. All excellent. Strong reputation, great quality & friendly staff.',
  },
  {
    id: 4,
    name: 'Mrithunjoy Gupta',
    date: '15 Dec 2018',
    rating: 3.5,
    comment: 'Please ensure your menu is kept on record, Kerala meal is out & not available',
  },
  // Add more reviews as needed
];

function Review() {
  const [reviews, setReviews] = useState(reviewsData);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, comment, rating } = newReview;
    if (name && comment && !isNaN(parseFloat(rating))) {
      setReviews([
        ...reviews,
        {
          ...newReview,
          id: reviews.length + 1,
          date: new Date().toLocaleDateString(),
          rating: parseFloat(rating),
        },
      ]);
      setNewReview({ name: '', comment: '', rating: '' });
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Reviews & Ratings</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Start Your Review</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Rating:</label>
              <input
                type="number"
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                min="1"
                max="5"
                step="0.1"
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Comment:</label>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition duration-200">
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 max-h-[500px] overflow-y-auto bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 mb-4 border rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={avatarPlaceholder} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
                <span className="ml-2 text-gray-600">{parseFloat(review.rating).toFixed(1)}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
