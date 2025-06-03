"use client";

import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF9E5] m-0 p-0">
      <div className="relative flex items-center justify-center h-32 w-32 m-0 p-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-red-500 border-solid"></div>
        </div>
        <Image src="/logo.jpg" height={128} width={128} alt="Loader" />
      </div>
      <span className="mt-6 text-gray-600 font-medium">
        Namaskar! Welcome to Shri Venkatraman Dev, Kumta
      </span>
    </div>
  );
}
