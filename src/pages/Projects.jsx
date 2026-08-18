import React, { useState } from "react";
import {
  Plus,
  Search,
  X,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // -----------------------------
  // PROJECT DATA
  // -----------------------------

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "AI Project Management Dashboard",
      description:
        "A smart dashboard for managing projects and team productivity.",
      progress: 65,
      status: "In Progress",
      priority: "High",
      startDate: "2026-08-01",
      dueDate: "2026-08-30",
      team: ["KK", "AK", "RS"],
    },
    {
      id: 2,
      name: "Healthcare Prediction System",
      description:
        "Machine learning system for predicting patient health risks.",
      progress: 80,
      status: "In Progress",
      priority: "Medium",
      startDate: "2026-07-15",
      dueDate: "2026-08-25",
      team: ["PS", "AM", "RK", "SJ"],
    },
    {
      id: 3,
      name: "E-Commerce Analytics",
      description:
        "Analytics platform for tracking sales and customer behavior.",
      progress: 45,
      status: "Planning",
      priority: "Low",
      startDate: "2026-08-10",
      dueDate: "2026-09-15",
      team: ["RV", "NK"],
    },
    {
      id: 4,
      name: "AI Chatbot",
      description:
        "Intelligent chatbot for automated customer support.",
      progress: 100,
      status: "Completed",
      priority: "Medium",
      startDate: "2026-06-01",
      dueDate: "2026-07-30",
      team: ["AS", "VK", "MT"],
    },
  ]);

  // -----------------------------
  // SEARCH & FILTER STATE
  // -----------------------------

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // -----------------------------
  // MODAL STATE
  // -----------------------------

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");

  const [selectedProject, setSelectedProject] = useState(null);

  // -----------------------------
  // FORM STATE
  // -----------------------------

  const emptyForm = {
    name: "",
    description: "",
    status: "Planning",
    priority: "Medium",
    progress: 0,
    startDate: "",
    dueDate: "",
    team: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  // -----------------------------
  // HANDLE INPUT CHANGE
  // -----------------------------

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // -----------------------------
  // OPEN CREATE MODAL
  // -----------------------------

  const handleAddProject = () => {
    setModalMode("create");
    setFormData(emptyForm);
    setShowModal(true);
  };

  // -----------------------------
  // OPEN EDIT MODAL
  // -----------------------------

  const handleEditProject = (project) => {
    setModalMode("edit");
    setSelectedProject(project);

    setFormData({
      name: project.name,
      description: project.description,
      status: project.status,
      priority: project.priority,
      progress: project.progress,
      startDate: project.startDate,
      dueDate: project.dueDate,
      team: project.team.join(", "),
    });

    setShowModal(true);
  };

  // -----------------------------
  // CREATE / UPDATE PROJECT
  // -----------------------------

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.description.trim() ||
      !formData.startDate ||
      !formData.dueDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const teamMembers = formData.team
      .split(",")
      .map((member) => member.trim())
      .filter((member) => member !== "");

    // CREATE
    if (modalMode === "create") {
      const newProject = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        progress: Number(formData.progress),
        status: formData.status,
        priority: formData.priority,
        startDate: formData.startDate,
        dueDate: formData.dueDate,
        team: teamMembers.length > 0 ? teamMembers : ["KK"],
      };

      setProjects((previousProjects) => [
        ...previousProjects,
        newProject,
      ]);
    }

    // EDIT
    else {
      setProjects((previousProjects) =>
        previousProjects.map((project) =>
          project.id === selectedProject.id
            ? {
                ...project,
                name: formData.name,
                description: formData.description,
                progress: Number(formData.progress),
                status: formData.status,
                priority: formData.priority,
                startDate: formData.startDate,
                dueDate: formData.dueDate,
                team:
                  teamMembers.length > 0
                    ? teamMembers
                    : ["KK"],
              }
            : project
        )
      );
    }

    setFormData(emptyForm);
    setSelectedProject(null);
    setShowModal(false);
  };

  // -----------------------------
  // DELETE PROJECT
  // -----------------------------

  const handleDeleteProject = (project) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.name}"?`
    );

    if (!confirmed) {
      return;
    }

    setProjects((previousProjects) =>
      previousProjects.filter(
        (item) => item.id !== project.id
      )
    );

    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
    }
  };

  // -----------------------------
  // VIEW PROJECT
  // -----------------------------

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  // -----------------------------
  // FILTER PROJECTS
  // -----------------------------

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      project.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      project.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });

  // -----------------------------
  // FORMAT DATE
  // -----------------------------

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  // -----------------------------
  // JSX
  // -----------------------------

  return (
    <div>
      {/* =========================
          PAGE HEADER
      ========================== */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Projects
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage and track all your projects in one place.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddProject}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* =========================
          SEARCH & FILTERS
      ========================== */}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status */}
          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
            className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Planning">Planning</option>
            <option value="In Progress">
              In Progress
            </option>
            <option value="Completed">Completed</option>
          </select>

          {/* Priority */}
          <select
            value={priorityFilter}
            onChange={(event) =>
              setPriorityFilter(event.target.value)
            }
            className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* =========================
          PROJECT COUNT
      ========================== */}

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-700">
            {filteredProjects.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-700">
            {projects.length}
          </span>{" "}
          projects
        </p>
      </div>

      {/* =========================
          PROJECT CARDS
      ========================== */}

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              progress={project.progress}
              status={project.status}
              priority={project.priority}
              startDate={project.startDate}
              dueDate={project.dueDate}
              team={project.team}
              onView={() => handleViewProject(project)}
              onEdit={() => handleEditProject(project)}
              onDelete={() =>
                handleDeleteProject(project)
              }
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <Search
            size={40}
            className="mx-auto text-gray-300 mb-4"
          />

          <h3 className="text-lg font-semibold text-gray-700">
            No projects found
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Try changing your search or filters.
          </p>
        </div>
      )}

      {/* =========================
          CREATE / EDIT MODAL
      ========================== */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {modalMode === "create"
                    ? "Create New Project"
                    : "Edit Project"}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {modalMode === "create"
                    ? "Add a new project to your dashboard."
                    : "Update your project information."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setSelectedProject(null);
                }}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Project Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter project name"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Description *
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter project description"
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Status + Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Planning">
                      Planning
                    </option>

                    <option value="In Progress">
                      In Progress
                    </option>

                    <option value="Completed">
                      Completed
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="High">High</option>
                    <option value="Medium">
                      Medium
                    </option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Progress
                  </label>

                  <input
                    type="number"
                    name="progress"
                    min="0"
                    max="100"
                    value={formData.progress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Start Date *
                  </label>

                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Due Date *
                  </label>

                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Team */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Team Members
                </label>

                <input
                  type="text"
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  placeholder="KK, AK, RS"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Enter initials separated by commas.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedProject(null);
                  }}
                  className="px-4 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {modalMode === "create"
                    ? "Create Project"
                    : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================
          VIEW PROJECT MODAL
      ========================== */}

      {selectedProject && !showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl">
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {selectedProject.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Project Details
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedProject(null)
                }
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Details */}
            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Description
                </p>

                <p className="text-sm text-gray-700 mt-1">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-400">
                    Status
                  </p>

                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    {selectedProject.status}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-400">
                    Priority
                  </p>

                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    {selectedProject.priority}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-400">
                    Start Date
                  </p>

                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    {formatDate(
                      selectedProject.startDate
                    )}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-400">
                    Due Date
                  </p>

                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    {formatDate(
                      selectedProject.dueDate
                    )}
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Progress
                  </span>

                  <span className="text-sm font-semibold text-gray-800">
                    {selectedProject.progress}%
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${selectedProject.progress}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Team */}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Team
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.team.map(
                    (member) => (
                      <span
                        key={member}
                        className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                      >
                        {member}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() =>
                    handleEditProject(
                      selectedProject
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-blue-600 rounded-lg hover:bg-blue-50"
                >
                  <Pencil size={16} />
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleDeleteProject(
                      selectedProject
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;