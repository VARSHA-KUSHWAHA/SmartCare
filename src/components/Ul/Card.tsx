import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);