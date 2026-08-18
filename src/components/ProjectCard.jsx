import React from "react";

const ProjectCard = ({
  name,
  description,
  progress,
  status,
  priority,
}) => {
  const priorityStyle =
    priority === "High"
      ? "bg-red-100 text-red-700"
      : priority === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        
        {/* Project Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {description}
          </p>
        </div>

        {/* Status and Priority */}
        <div className="flex items-center gap-2 flex-shrink-0">
          
          {/* Status */}
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
            {status}
          </span>

          {/* Priority */}
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${priorityStyle}`}
          >
            {priority}
          </span>

        </div>
      </div>

      {/* Progress */}
      <div className="mt-5">
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Progress
          </span>

          <span className="text-sm font-semibold text-gray-800">
            {progress}%
          </span>
        </div>

        {/* Progress Background */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          
          {/* Progress */}
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;