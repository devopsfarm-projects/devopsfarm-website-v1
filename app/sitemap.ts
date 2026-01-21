import { MetadataRoute } from 'next';
import { blogData } from '@/constants/mockData/blogData';
import { caseStudies } from '@/constants/mockData/caseStudiesData';
import { servicesData } from '@/constants/mockData/servicesData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://devopsfarm.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/banking`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/fintech`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/saas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/healthtech`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/edtech`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/hpc`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/cookie-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic blog post routes
  const blogRoutes: MetadataRoute.Sitemap = blogData.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: post.date || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic case studies routes
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic services routes
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.flatMap((service) => {
    const routes: MetadataRoute.Sitemap = [
      {
        url: `${BASE_URL}/services/${service.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
    ];

    // Add sub-services if they exist
    if (service.fullContent?.subServices) {
      service.fullContent.subServices.forEach((subService) => {
        routes.push({
          url: `${BASE_URL}/services/${service.id}/${subService.id}`,
          lastModified: currentDate,
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        });
      });
    }

    return routes;
  });

  // Combine all routes
  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...serviceRoutes];
}
