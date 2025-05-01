import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-col lg:justify-center md:flex-row">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full md:px-3 lg:w-1/4"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 w-full object-cover h-[150px] rounded"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl flex flex-col justify-between lg:w-3/4"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
            </a>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            <div className=" w-full p-2  flex flex-wrap">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-2 mb-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
              >
                {tech}
              </span>
            ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
