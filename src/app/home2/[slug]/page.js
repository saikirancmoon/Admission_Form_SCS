import { redirect } from "next/navigation";
import Home2InnerPage from "../../../components/Home2/Home2InnerPage";
import "../home2.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "admissions" }];
}

export default async function Home2InnerRoute({ params }) {
  const { slug } = await params;

  if (slug !== "admissions") {
    redirect("/home2/admissions");
  }

  return <Home2InnerPage slug="admissions" />;
}
