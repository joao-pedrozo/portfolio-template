import React from 'react';
import { testimonials } from '@/data/content.json'

const Testimonials = () => {

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#1f1f1f] flex items-center gap-8"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full rounded-full object-cover bg-[#2a2a2a]"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-start mb-4">
                  <svg
                    className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 italic text-lg">
                    {testimonial.text}
                  </p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-medium text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-purple-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;