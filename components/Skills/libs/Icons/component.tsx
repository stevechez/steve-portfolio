import React, { FC } from "react";
import Image from 'next/image'

type Props = {
  className?: string;
};

export const TsIcon: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 28 28"
    >
      <path fill="#007ACC" d="M0 14v14h28V0H0v14z"></path>
      <path
        fill="#fff"
        d="M6.192 14.093l-.009 1.146h3.644v10.356h2.578V15.24h3.645v-1.125c0-.622-.014-1.142-.031-1.155-.014-.018-2.231-.027-4.92-.023l-4.894.014-.013 1.142zM22.593 12.918a3.486 3.486 0 011.751 1.009c.258.276.64.778.671.898.01.035-1.208.853-1.946 1.31-.027.019-.134-.097-.254-.275-.36-.524-.737-.75-1.315-.79-.849-.059-1.396.386-1.391 1.128 0 .218.03.347.12.525.187.386.533.617 1.622 1.088 2.005.863 2.862 1.432 3.396 2.24.595.903.729 2.343.324 3.414-.444 1.164-1.547 1.955-3.098 2.218-.48.084-1.617.07-2.133-.023-1.125-.2-2.191-.755-2.849-1.484-.258-.284-.76-1.027-.729-1.08.014-.018.129-.089.258-.165.124-.07.596-.342 1.04-.6l.804-.466.17.249c.235.36.75.853 1.062 1.017.893.472 2.12.405 2.724-.137.258-.236.364-.48.364-.84 0-.325-.04-.467-.209-.711-.217-.312-.662-.574-1.924-1.12-1.444-.623-2.067-1.01-2.635-1.623a3.69 3.69 0 01-.77-1.4c-.106-.395-.133-1.386-.048-1.786.297-1.396 1.35-2.37 2.87-2.658.494-.093 1.64-.058 2.125.062z"
      ></path>
    </svg>
  );
};

export const TailwindIcon: FC<Props> = ({ className }: Props) => {
  return (
    <Image className={className} src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" width={50} height={50} />
  );
};

export const VueIcon: FC<Props> = ({ className }: Props) => {
  return (
    <Image className={className} src="https://vuejs.org/images/logo.svg" width={40} height={40} />
  );
};


