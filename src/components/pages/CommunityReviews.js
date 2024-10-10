import React from 'react';
import './CommunityReviews.css';

const CommunityReviews = () => {
  const reviews = [
    {
      name: 'Nisarga Gauda',
      rating: 5,
      days: '5 Days • Kashmir',
      review: "The Tarzan way team I can’t thank you enough for helping me plan my trip. You guys are amazing. The entire team was so responsive & planned everything really well. I will definitely recommend TTW for any trip. Kudos to you guys. Lots of Love ❤️❤️",
      img: 'https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg', // Update image paths
    },
    {
      name: 'Prasenjit Sharma',
      rating: 5,
      days: '6 Days • Kashmir',
      review: "Thank you The Tarzan Way...It was an experience to remember and very moderate experience cost..Love the way they handled things. Perfect hotels, rich experience and memories to collect. Thanks TTW.. will definitely look forward to the next trip..",
      img: 'https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg',
    },
    {
      name: 'Hema Chandhiran',
      rating: 5,
      days: '8 Days • North East',
      review: "Thank you for the trip plan TTW. We had a lot of fun. Please convey our gratitude for the cab driver. He was very humble, polite, and helpful.",
      img: '    https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg',
    },
    {
      name: 'Eric Dsouza',
      rating: 5,
      days: '10 Days • Meghalaya',
      review: "Devayani and her team have been amazing from their meticulous attention to detail, to answering all my queries. The trip was memorable thanks to the team at The Tarzan Way. I cannot recommend them enough!",
      img: 'https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg',
    }
  ];

  return (
    <div className="community-container">
      <div className='plan-heading'>Happy Community of The Tarzan Way</div>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.img} alt={review.name} />
            <div className="review-content">
              <p>{review.review}</p>
              <h4 style={{textAlign : "left" , marginLeft:"0px"}}>{review.name}</h4>
              <div className="rating">
                {'★'.repeat(review.rating)} {/* Generate stars */}
              </div>
              <p>{review.days}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityReviews;
