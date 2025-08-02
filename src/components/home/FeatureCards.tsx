import React from 'react';
import { Card } from '../Ul/Card';

// Add dummy icon component
const EmergencyIcon = () => <span>🆘</span>;

export const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: <EmergencyIcon />,
      title: "24x7 Emergency",
      description: "Immediate care when you need it most with our emergency department"
    },
    {
      icon: <span>👨‍⚕️</span>,
      title: "Expert Doctors",
      description: "Board-certified specialists with extensive experience"
    },
    {
      icon: <span>🌎</span>,
      title: "International Patients",
      description: "Dedicated services for patients traveling from abroad"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};