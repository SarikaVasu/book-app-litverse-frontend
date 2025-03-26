import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import getBaseUrl from "../utils/baseURL";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q"); // Get the search query from URL
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            axios.get(`${getBaseUrl()}/api/books/search?q=${query}`)
                .then(response => {
                    setResults(response.data);
                })
                .catch(error => console.error("Error fetching search results:", error));
        }
    }, [query]);

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold">Search Results for "{query}"</h2>
            <ul className="mt-4">
                {results.length > 0 ? (
                    results.map((book) => (
                        <li key={book._id} className="border-b p-2">{book.title}</li>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </ul>
        </div>
    );
};

export default SearchResults;
