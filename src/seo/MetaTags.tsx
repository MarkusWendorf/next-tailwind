import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

const defaultDescription = "";
const defaultImage = ""; // has to be an absolute path

export const MetaTags = ({ title, children, description = defaultDescription, image = defaultImage }: Props) => {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_DOMAIN + router.asPath;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      {/* Facebook, Slack, WhatsApp etc. */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      {image && <meta property="twitter:image" content={image} />}

      {children}
    </Head>
  );
};
