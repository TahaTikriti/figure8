import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/config/serviceDetails';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.figure8dx.com';
  const lastModified = new Date("2026-02-19");

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...servicePages,
  ];
}
