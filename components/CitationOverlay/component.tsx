import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

import { Container } from "../Container";
import { NinjaIcon } from "./libs/NinjaIcon";
import { Props } from "./props";

const textVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const CitationOverlay: FC<Props> = ({ citation }: Props) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="absolute flex items-center justify-center w-full"
      variants={{
        initial: {
          opacity: 1,
          height: "100%",
        },
        invisible: {
          opacity: 0,
          height: 0,
        },
      }}
      transition={{
        duration: 0.9,
      }}
      initial="initial"
      animate={citation ? "initial" : "invisible"}
    >
      <Container>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 3.0,
            duration: 2.2,
          }}
        >
          {/* <NinjaIcon className="w-10 mb-2 fill-current md:ml-auto dark:text-white-900 text-black-900 sm:float-right" /> */}
        </motion.div>
        <motion.p
          className="mt-6 mb-2 text-xl font-medium leading-relaxed md:text-2xl dark:text-white-900 text-black-900 md:my-0"
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 0,
            duration: 2.6,
          }}
        >
          {t("citation.content")}
        </motion.p>
        <motion.p
          className="text-base md:text-right dark:text-white-700 text-black-700"
          initial="initial"
          animate="visible"
          variants={textVariants}
          transition={{
            delay: 2.0,
            duration: 2.6,
          }}
        >
          {t("citation.author")}
        </motion.p>
      </Container>
    </motion.div>
  );
};
