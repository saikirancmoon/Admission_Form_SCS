import { notFound } from "next/navigation";
import Home2Header from "../../../components/Home2/Home2Header";
import Home2Footer from "../../../components/Home2/Home2Footer";
import Home2InnerPage from "../../../components/Home2/Home2InnerPage";
import MobileBottomNav from "../../../components/Home2/MobileBottomNav";
import {
  home2InnerPages,
  home2InnerPageSlugs,
} from "../../../components/Home2/home2InnerPagesData";
import "../home2.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return home2InnerPageSlugs.map((slug) => ({ slug }));
}

export default async function Home2InnerRoute({ params }) {
  const { slug } = await params;

  if (!home2InnerPages[slug]) {
    notFound();
  }

  return (
    <div className="home2-theme">
      <Home2Header />
      <Home2InnerPage slug={slug} />
      <Home2Footer />
      <MobileBottomNav />
    </div>
  );
}
