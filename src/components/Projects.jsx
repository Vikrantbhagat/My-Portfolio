import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "Online Flight Booking Webapplication",
    technologies: "Java fullstack =>A robust and scalable full-stack Java web application for booking flights with real-time search and confirmation. It features secure user authentication, dynamic flight schedules, and seamless payment integration.",
    image: employeeMSImage,
    github: "https://github.com/Vikrantbhagat/FlightBooking",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack =>A visually appealing and highly interactive admin dashboard tailored for managing blog content and analytics. It includes user role-based access, real-time charting, and content CRUD functionalities.",
    image: bookMSImage,
    github: "https://github.com/Vikrantbhagat",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack =>A fully functional Book Management System enabling users to add, update, and manage books with an intuitive UI. It implements RESTful APIs, responsive design, and user-friendly data handling with MongoDB integration.",
    image: employeeMSImage,
    github: "https://github.com/Vikrantbhagat",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
