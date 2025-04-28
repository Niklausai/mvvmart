import React from 'react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      title: "Verified Customer",
      quote: "Manuva Mart has been my go-to for the last 6 months. The cards are always high quality and the customer service is outstanding. I've never had any issues with my purchases.",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Regular Buyer",
      quote: "I was skeptical at first, but Manuva Mart has proven to be reliable and secure. Their mobile payment system is easy to use and my orders are always processed quickly.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Thompson",
      title: "Premium Member",
      quote: "The selection of cards is impressive and the prices are competitive. I've recommended Manuva Mart to several friends who have all been equally satisfied with their experience.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name}'s avatar`} 
                  className="w-14 h-14 rounded-full mr-4 border-2 border-blue-500"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-600">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View all testimonials
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;