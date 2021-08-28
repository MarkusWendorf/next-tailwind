import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const data = ["User-agent: *", "Allow: /", `Sitemap: ${domain}/sitemap.xml`];

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", `max-age=${60 * 60 * 24}`);
  res.write(data.join("\n"));
  res.end();

  return {
    props: {},
  };
};

export default function Noop() {}
