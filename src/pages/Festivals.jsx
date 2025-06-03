import React from 'react';

const Festivals = () => (
  <div className="min-h-screen bg-[#FFF9E5] flex flex-col items-center py-12">
    <h1 className="text-4xl font-bold text-red-800 mb-6">Festivals</h1>
    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-5xl text-lg text-gray-800">
      <div className="flex flex-col sm:flex-row items-start">
        <div>
          <p>
            The temple celebrates several vibrant festivals throughout the year, attracting devotees from far and wide. The most prominent is the annual Rathotsava (Car Festival), marked by grand processions, music, and rituals.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><b>Rathotsava:</b> The grand chariot festival, celebrated with great devotion and enthusiasm.</li>
            <li><b>Deepavali:</b> Festival of lights, with special poojas and decorations.</li>
            <li><b>Janmashtami:</b> Celebrating the birth of Lord Krishna with bhajans and cultural programs.</li>
            <li><b>Navaratri:</b> Nine nights of worship, music, and dance.</li>
            {/* Add more festivals as needed */}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Festivals;