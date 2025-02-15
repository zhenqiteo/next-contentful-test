import { createClient } from "contentful";

export default async function Post({ params }: { params: { slug: string } }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  try {
    const entries = await client.getEntries({
      content_type: "post",
      "fields.slug": params.slug,
      limit: 1,
    });

    if (!entries.items.length) {
      throw new Error("Post not found");
    }

    const post = entries.items[0];

    return (
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-2xl mx-auto">
          {post.fields.coverImage?.fields?.file?.url && (
            <img
              src={`https:${post.fields.coverImage.fields.file.url}`}
              alt={post.fields.title}
              className="w-full h-96 object-contain mb-6 rounded"
            />
          )}
          <h1 className="text-4xl font-bold mb-6">{post.fields.title}</h1>
          <div className="text-sm text-gray-500 mb-8">
            Published: {new Date(post.sys.createdAt).toLocaleDateString()}
          </div>
          <div className="prose lg:prose-xl">
            {post.fields.content?.content?.[0]?.content?.[0]?.value}
          </div>
        </article>
      </main>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Error</h1>
        <p>Error details: {(error as Error).message}</p>
      </div>
    );
  }
}
