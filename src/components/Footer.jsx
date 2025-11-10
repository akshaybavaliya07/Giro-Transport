const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-14">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 py-6 md:py-8 border-t-2 border-b-2 border-gray-200">
        {[
          { src: "/twitter.svg", alt: "Twitter" },
          { src: "/youtube.svg", alt: "YouTube" },
          { src: "/instagram.svg", alt: "Instagram" },
          { src: "/linkedin.svg", alt: "LinkedIn" },
        ].map((icon, idx) => (
          <a
            key={idx}
            href="#"
            className="cursor-pointer transition-transform hover:scale-110"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-9 h-9 md:w-12 md:h-12 hover:brightness-0 hover:invert-38 hover:sepia hover:saturate-2871 hover:hue-rotate-196 hover:contrast-97"
            />
          </a>
        ))}
      </div>

      <div className="px-6 md:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          <div className="max-w-sm md:max-w-[18rem]">
            <img
              src="/logo.svg"
              alt="Giro Logo"
              className="h-10 w-auto mx-auto md:mx-0"
            />
            <p className="mt-5 font-semibold leading-relaxed text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex flex-col text-sm space-y-2">
            {["Home", "Ride", "Give Ride", "Support"].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-blue-500 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <img
              src="/blur-logo.svg"
              alt="Giro Blur Logo"
              className="h-20 md:h-30 w-auto opacity-70 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-200 py-4 text-sm px-4 leading-relaxed">
        © 2025 Giro transport, all rights reserved. Giro transport technologies
        is the trading name of Bayridges Consulting Ltd.
      </div>
    </footer>
  );
};

export default Footer;
