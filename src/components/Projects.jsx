import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-white pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="mb-8 flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-center"
            >
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  height={150}
                  width={150}
                  alt={project.title}
                  className="mb-6 mx-auto rounded"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start">
                  {project.technologies.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
