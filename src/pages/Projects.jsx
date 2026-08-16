import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "AI Project Management Dashboard",
      description:
        "A smart dashboard for managing projects and team productivity.",
      progress: 65,
      status: "In Progress",
    },
    {
      id: 2,
      name: "Healthcare Prediction System",
      description:
        "Machine learning system for predicting patient health risks.",
      progress: 80,
      status: "In Progress",
    },
    {
      id: 3,
      name: "E-Commerce Analytics",
      description:
        "Analytics platform for tracking sales and customer behavior.",
      progress: 45,
      status: "Planning",
    },
    {
      id: 4,
      name: "AI Chatbot",
      description:
        "Intelligent chatbot for automated customer support.",
      progress: 100,
      status: "Completed",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            progress={project.progress}
            status={project.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;