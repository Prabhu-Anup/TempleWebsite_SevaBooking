import React from 'react';
import { Link } from 'react-router-dom';

const aboutCards = [
  {
    name: 'History',
    desc: 'Know the temple history',
    href: '/TempleHistory',
  },
  {
    name: 'Administration',
    desc: 'Meet our administration',
    href: '/administration',
  },
  {
    name: 'Festivals',
    desc: 'See our festivals',
    href: '/festivals',
  },
  {
    name: 'Calendar',
    desc: 'View the temple calendar',
    href: '/AdminCalendar',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFF9E5] flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-red-800 mb-8">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        {aboutCards.map((card) => (
          <Link
            to={card.href}
            key={card.name}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:bg-red-30 transition"
          >
            <span className="text-2xl font-semibold text-red-700 mb-2">{card.name}</span>
            <span className="text-gray-600 text-center">{card.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;