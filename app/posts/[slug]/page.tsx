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
    const entries = await client.getEntries({
      content_type: "post",
      "fields.slug": params.slug,
      limit: 1,
    });

    if (!entries.items.length) {
      throw new Error("Post not found");
    }

    const post = entries.items[0];

    // Define how we want to render different types of content
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
          <p className="mb-4">{children}</p>
        ),
        [BLOCKS.HEADING_1]: (node: any, children: any) => (
          <h1 className="text-3xl font-bold mb-4">{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (node: any, children: any) => (
          <h2 className="text-2xl font-bold mb-3">{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (node: any, children: any) => (
          <h3 className="text-xl font-bold mb-2">{children}</h3>
        ),
        [BLOCKS.UL_LIST]: (node: any, children: any) => (
          <ul className="list-disc ml-6 mb-4">{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (node: any, children: any) => (
          <ol className="list-decimal ml-6 mb-4">{children}</ol>
        ),
        [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
          <li className="mb-1">{children}</li>
        ),
        [BLOCKS.QUOTE]: (node: any, children: any) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 mb-4 italic">
            {children}
          </blockquote>
        ),
        [INLINES.HYPERLINK]: (node: any, children: any) => (
          <a href={node.data.uri} className="text-blue-600 hover:underline">
            {children}
          </a>
        ),
      },
    };

    return (
      <main className="container mx-auto px-4 py-8">
        {/* Add the back button container */}
        <div className="max-w-2xl mx-auto mb-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded transition-colors"
          >
            {/* Optional: Add an arrow icon for better UX */}
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
          <h1 className="text-4xl font-bold mb-6">{post.fields.title}</h1>

          <div className="text-sm text-gray-500 mb-8">
            Published: {new Date(post.sys.createdAt).toLocaleDateString()}
          </div>
          <div className="prose lg:prose-xl">
            {documentToReactComponents(post.fields.content, options)}
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
