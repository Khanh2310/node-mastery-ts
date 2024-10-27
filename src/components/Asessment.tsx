"use client"

import { SetStateAction, useState } from 'react';
import { Container } from './Container';
import avatar1 from '@/images/screenshots/ilus1.png'
import avatar2 from '@/images/screenshots/ilus2.png'
import avatar3 from '@/images/screenshots/ilus3.png'
import avatar4 from '@/images/screenshots/ilus4.png'
import avatar5 from '@/images/screenshots/ilus5.png'
import dot from '@/images/screenshots/dot-icon.svg'
import Image from 'next/image';
export const Asessment = () => {
  const testimonials = [
    {
      initials: avatar1,
      quote:
        "Experience a significant increase in enrollment numbers as we drive authentic traffic to your courses from real students who are genuinely eager to learn. Our strategies ensure that your courses reach those who are not just browsing, are actively seeking the knowledge you offer. Say goodbye to stagnant numbers and hello to a vibrant classroom filled with engaged learners!",
      name: 'Boost Enrollment',
      title: 'Digital Content Vertical Merchant',
    },
    {
      initials: avatar2,
      quote:
        "Elevate your course ratings to new heights with our proven methodologies. We specialize in tailored solutions that foster positive reviews, helping your courses shine in the crowded marketplace. With our incredible starting price of just $0.50 for a 5-star rating, investing in your course’s reputation has never been more accessible. Watch as your ratings improve, bringing more visibility and credibility to your offerings!",
      name: 'Enhance Your Course Rating',
      title: 'Streaming Service Provider',
    },
    {
      initials: avatar3,
      quote:
        "Unlock your earning potential with our targeted approach that ensures your courses connect with the right audience. Our marketing strategies not only increase engagement but also foster positive reviews, leading to greater profitability. With our support, you’ll transform your passion for teaching into a sustainable income stream, empowering your financial freedom!",
      name: 'Maximize Your Revenue',
      title: 'Streaming Service Provider',
    },
    {
      initials: avatar4,
      quote:
        "Your peace of mind is our top priority. We are committed to maintaining the integrity of your Udemy account by strictly adhering to Udemy’s Terms of Service. Our ethical practices guarantee a secure and reliable experience, so you can focus on what you do best—creating exceptional courses—without worrying about your account’s safety.",
      name: '100% Account Safety',
      title: 'Streaming Service Provider',
    },
    {
      initials: avatar5,
      quote:
        "Gain invaluable insights into your campaign’s effectiveness with our advanced History Tracking Dashboard. This tool provides real-time updates on your performance, allowing you to make informed decisions and adjustments as needed. Our pay-per-success model ensures that you only invest in actions that yield results, making it a highly cost-effective and results-oriented solution that aligns with your goals.",
      name: 'Real-Time Performance Monitoring',
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
        <div className="bg-white rounded-lg shadow-lg p-6 w-full flex space-x-8 relative h-[330px]">
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
            className="flex items-center justify-center rounded-full w-[280px] h-[280px]"
          >
            <Image src={testimonials[currentIndex].initials} width={280} height={280} alt='' />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <blockquote className="text-lg italic mb-2 overflow-y-auto max-h-[200px]">
              {testimonials[currentIndex].quote}
            </blockquote>
            <div className='flex items-center'>
              <p className="font-semibold mr-4">{testimonials[currentIndex].name}</p>
              <Image src={dot} width={4} height={4} alt='' />
              <p className="text-gray-500 ml-4">{testimonials[currentIndex].title}</p>
            </div>
          </div>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <button
              onClick={handlePrevious}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-200 focus:outline-none w-10 h-10 flex items-center justify-center"
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
              className="p-2 bg-white rounded-full shadow hover:bg-gray-200 focus:outline-none w-10 h-10 flex items-center justify-center"
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






