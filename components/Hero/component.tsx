import { Container, MediaIcon } from "components";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

// import { HandWave } from "./libs/HandWave";
// import { HeroLink } from "./libs/HeroLink";

export const Hero: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <motion.img
        src="/images/steve.jpg"
        alt="me"
        className="border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-36"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{
          damping: 5,
          mass: 1,
          delay: 0.2,
        }}
        initial="hidden"
        animate="visible"
      />
      <div className="flex items-center relative">
        <h1 className="mt-6 mb-6 ita text-3xl font-bold md:mt-8 md:mb-8 md:text-4xl text-black-900 dark:text-white-900">
          {t("hero.title")}
          <p className="text-xl font-normal mt-6">{t("hero.title2")}</p>
        </h1>
        {/* <HandWave className="text-4xl md:text-5xl" /> */}
      </div>

      <div className="flex justify-end border-b-2 border-white-300 pb-4 mb-8 text-right">
        <MediaIcon
          icon={<FaFileDownload className="w-6 h-6 md:w-7 md:h-7" />}
          href="/assets/steveresume.pdf"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/stevechez"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://www.linkedin.com/in/steve-maciaszek/"
          className="mr-4"
        />
      </div>
      <div className="mt-10">
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des0")}
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des2")}
          {t("hero.des3")}
        </p>
      </div>
    </Container>
  );
};
