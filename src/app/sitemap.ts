import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/config/serviceDetails';
import { getAllIndustrySlugs } from '@/config/industries';
import { getAllPosts } from '@/config/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.figure8dx.com';
  const lastModified = new Date("2026-02-19");

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = getAllIndustrySlugs().map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
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
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...servicePages,
    ...industryPages,
    ...blogPages,
  ];
}
