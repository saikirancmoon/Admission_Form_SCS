import { redirect } from "next/navigation";
import "../home2.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "admissions" }];
}

export default async function Home2InnerRoute({ params }) {
  const { slug } = await params;

  redirect("/");
}
