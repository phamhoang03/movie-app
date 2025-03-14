import useFetch from "@components/hooks/useFetch";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SearchTitle = ({ handleDataFromSearchTitle }) => {
  const [query, setQuery] = useState("");

  const { data } = useFetch({
    url: `/search/tv?query=${query}`,
  });

  useEffect(() => {
    if (
      handleDataFromSearchTitle &&
      typeof handleDataFromSearchTitle === "function"
    ) {
      handleDataFromSearchTitle(data?.results || []);
    }
  }, [data, handleDataFromSearchTitle]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent text-white outline-none"
        onChange={(e) => setQuery(e.target.value)}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
    </>
  );
};

export default SearchTitle;
