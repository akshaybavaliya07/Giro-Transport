const RideBookingSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center py-30 bg-cover bg-center"
      style={{ backgroundImage: "url(/blur-map.svg)" }}
    >
      <div className="relative z-10 flex flex-col items-center w-[80%] md:w-[40%] max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Let’s get you going with <span className="text-[#4fa9db]">Giro</span>
        </h1>

        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 mb-4 w-full bg-white">
          <img src="/pickup-location.svg" alt="pickup" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Enter Pick-up Location"
            className="w-full outline-none text-gray-700 text-base placeholder-gray-500"
          />
        </div>

        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 mb-6 w-full bg-white">
          <img src="/dropoff-location.svg" alt="dropoff" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Enter Drop-off Location"
            className="w-full outline-none text-gray-700 text-base placeholder-gray-500"
          />
        </div>

        <button className="w-full bg-[#4fa9db] hover:bg-[#3b8ec0] transition text-white cursor-pointer font-semibold py-3 rounded-lg text-lg">
          Book Ride
        </button>
      </div>
    </section>
  );
};

export default RideBookingSection;
