import { fetchBlogDetail } from "@/lib/microcms-client";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function BlogDetailPage({ params }: Props) {
  try {
    const blog = await fetchBlogDetail(params.id);

    return (
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="prose" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    );
  } catch {
    notFound();
  }
}
