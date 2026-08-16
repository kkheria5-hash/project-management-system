import React from "react";

const ProjectCard = ({ name, description, progress, status }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {description}
          </p>
        </div>

        {/* Status */}
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
          {status}
        </span>
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

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
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