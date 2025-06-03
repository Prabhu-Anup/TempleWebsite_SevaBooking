"use client";

interface TrusteeCardProps {
  name: string;
  role: string;
  photo: string;
}

export default function TrusteeCard({ name, role, photo }: TrusteeCardProps) {
  return (
    <div className="bg-white hover:scale-105 transition-transform duration-250 cursor-pointer rounded-xl shadow-md p-6 flex flex-col items-center w-80 h-65  ">
      <img
        src={photo}
        alt={name}
        className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-red-200"
      />
      <div className="text-lg font-semibold text-red-800 text-center">
        {name}
      </div>
      <div className="text-gray-600 text-center">{role}</div>
    </div>
  );
}
