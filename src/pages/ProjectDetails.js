import React from "react";
import { useParams } from "react-router-dom";
import projectDetailsData from "../projectDetailsData.js";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import arrow from "../img/arrow.svg";
import arrowGray from "../img/arrowGray.svg";

import linkIcon from "../img/link.svg";

import genStyles from "../styles/GenStyles.module.css";
import styles from "../styles/ProjectDetails.module.css";
import Image from "../components/Image";
import Image2 from "../components/Image2.js";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Footer from "../components/Footer";

const ProjectDetails = () => {
  const { projectId } = useParams();

  // Get the additional details for the project from projectDetailsData.json
  const projectDetails = projectDetailsData[`${projectId}`];

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  const { project, link, about, info, overview, process } = projectDetails;

  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="MY WORK" />

      <div className={styles.projectView}>
        {project && (
          <div className={styles.project}>
            <NavLink to="/work" className={styles.back}>
              <img className={styles.backArrow} src={arrow} alt="Back" />
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
            <Image
              src={project.image}
              alt={project.title}
              className={styles.pictureCenter}
            />
            <a
              className={styles.viewLinkButton}
              href={link.url}
              target="_blank"
            >
              <div className={styles.viewLinkButtonContent}>
                <img
                  className={styles.viewLinkButtonLink}
                  src={linkIcon}
                  alt=""
                />
                <div className={styles.viewLinkButtonText}>{link.display}</div>
              </div>
            </a>
            <div className={styles.about}>
              <div className={styles.title}>
                <h3>about the project</h3>
              </div>
              <div className={styles.spacer}></div>
              <p>{about}</p>
            </div>
            {info && (
              <div className={styles.info}>
                <div className={styles.title}>
                  <h3>info</h3>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.desc}>
                  <div className={styles.desc1}>
                    <div className={styles.descSub}>ROLE</div>
                    {info.role.join(", ")}
                  </div>
                  <div className={styles.desc1}>
                    <div className={styles.descSub}>TOOLS</div>
                    {info.tools.join(", ")}
                  </div>
                  <div className={styles.desc1}>
                    <div className={styles.descSub}>TIMELINE</div>
                    {info.timeline.join("-")}
                  </div>
                </div>
              </div>
            )}
            {overview && (
              <div>
                <div className={styles.dividerContainer}>
                  <div className={styles.divider}></div>
                </div>
                <div className={styles.about}>
                  <div className={styles.title}>
                    <h3>project overview</h3>
                  </div>
                  <div className={styles.spacer}></div>
                  <p>{overview}</p>
                </div>
              </div>
            )}

            <Accordion
              allowZeroExpanded
              // preExpanded={["problem"]}
              className={styles.accordion}
            >
              {projectDetails.process &&
                Object.keys(projectDetails.process).map((key) => {
                  const item = projectDetails.process[key];
                  return (
                    <AccordionItem
                      key={key}
                      uuid={key}
                      className={styles.accordion__item}
                    >
                      <AccordionItemHeading
                        className={styles.accordionItemHeading}
                      >
                        <AccordionItemButton
                          className={styles.accordion__button}
                        >
                          <div className={styles.accordionTitle}>
                            {item.title}
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className={styles.accordion__panel}>
                        {item.title && (
                          <div>
                            {item.image && (
                              <div>
                                {" "}
                                <Image2
                                  src={item.image}
                                  alt={key}
                                  className={styles.pictureCenter}
                                />
                                <div className={styles.dividerContainer}>
                                  <div className={styles.divider}></div>
                                </div>
                              </div>
                            )}

                            <div className={styles.about}>
                              {item.title && (
                                <div className={styles.title}>
                                  <h3>{item.title}</h3>
                                </div>
                              )}
                              <div className={styles.spacer}></div>
                              <p className={styles.descAndBlurb}>
                                {item.desc && (
                                  <div className={styles.descSub}>
                                    <div>{item.desc}</div>
                                  </div>
                                )}
                                {item.blurb && <div>{item.blurb}</div>}
                              </p>
                            </div>
                          </div>
                        )}

                        {item.title2 && (
                          <div>
                            {item.image2 && (
                              <div>
                                {" "}
                                <Image2
                                  src={item.image2}
                                  alt={key}
                                  className={styles.pictureCenter}
                                />
                                <div className={styles.dividerContainer}>
                                  <div className={styles.divider}></div>
                                </div>
                              </div>
                            )}

                            <div className={styles.about}>
                              {item.title2 && (
                                <div className={styles.title}>
                                  <h3>{item.title2}</h3>
                                </div>
                              )}
                              <div className={styles.spacer}></div>
                              <p className={styles.descAndBlurb}>
                                {item.desc2 && (
                                  <div className={styles.descSub}>
                                    <div>{item.desc2}</div>
                                  </div>
                                )}
                                {item.blurb2 && <div>{item.blurb2}</div>}
                              </p>
                            </div>
                          </div>
                        )}

                        {item.title3 && (
                          <div>
                            {item.image3 && (
                              <div>
                                {" "}
                                <Image2
                                  src={item.image3}
                                  alt={key}
                                  className={styles.pictureCenter}
                                />{" "}
                                <div className={styles.dividerContainer}>
                                  <div className={styles.divider}></div>
                                </div>
                              </div>
                            )}

                            <div className={styles.about}>
                              {item.title3 && (
                                <div className={styles.title}>
                                  <h3>{item.title3}</h3>
                                </div>
                              )}
                              <div className={styles.spacer}></div>
                              <p className={styles.descAndBlurb}>
                                {item.desc3 && (
                                  <div className={styles.descSub}>
                                    <div>{item.desc3}</div>
                                  </div>
                                )}
                                {item.blurb3 && <div>{item.blurb3}</div>}
                              </p>
                            </div>
                          </div>
                        )}
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
            </Accordion>
            <NavLink
              to="/work"
              className={styles.viewLinkButton}
              style={{ marginTop: "50px" }}
            >
              <img
                className={styles.viewLinkButtonLink}
                src={arrowGray}
                alt="Back"
              />
              <div className={styles.viewLinkButtonText}> BACK TO PROJECTS</div>
            </NavLink>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
