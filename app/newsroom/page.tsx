import { createClient } from "contentful";
import Link from "next/link";

export default async function NewsroomPage() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  try {
    const response = await client.getEntries({
      content_type: "post",
      order: ["-sys.createdAt"],
    });

    return (
      <main className="container mx-auto px-4 py-8 bg-[#f2f2f2]">
        <h1 className="text-4xl font-bold mb-8 font-poppins">News and Media</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {response.items.map((post: any) => (
            <Link href={`/posts/${post.fields.slug}`} key={post.sys.id}>
              <article className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                {post.fields.coverImage?.fields?.file?.url && (
                  <img
                    src={`https:${post.fields.coverImage.fields.file.url}`}
                    alt={post.fields.title}
                    className="w-full h-80 object-contain mb-4 rounded"
                  />
                )}
                <h2 className="text-2xl font-semibold mb-4">
                  {post.fields.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.fields.content?.content?.[0]?.content?.[0]?.value?.substring(
                    0,
                    200
                  )}
                  ...
                </p>
                <div className="text-sm text-gray-500">
                  Published: {new Date(post.sys.createdAt).toLocaleDateString()}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Error</h1>
        <p>Failed to load blog posts.</p>
      </div>
    );
  }
}
