"use client";

import Link from "next/link";

export default function AboutUs() {
  const aboutCards = [
    {
      name: "History",
      desc: "Our History, Our Pride",
      href: "/about-us/history",
      key: 1,
    },
    {
      name: "Administration",
      desc: "Leadership Behind the Temple",
      href: "/bout-us/administration",
      key: 2,
    },
    {
      name: "Festivals",
      desc: "Experience Our Festivals",
      href: "/about-us/festivals",
      key: 3,
    },
    {
      name: "Calendar",
      desc: "Darshan & Utsav Calendar",
      href: "/about-us/AdminCalendar",
      key: 4,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#FFF9E5] flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold text-red-800 mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
          {aboutCards.map((card) => (
            <Link
              href={card.href}
              key={card.key}
              className="hover:scale-105 duration-150 transform bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:bg-red-30 cursor-pointer"
            >
              <span className="text-2xl font-semibold text-red-700 mb-2">
                {card.name}
              </span>
              <span className="text-gray-600 text-center">{card.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
