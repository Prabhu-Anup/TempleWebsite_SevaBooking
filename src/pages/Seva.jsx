import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sevaTemples = [
  {
    name: 'At Shri Venkatraman Dev',
    desc: 'Seva offerings and details at Shri Venkatraman Dev, Kumta.',
    link: '/SevaVenkatramanDev',
  },
  {
    name: 'At Shri Mukyaprana Dev',
    desc: 'Seva offerings and details at Shri Mukyaprana Dev.',
    link: '/SevaMukyapranaDev',
  },
  {
    name: 'At Shri Mooda Ganapati Dev, Chitrigi',
    desc: 'Seva offerings and details at Shri Mooda Ganapati Dev, Chitrigi.',
    link: '/sevaMoodaGanapatiDev',
  },
];

const Seva = () => {
  const location = useLocation();
  const mode = location.state?.mode || 'user';
  // Prefer userName, else fallback to userPhone
  const userName = location.state?.userName;
  const userPhone = location.state?.userPhone;

  return (
    <div className="min-h-screen bg-[#FFF9E5] flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Seva</h1>
      {(userName || userPhone) && (
        <div className="mb-6 text-lg text-blue-700 font-semibold">
          Welcome, {userName ? userName : userPhone}!
        </div>
      )}
      <div className="flex flex-col gap-8 w-full max-w-2xl px-4">
        {sevaTemples.map((temple) => (
          <Link
            to={temple.link}
            key={temple.name}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start hover:bg-blue-50 transition"
            state={{ mode, userName, userPhone }}
          >
            <span className="text-2xl font-semibold text-blue-700 mb-2">{temple.name}</span>
            <span className="text-gray-600">{temple.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Seva;