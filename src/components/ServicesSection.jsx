import { OUR_SERVICES } from "../constants";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-12 border-b-2 border-blue-400 inline-block">
        Our Services
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center px-8">
        {OUR_SERVICES.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-md p-6 w-36 sm:w-40 md:w-44 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
          >
            <div className="bg-blue-100 rounded-full p-4 mb-4 flex items-center justify-center">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10"
              />
            </div>
            <p className="font-semibold text-gray-700">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
