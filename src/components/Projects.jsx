import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-white pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          console.log(project.image);
          return (
            <div
              key={index}
              className="lg:p-10 flex flex-col items-center mb-5 border-t
              jtext-center lg:flex-row min-w-full lg:items-center lg:text-left 
              lg:justify-center"
            >
              <div className="w-full  lg:w-1/4 lg:mr-8 pt-10 ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded-2xl  mx-auto max-w-full h-auto "
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <a href={project.link} target="_blank">
                  <h6 className="mb-2 font-semibold underline">
                    {project.title}
                  </h6>
                </a>
                <p className="mb-4 text-neutral-400 text-justify">
                  {project.description}
                </p>
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
