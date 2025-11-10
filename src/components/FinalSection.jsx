const FinalSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col items-center text-center md:text-left md:items-start">
        <img
          src="/safety.svg"
          alt="Safety"
          className="w-[90%] md:w-full mb-6 md:mb-10"
        />
        <div className="px-6 sm:px-10 md:px-30">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-snug">
            <span className="border-b-2 border-[#4fa9db] pb-1 md:pb-2">
              Safety
            </span>
            for all
          </h2>
          <p className="mb-4 text-base sm:text-lg leading-relaxed md:max-w-lg">
            At Giro, your safety is our priority. We’re dedicated to making
            every ride safe and comfortable.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-1 text-[#4fa9db] font-semibold text-base sm:text-lg cursor-pointer hover:text-[#3f91c1] transition">
            <span>Know More</span>
            <img
              src="/forward-icon.svg"
              alt="forward"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
