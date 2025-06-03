import React from 'react';

// Example trustee images (replace with your actual image imports)
import trustee1 from '../assets/trustee1.jpg';
import trustee2 from '../assets/trustee1.jpg';
import trustee3 from '../assets/trustee1.jpg';
import trustee4 from '../assets/trustee1.jpg';
import trustee5 from '../assets/trustee1.jpg';

const trustees = [
  { name: 'Shri Laxmidas Nayak', role: 'President', photo: trustee1 },
  { name: 'Shri Ashok Shanbhag, Balmuri', role: 'Secretary', photo: trustee2 },
  { name: 'Shri M. S. Nayak', role: 'Treasurer', photo: trustee3 },
  { name: 'Shri A. B. Shenoy', role: 'Trustee', photo: trustee4 },
  { name: 'Shri K. R. Kamath', role: 'Trustee', photo: trustee5 },
];

const committeeMembers = [
  'Shri R. S. Bhat',
  'Shri P. K. Kini',
  'Shri S. D. Prabhu',
  'Shri N. S. Shenoy',
  'Shri G. V. Pai',
  'Shri M. K. Nayak',
  'Shri S. S. Kamath',
  'Shri V. R. Rao',
  'Shri K. S. Pai',
  'Shri B. V. Shenoy',
];

const Administration = () => (
  <div className="min-h-screen [#FFF9E5] flex flex-col items-center py-12">
    <h1 className="text-4xl font-bold text-red-800 mb-8">Administration</h1>
    <h2 className="text-2xl font-semibold text-red-700 mb-4">Trustees</h2>
    {/* Trustees grid: 3 on top row, 2 centered below */}
    <div className="w-full max-w-5xl mb-12 px-4">
      {/* Top row: 3 trustees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TrusteeCard {...trustees[0]} />
        <TrusteeCard {...trustees[1]} />
        <TrusteeCard {...trustees[2]} />
      </div>
      {/* Bottom row: 2 trustees centered */}
      <div className="hidden md:flex justify-center gap-8 mt-8">
        <TrusteeCard {...trustees[3]} />
        <TrusteeCard {...trustees[4]} />
      </div>
      {/* For mobile: stack the last two below */}
      <div className="grid md:hidden grid-cols-1 gap-8 mt-8">
        <TrusteeCard {...trustees[3]} />
        <TrusteeCard {...trustees[4]} />
      </div>
    </div>
    <h2 className="text-2xl font-semibold text-red-700 mb-4">Committee Members</h2>
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {committeeMembers.map((member, idx) => (
          <li key={member} className="text-gray-700">
            <span className="font-semibold mr-2">{idx + 1}.</span>
            {member}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// TrusteeCard component for reuse
function TrusteeCard({ name, role, photo }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-80 h-65  ">
      <img
        src={photo}
        alt={name}
        className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-red-200"
      />
      <div className="text-lg font-semibold text-red-800 text-center">{name}</div>
      <div className="text-gray-600 text-center">{role}</div>
    </div>
  );
}

export default Administration;