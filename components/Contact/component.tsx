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
        <button className="inline-flex items-center px-4 py-2 mt-6 mr-4 bg-blue-900 rounded bg-gray-50 hover:bg-blue-700 text-white-900">
          <FaPhoneAlt className="mr-2" />
          <a
            href="mailto:stevemaciaszek@comcast.net"
            className="text-white-900"
          >
            Let's Talk
          </a>
        </button>
      </Container>
    </Section>
  );
};
