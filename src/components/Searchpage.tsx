import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SearchPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Search results for "{query}" | Brick2Tech</title>
        <meta
          name="description"
          content={`Explore Brick2Tech search results for "${query}".`}
        />
      </Helmet>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for: <span className="text-blue-600">“{query}”</span>
        </h1>

        {/* Your search results component goes here */}
      </div>
    </>
  );
};

export default SearchPage;
