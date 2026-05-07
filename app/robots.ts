import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.siga1up.com.br/sitemap.xml",
    host: "https://www.siga1up.com.br",
  };
}
