// src/app/debug/page.tsx
export default function DebugPage() {
  return (
    <div>
      <h1>Environment Variables Debug</h1>
      <p>Space ID: {process.env.CONTENTFUL_SPACE_ID ? "Exists" : "Missing"}</p>
      <p>
        Access Token:{" "}
        {process.env.CONTENTFUL_ACCESS_TOKEN ? "Exists" : "Missing"}
      </p>
    </div>
  );
}
