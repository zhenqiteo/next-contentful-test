import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";

export default async function Post({ params }: { params: { slug: string } }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  try {
    // Fetch the current post
    const entries = await client.getEntries({
      content_type: "post",
      "fields.slug": params.slug,
      limit: 1,
    });

    if (!entries.items.length) {
      throw new Error("Post not found");
    }

    const post = entries.items[0] as any;
    // const currentTags = post.fields.tags || [];
    // Ensure tags is always an array
    const currentTags = Array.isArray(post.fields.tags) ? post.fields.tags : [];

    // Fetch related posts that share tags with the current post
    const relatedPosts = await client.getEntries({
      content_type: "post",
      limit: 3,
      "fields.slug[ne]": params.slug, // Exclude current post
      "fields.tags[in]": currentTags.join(","),
    });

    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded transition-colors"
          >
            <span className="mr-2">←</span>
            Back to All Posts
          </Link>
        </div>

        <article className="max-w-2xl mx-auto">
          {post.fields.coverImage?.fields?.file?.url && (
            <img
              src={`https:${post.fields.coverImage.fields.file.url}`}
              alt={post.fields.title}
              className="w-full h-96 object-contain mb-6 rounded"
            />
          )}
          <h1 className="text-[#00205B] text-4xl font-bold mb-6">
            {post.fields.title}
          </h1>

          {/* Tags section */}
          {/* Tags section */}
          {currentTags.length > 0 && (
            <div className="mb-6">
              {currentTags.map((tag: string) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          <div className="text-sm text-gray-500 mb-8">
            Published: {new Date(post.sys.createdAt).toLocaleDateString()}
          </div>

          <div className="prose lg:prose-xl mb-12">
            {documentToReactComponents(post.fields.content)}
          </div>

          {/* Related Posts section */}
          {relatedPosts.items.length > 0 && (
            <div className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid gap-6">
                {relatedPosts.items.map((relatedPost: any) => (
                  <Link
                    href={`/posts/${relatedPost.fields.slug}`}
                    key={relatedPost.sys.id}
                    className="block hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  >
                    <div className="flex items-start">
                      {relatedPost.fields.coverImage?.fields?.file?.url && (
                        <img
                          src={`https:${relatedPost.fields.coverImage.fields.file.url}`}
                          alt={relatedPost.fields.title}
                          className="w-24 h-24 object-cover rounded mr-4"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold mb-2">
                          {relatedPost.fields.title}
                        </h3>
                        <div className="text-sm text-gray-500">
                          {new Date(
                            relatedPost.sys.createdAt
                          ).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
