"use client"

import { SetStateAction, useState } from 'react';
import { Container } from './Container';

export const AsessmentContent = () => {
  const testimonials = [
    {
      initials: 'DO',
      color: '#f8b195',
      quote:
        "As a leading shared streaming subscription merchant, we were one of the first to join GamsGo's full management model in 2023. Through the platform's subscription management system, we not only saved on operational costs but also achieved significant improvements in user retention. Last year, popular subscriptions like Netflix and Crunchyroll became our best-selling products, leading to a 60% increase in quarterly sales. We focused on providing high-quality accounts, while GamsGo handled operations and customer support.",
      name: 'David Owens',
      title: 'Digital Content Vertical Merchant',
    },
    {
      initials: 'JD',
      color: '#c06c85',
      quote:
        "GamsGo's platform allowed us to scale our business efficiently. By reducing overhead and managing subscriptions seamlessly, we saw a marked increase in customer satisfaction and revenue.",
      name: 'Jane Doe',
      title: 'Streaming Service Provider',
    },
    // Add more testimonials if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to handle dot clicks
  const handleDotClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      <div className="flex justify-center items-center mx-16 mt-28 ">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full flex space-x-8 relative h-[250px]">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)} // Add click handler for each dot
                className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <div
            className="flex items-center justify-center rounded-full w-20 h-20 mt-[50px]"
            style={{ backgroundColor: testimonials[currentIndex].color }}
          >
            <span className="text-3xl font-bold text-black">{testimonials[currentIndex].initials}</span>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <blockquote className="text-lg italic mb-2 overflow-y-auto max-h-[200px]">
              {testimonials[currentIndex].quote}
            </blockquote>
            <div>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500">{testimonials[currentIndex].title}</p>
            </div>
          </div>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <button
              onClick={handlePrevious}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-200 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="9.8984375" height="6.364013671875" viewBox="0 0 9.8984375 6.364013671875">
                <g transform="matrix(0,-1,-1,0,16.262451171875,16.262451171875)">
                  <g transform="matrix(-0.7071067690849304,0.7071067690849304,-0.7071067690849304,-0.7071067690849304,35.76131334783449,7.813643768468779)">
                    <rect x="16.26239824295044" y="11.313232421875" width="7" height="2" rx="1" fill="#262743"></rect>
                  </g>
                  <g transform="matrix(0.7071068286895752,0.7071067690849304,-0.7071067690849304,0.7071068286895752,7.8134472208135435,-6.1353045543300055)">
                    <rect x="11.312691450119019" y="6.364013671875" width="7" height="2.000000238418579" rx="1.0000001192092896" fill="#262743"></rect>
                  </g>
                </g>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-200 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="9.8984375" height="6.364013671875" viewBox="0 0 9.8984375 6.364013671875">
                <g transform="matrix(0,1,-1,0,9.8984375,-9.8984375)">
                  <g transform="matrix(-0.7071067690849304,0.7071067690849304,-0.7071067690849304,-0.7071067690849304,31.261276201902632,-3.0504070493380766)">
                    <rect x="16.26239824295044" y="4.94921875" width="7" height="2" rx="1" fill="#262743"></rect>
                  </g>
                  <g transform="matrix(0.7071068286895752,0.7071067690849304,-0.7071067690849304,0.7071068286895752,3.3134100748816877,-7.9992807009483755)">
                    <rect x="11.312691450119019" y="0" width="7" height="2.000000238418579" rx="1.0000001192092896" fill="#262743"></rect>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}






