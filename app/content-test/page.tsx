// src/app/content-test/page.tsx
import { createClient } from "contentful";

export default async function ContentTestPage() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  try {
    const entries = await client.getEntries({
      limit: 2, // Just get first 2 entries of any type
    });

    return (
      <div>
        <h1>Contentful Data Test</h1>
        <p>Total entries found: {entries.total}</p>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(entries.items, null, 2)}
        </pre>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error Fetching Data</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}
