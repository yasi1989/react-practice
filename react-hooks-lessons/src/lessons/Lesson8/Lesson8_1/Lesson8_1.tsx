import { Suspense, useDeferredValue, useState } from "react";
import SearchResult from "./SearchResult";

const Lesson8_1 = () => {
  const [query, setQuery] = useState("");
  const defferdQuery = useDeferredValue(query);

  return (
    <div>
      <label>
        アルバム検索
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`border-2 px-3 py-3 rounded-md ${
            query !== defferdQuery ? "opacity-20" : "opacity-100"
          }`}
        />
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResult query={defferdQuery} />
        </Suspense>
      </label>
    </div>
  );
};

export default Lesson8_1;
