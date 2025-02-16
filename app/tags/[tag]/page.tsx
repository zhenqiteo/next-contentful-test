import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";

export default async function TagPage({ params }: { params: { tag: string } }) {
  // Create Contentful client
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  // Fetch posts with the specific tag
  const response = await client.getEntries({
    content_type: "post",
    "fields.tags[in]": [params.tag],
    order: ["-fields.date"],
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts tagged: {params.tag}</h1>

      {response.items.length === 0 ? (
        <p>No posts found for this tag.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {response.items.map((post: any) => (
            <Link
              key={post.sys.id}
              href={`/posts/${post.fields.slug}`}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {post.fields.coverImage && (
                <Image
                  src={`https:${post.fields.coverImage.fields.file.url}`}
                  alt={post.fields.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {post.fields.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.fields.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{new Date(post.fields.date).toLocaleDateString()}</span>
                  <div className="space-x-2">
                    {post.fields.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
