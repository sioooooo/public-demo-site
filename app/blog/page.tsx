import { fetchBlogList } from "@/lib/microcms-client";
import Link from "next/link";

export default async function BlogListPage() {
  const blogs = await fetchBlogList();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">ブログ一覧</h1>
      <ul className="space-y-4">
        {blogs.contents.map((blog) => (
          <li key={blog.id} className="border p-4 rounded-xl shadow">
            <Link href={`/blog/${blog.id}`}>
              <p className="text-xl font-semibold">{blog.title}</p>
              <p className="text-sm text-gray-500">{blog.publishedAt?.slice(0, 10)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
