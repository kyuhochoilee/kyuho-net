import React from "react";
import { useParams } from "react-router-dom";
import projectDetailsData from "../projectDetailsData.js";
import Navbar from "../components/Navbar";
import genStyles from "../styles/GenStyles.module.css";

const ProjectDetails = () => {
  const { projectId } = useParams();

  // Get the additional details for the project from projectDetailsData.json
  const projectDetails = projectDetailsData[`${projectId}`];

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  // Use the title and details from projectDetailsData.json
  const {
    project,
    info,
    overview,
    problem,
    solution,
    process,
    research,
    users,
    design,
    test,
    product,
    reflection,
  } = projectDetails;

  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="MY WORK" />
      {project && (
        <div>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.desc}</p>
          <p>{project.blurb}</p>
        </div>
      )}

      {info && (
        <div>
          <h3>Info</h3>
          <p>Role: {info.role}</p>
          <p>Tools: {info.tools}</p>
          <p>Timeline: {info.timeline}</p>
          <p>Link: {info.link}</p>
        </div>
      )}

      {overview && (
        <div>
          <h3>Overview</h3>
          <img src={overview.image} alt={overview.title} />
          <p>{overview.desc}</p>
          <p>{overview.blurb}</p>
        </div>
      )}

      {problem && (
        <div>
          <h3>Problem</h3>
          <img src={problem.image} alt={problem.title} />
          <p>{problem.desc}</p>
          <p>{problem.blurb}</p>
        </div>
      )}

      {solution && (
        <div>
          <h3>Solution</h3>
          <img src={solution.image} alt={solution.title} />
          <p>{solution.desc}</p>
          <p>{solution.blurb}</p>
        </div>
      )}

      {process && (
        <div>
          <h3>Process</h3>
          <p>Research: {process.research}</p>
          <p>Users: {process.users}</p>
          <p>Design: {process.design}</p>
          <p>Test: {process.test}</p>
        </div>
      )}

      {research && (
        <div>
          <h3>Research</h3>
          <img src={research.image} alt={research.title} />
          <p>{research.desc}</p>
          <p>{research.blurb}</p>
        </div>
      )}

      {users && (
        <div>
          <h3>Users</h3>
          <img src={users.image} alt={users.title} />
          <p>{users.desc}</p>
          <p>{users.blurb}</p>
        </div>
      )}

      {design && (
        <div>
          <h3>Design</h3>
          <img src={design.image} alt={design.title} />
          <p>{design.desc}</p>
          <p>{design.blurb}</p>
        </div>
      )}

      {test && (
        <div>
          <h3>Test</h3>
          <img src={test.image} alt={test.title} />
          <p>{test.desc}</p>
          <p>{test.blurb}</p>
        </div>
      )}

      {product && (
        <div>
          <h3>Product</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.desc}</p>
          <p>{product.blurb}</p>
        </div>
      )}

      {reflection && (
        <div>
          <h3>Reflection</h3>
          <img src={reflection.image} alt={reflection.title} />
          <p>Takeaways: {reflection.takeaways}</p>
          <p>Next Steps: {reflection.nextSteps}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
