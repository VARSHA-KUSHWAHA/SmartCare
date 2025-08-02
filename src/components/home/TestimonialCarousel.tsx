import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { Button } from '../Ul/Button';
import { testimonials } from '../../data/testimonials';

interface Testimonial {
  id: string;
  text: string;
  name: string;
  role: string;
}

export const TestimonialCarousel: React.FC = () => {
  const { currentIndex, next, prev } = useCarousel(testimonials);

  return (
    <div className="relative py-12">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial: Testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-full flex-shrink-0 px-4"
            >
              <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="mt-6 flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <Button variant="secondary" onClick={prev} aria-label="Previous">
          &larr;
        </Button>
        <Button variant="secondary" onClick={next} aria-label="Next">
          &rarr;
        </Button>
      </div>
    </div>
  );
};