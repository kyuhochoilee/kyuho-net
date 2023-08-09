import React from "react";
import { useParams } from "react-router-dom";
import projectDetailsData from "../projectDetailsData.js";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import arrow from "../img/arrow.svg";
import genStyles from "../styles/GenStyles.module.css";
import styles from "../styles/ProjectDetails.module.css";
import Image from "../components/Image";

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

      <div className={styles.projectView}>
        {project && (
          <div className={styles.project}>
            <NavLink to="/work" className={styles.back}>
              <img className={styles.backArrow} src={arrow} />
              <div className={styles.backText}> back</div>
            </NavLink>
            <h2>{project.title}</h2>
            <div className={styles.categories}>
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className={styles.category}
                  style={{ backgroundColor: category.color }}
                >
                  {category.text}
                </span>
              ))}
            </div>
            <Image src={project.image} alt={project.title} />
            {info && (
              <div className={styles.info}>
                <p>My Role: {info.role}</p>
                <p>Tools Used: {info.tools}</p>
                <p>Timeline: {info.timeline}</p>
                <p>Link: {info.link}</p>
              </div>
            )}
            <p>{project.desc}</p>
            <p>{project.blurb}</p>
          </div>
        )}

        {overview && (
          <div className={styles.overview}>
            <Image src={overview.image} alt={overview.title} />

            <div className={styles.divider}></div>
            <div className={styles.text}>
              <h3>Overview</h3>
              <p>{overview.desc}</p>
              <p>{overview.blurb}</p>
            </div>
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
    </div>
  );
};

export default ProjectDetails;
