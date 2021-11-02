import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "Apple",
        subtitle: t("projects.aos-ipad.subtitle"),
        description: t("projects.aos-ipad.description"),
        technologies: ["HTML", "CSS", "Javascript"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/ipad-air.png`,
      },
      {
        title: "eHealth",
        subtitle: t("projects.ehealthhome.subtitle"),
        description: t("projects.ehealthhome.description"),
        technologies: ["HTML", "CSS", "Javascript"],
        externalLink: "http://www.ehealth.com",
        githubLink: "",
        imageLink: `/images/ehealth-home.png`,
      },
      {
        title: "Apple",
        subtitle: t("projects.apple-adobe.subtitle"),
        description: t("projects.apple-adobe.description"),
        technologies: ["HTML", "CSS", "Javascript"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/aos-adobe.png`,
      },
      {
        title: "eHeath",
        subtitle: t("projects.ehealthsearch.subtitle"),
        description: t("projects.ehealthsearch.description"),
        technologies: ["HTML", "CSS", "Javascript"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/ehealth-search.png`,
      },
      {
        title: "Uptake",
        subtitle: t("projects.uptake.subtitle"),
        description: t("projects.uptake.description"),
        technologies: ["HTML", "CSS", "Javascript", "Ruby on Rails"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/uptake.png`,
      },
      {
        title: "Ooma",
        subtitle: t("projects.ooma.subtitle"),
        description: t("projects.ooma.description"),
        technologies: ["HTML", "CSS", "Javascript"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/ooma.png`,
      },
      {
        title: "Portfolio - Resume",
        subtitle: t("projects.steve-resume.subtitle"),
        description: t("projects.steve-resume.description"),
        technologies: ["HTML", "CSS", "Javascript", "Gatsby"],
        externalLink: "",
        githubLink: "",
        imageLink: `/images/steve-resume.png`,
      },
    ],
    [t]
  );

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
