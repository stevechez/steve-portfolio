import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useMdScreen } from "lib";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { Item } from "./libs/Item";

export const Experience: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const mdScreen = useMdScreen();
  const { t } = useTranslation("common");

  const experience = useMemo(
    () => [
      {
        title: "UI Developer",
        company: "Grid Dynamics | Silicon Valley Bank",
        place: "Santa Clara, CA",
        date: "Jan 2020 - Apr 2021",
      },
      {
        title: "UI Developer",
        company: "eHealth",
        place: "Mountain View, CA",
        date: "Oct 2012 - Dec 2014",
        cancelled: true,
      },
      {
        title: "UI Prototyper",
        company: "IMVU",
        place: "Mountain View, CA",
        date: "Oct 2011 - Aug 2012",
      },
      {
        title: "Developer (contract, freelance)",
        place: "Cupertino, CA",
        date: "Jan 2015 - present",
      },
      {
        title: "Sr. Web Developer",
        company: "Uptake",
        place: "Palo Alto, CA",
        date: "Jan 2011 - Oct 2011",
      },
      {
        title: "Sr. UI Developer",
        company: "Apple",
        place: "Cupertino, CA",
        date: "Jan 2009 - Jan 2011",
      },
      {
        title: "UI Developer",
        company: "Ooma",
        place: "Palo Alto, CA",
        date: "Mar 2008 - Nov 2008",
      },
      {
        title: "Founder/Web Developer",
        company: "Piczo",
        place: "San Francisco, CA",
        date: "Jan 2002 - Dec 2007",
      },
    ],
    [t]
  );

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("experience.title")}
      description={t("experience.description")}
    >
      <Container className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          {mdScreen ? (
            <>
              <div>
                {experience.slice(0, 3).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 2}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {experience.slice(3).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 2}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
            </>
          ) : (
            <div>
              {experience.slice(3).map((item, i) => (
                  <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  controls={controls}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
