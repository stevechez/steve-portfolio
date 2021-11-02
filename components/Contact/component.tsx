import { Container, Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("contact.title")}
      description={t("contact.description")}
    >
      <Container>
        <button className="mt-6 inline-flex items-center rounded bg-gray-50 px-4 py-2 mr-4 text-white bg-blue-900 hover:bg-blue-700">
          <FaPhoneAlt className="mr-2" />
          <a
            href="mailto:stevemaciaszek@comcast.net">
            Let's Talk
          </a>
        </button>
      </Container>
    </Section>
  );
};
