import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeatureCards } from '../components/home/FeatureCards';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { ContactForm } from '../components/home/ContactForm';

export const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <FeatureCards />
    <TestimonialCarousel />
    <ContactForm />
  </>
);