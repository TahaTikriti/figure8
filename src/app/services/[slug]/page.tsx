import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailView from "@/components/services/ServiceDetailView";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/config/serviceDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const url = `https://www.figure8dx.com/services/${slug}`;

  return {
    title: service.title,
    description: service.detail.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Figure8 DX`,
      description: service.detail.tagline,
      url,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceDetailView service={service} />
      <Footer />
    </div>
  );
}
