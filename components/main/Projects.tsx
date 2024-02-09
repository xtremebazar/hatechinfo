import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Team
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/hasnain.jpeg"
          title="Syed Hasnain Ali"
          description="leading World Wide Cart as CEO. I specialize in web development, covering HTML, CSS, JS, React, Next.js, Python, Tailwind CSS, and TypeScript, alongside graphic design."
        />
        <ProjectCard
          src="/ahmar.jpeg"
          title="Syed Ahmar Ali"
          description="is a graphic designer proficient in HTML, CSS, and JavaScript, with a passion for creating visually stunning digital experiences."
        />
        <ProjectCard
          src="/elijah.jpeg"
          title="Elijah"
          description=" Backend developer, skilled in PHP, HTML, CSS, and JavaScript, crafting seamless web experiences."
        />
      </div>
    </div>
  );
};

export default Projects;
