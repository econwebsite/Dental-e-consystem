import React, { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaTimes, FaArrowRight } from "react-icons/fa";

import "./Search.css";

import { productSearchTerms } from "../../utils/productSearchTerms";
import { blogSearchTerms } from "../../utils/blogSearchTerms";
import { searchByKeywords } from "../../utils/searchUtils";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  const searchData = useMemo(() => {
    return [...productSearchTerms, ...blogSearchTerms];
  }, []);

  const searchEngine = useMemo(() => {
    return new Fuse(searchData, {
      keys: ["title", "description", "keywords"],
      threshold: 0.34,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, [searchData]);

  const searchResults = useMemo(() => {
    return searchByKeywords(
      searchEngine,
      searchQuery,
      "path",
      10
    );
  }, [searchEngine, searchQuery]);

  const productResults = searchResults.filter(
    (item) => item.category === "Products"
  );

  const blogResults = searchResults.filter(
    (item) => item.category === "Blogs"
  );

  const caseStudyResults = searchResults.filter(
    (item) => item.category === "Case Studies"
  );

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleResultClick = (path) => {
    closeSearch();
    navigate(path);
  };

  return (
    <div className="search-wrapper">

      {/* Search Icon */}
      {!searchOpen && (
        <button
          className="search-icon-button"
          onClick={() => setSearchOpen(true)}
          aria-label="Open search"
        >
          <FaSearch />
        </button>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay">

          {/* Backdrop */}
          <div
            className="search-backdrop"
            onClick={closeSearch}
          />

          {/* Search Content */}
          <div className="search-content">

            {/* Search Input */}
            <div className="search-input-wrapper">

              <FaSearch className="search-input-icon" />

              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="search-close-button"
                onClick={closeSearch}
                aria-label="Close search"
              >
                <FaTimes />
              </button>

            </div>

            {/* Results */}
            {searchQuery.trim().length >= 2 && (
              <div className="search-results">

                <p className="search-count">
                  About {searchResults.length} results for "
                  {searchQuery}"
                </p>

                {/* Products */}
                {productResults.length > 0 && (
                  <section className="search-section">
                    <h2>Products</h2>

                    {productResults.map((item) => (
                      <div
                        className="search-result-card"
                        key={item.path}
                        onClick={() =>
                          handleResultClick(item.path)
                        }
                      >
                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleResultClick(item.path);
                          }}
                        >
                          <FaArrowRight />
                          <span>Open page</span>
                        </button>
                      </div>
                    ))}
                  </section>
                )}

                {/* Blogs */}
                {blogResults.length > 0 && (
                  <section className="search-section">
                    <h2>Blogs</h2>

                    {blogResults.map((item) => (
                      <div
                        className="search-result-card"
                        key={item.path}
                        onClick={() =>
                          handleResultClick(item.path)
                        }
                      >
                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleResultClick(item.path);
                          }}
                        >
                          <FaArrowRight />
                          <span>Open page</span>
                        </button>
                      </div>
                    ))}
                  </section>
                )}

                {/* Case Studies */}
                {caseStudyResults.length > 0 && (
                  <section className="search-section">
                    <h2>Case Studies</h2>

                    {caseStudyResults.map((item) => (
                      <div
                        className="search-result-card"
                        key={item.path}
                        onClick={() =>
                          handleResultClick(item.path)
                        }
                      >
                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleResultClick(item.path);
                          }}
                        >
                          <FaArrowRight />
                          <span>Open page</span>
                        </button>
                      </div>
                    ))}
                  </section>
                )}

                {/* No Results */}
                {searchResults.length === 0 && (
                  <div className="no-results">
                    No results found
                  </div>
                )}

              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default Search;