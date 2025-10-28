import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial: Testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg italic text-gray-300 mb-6">"{testimonial.quote}"</p>
              <div className="font-semibold text-indigo-300">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;