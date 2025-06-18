import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "🎨 Crafting clean, modern, and user-focused designs.We bring ideas to life with elegant UI/UX that engages users.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "💻 Building sleek, high-performance web interfaces.Using React, Bootstrap, and responsive design to create seamless user experiences.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "🔧 Powering applications with robust APIs and databases.Secure, scalable backend logic built with Spring Boot and Node.js.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "🌐 Bridging the frontend and backend together.Delivering complete web solutions from concept to deployment.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "📝 Creating impactful content tailored to your brand.Clear, engaging copy that drives results and builds authority.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "🚀 Boosting your online presence through strategy and analytics.We help your business grow with SEO, campaigns, and data-driven marketing.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              {/* <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
