import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const urls: UrlEntry[] = [{ loc: `${domain}/`, changefreq: "monthly", priority: 0.8 }];

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", `max-age=${60 * 60 * 24}`);
  res.write(generateSitemap(urls));
  res.end();

  return {
    props: {},
  };
};

interface UrlEntry {
  loc: string;
  changefreq?: string;
  lastmod?: string;
  priority?: number;
}

const generateSitemap = (urls: UrlEntry[]) => {
  const namespaces = { urlset: "http://www.sitemaps.org/schemas/sitemap/0.9" };
  const sitemap = {
    urlset: urls.map((url) => ({ url })),
  };

  return toXML(sitemap, namespaces);
};

const toXML = (data: unknown, namespaces: Record<string, string>): string => {
  if (Array.isArray(data)) return data.map((payload) => toXML(payload, namespaces)).join("");

  if (data && typeof data === "object") {
    return Object.entries(data)
      .map(([tag, payload]) =>
        namespaces[tag]
          ? `<${tag} xmlns="${namespaces[tag]}">${toXML(payload, namespaces)}</${tag}>`
          : `<${tag}>${toXML(payload, namespaces)}</${tag}>`,
      )
      .join("");
  }

  return String(data);
};

export default function Noop() {}
