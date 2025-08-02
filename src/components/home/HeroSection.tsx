import React from 'react';
import { Button } from '../Ul/Button';

export const HeroSection: React.FC = () => (
  <section className="bg-blue-600 text-white py-20 md:py-32">
    <div className="container mx-auto px-4 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        World-Class Healthcare
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mb-10">
        Providing compassionate care with cutting-edge technology since 1985
      </p>
      <Button variant="secondary">Book an Appointment</Button>
    </div>
  </section>
);