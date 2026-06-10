import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustryDetailView from "@/components/industries/IndustryDetailView";
import { getAllIndustrySlugs, getIndustryBySlug } from "@/config/industries";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };

  const url = `https://www.figure8dx.com/industries/${slug}`;
  return {
    title: industry.name,
    description: industry.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: `${industry.name} | Figure8 DX`,
      description: industry.tagline,
      url,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <div className="min-h-screen">
      <Header />
      <IndustryDetailView industry={industry} />
      <Footer />
    </div>
  );
}
