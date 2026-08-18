import React from "react";
import {
  CalendarDays,
  Users,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const ProjectCard = ({
  name,
  description,
  progress,
  status,
  priority,
  startDate,
  dueDate,
  team,
  onView,
  onEdit,
  onDelete,
}) => {
  // -----------------------------
  // PRIORITY STYLE
  // -----------------------------

  const priorityStyle =
    priority === "High"
      ? "bg-red-100 text-red-700"
      : priority === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  // -----------------------------
  // STATUS STYLE
  // -----------------------------

  const statusStyle =
    status === "Completed"
      ? "bg-green-100 text-green-700"
      : status === "In Progress"
      ? "bg-blue-100 text-blue-700"
      : "bg-yellow-100 text-yellow-700";

  // -----------------------------
  // FORMAT DATES
  // -----------------------------

  const formattedStartDate = new Date(
    startDate
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const formattedDueDate = new Date(
    dueDate
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {/* =========================
          HEADER
      ========================== */}

      <div className="flex items-start justify-between gap-4">
        {/* Project Information */}
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {name}
          </h3>

          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Status + Priority */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyle}`}
          >
            {status}
          </span>

          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${priorityStyle}`}
          >
            {priority}
          </span>
        </div>
      </div>

      {/* =========================
          DATES
      ========================== */}

      <div className="flex flex-wrap items-center gap-6 mt-5">
        {/* Start Date */}
        <div className="flex items-center gap-2">
          <CalendarDays
            size={17}
            className="text-gray-400"
          />

          <div>
            <p className="text-xs text-gray-400">
              Start Date
            </p>

            <p className="text-sm font-medium text-gray-700">
              {formattedStartDate}
            </p>
          </div>
        </div>

        {/* Due Date */}
        <div className="flex items-center gap-2">
          <CalendarDays
            size={17}
            className="text-gray-400"
          />

          <div>
            <p className="text-xs text-gray-400">
              Due Date
            </p>

            <p className="text-sm font-medium text-gray-700">
              {formattedDueDate}
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          TEAM
      ========================== */}

      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-2">
          <Users
            size={17}
            className="text-gray-400"
          />

          <span className="text-sm font-medium text-gray-600">
            Team
          </span>
        </div>

        <div className="flex items-center">
          {team.map((member, index) => (
            <div
              key={`${member}-${index}`}
              className={`w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-700 ${
                index !== 0 ? "-ml-2" : ""
              }`}
              title={member}
            >
              {member}
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          PROGRESS
      ========================== */}

      <div className="mt-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Progress
          </span>

          <span className="text-sm font-semibold text-gray-800">
            {progress}%
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      </div>

      {/* =========================
          ACTIONS
      ========================== */}

      <div className="flex items-center justify-end gap-2 mt-5 pt-4 border-t border-gray-100">
        {/* View */}
        <button
          type="button"
          onClick={onView}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <Eye size={16} />
          View
        </button>

        {/* Edit */}
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
        >
          <Pencil size={16} />
          Edit
        </button>

        {/* Delete */}
        <button
          type="button"
          onClick={onDelete}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;