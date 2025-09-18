import { Suspense } from "react";
import SearchResults from "./search-results";


export default function Page() {
    


  return (
    <main style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>
      
      <Suspense fallback={<p>Loading…</p>}>
        <SearchResults />
      </Suspense>
    </main>
  );
}
