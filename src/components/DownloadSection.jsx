import React, { useEffect, useRef, useState } from "react";

const DownloadSection = () => {
  const pathRef = useRef(null);
  const [positions, setPositions] = useState({
    pickup: { x: 0, y: 0 },
    car: { x: 0, y: 0 },
    dropoff: { x: 0, y: 0 },
  });

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const totalLength = path.getTotalLength();
      const pickupPoint = path.getPointAtLength(0);
      const carPoint = path.getPointAtLength(totalLength * 0.52);
      const dropoffPoint = path.getPointAtLength(totalLength * 0.98);

      setPositions({
        pickup: { x: pickupPoint.x, y: pickupPoint.y },
        car: { x: carPoint.x, y: carPoint.y },
        dropoff: { x: dropoffPoint.x, y: dropoffPoint.y },
      });
    }
  }, []);

  return (
    <section className="relative bg-[#4fa9db] text-white py-24 overflow-hidden">
      <div className="hidden md:flex absolute inset-0 justify-center">
        <svg
          viewBox="0 0 1916 577"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[1900px] h-auto"
        >
          <path
            ref={pathRef}
            d="M0 1.06299C135.606 358.888 567.441 917.337 1209.94 288.532C1334.56 203.093 1649.85 61.644 1914 179.353"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="6"
            strokeDasharray="12 12"
            fill="none"
          />

          <image
            href="/pickup-location.svg"
            x={positions.pickup.x - 100}
            y={positions.pickup.y - 400}
            height="60"
            width="60"
          />
          <image
            href="/car-icon.svg"
            x={positions.car.x + 200}
            y={positions.car.y - 200}
            height="70"
            width="70"
          />
          <image
            href="/dropoff-location.svg"
            x={positions.dropoff.x + 600}
            y={positions.dropoff.y - 100}
            height="60"
            width="60"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-5">Download Now</h2>
        <img src="/logo-transparent.svg" alt="Giro Logo" className="h-12 md:h-14 mb-6" />
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:scale-105 transition-transform duration-300">
            <img src="/google-play.svg" alt="Get it on Google Play" className="h-14 md:h-16" />
          </a>
          <a href="#" className="hover:scale-105 transition-transform duration-300">
            <img src="/app-store.svg" alt="Download on the App Store" className="h-14 md:h-16" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
