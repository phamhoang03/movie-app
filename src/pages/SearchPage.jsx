import useFetch from "@components/hooks/useFetch";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import SearchForm from "@components/SearchForm/SearchForm";
import SearchTitle from "@components/SearchForm/SearchTitle";
import { useState } from "react";

const SearchPage = () => {
  const [dataFromSearchTitle, setDataFromSearchTitle] = useState("");

  const handleDataFromSearchTitle = (data) => {
    setDataFromSearchTitle(data);
  };

  console.log(dataFromSearchTitle, "dataFromSearchTitle");

  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });

  const [minRating, maxRating] =
    searchFormValues.rating === "All"
      ? [0, 100]
      : searchFormValues.rating.split(" - ");

  const { data } = useFetch({
    url: `/discover/${searchFormValues.mediaType}?with_genres=${searchFormValues.genres.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });

  console.log(dataFromSearchTitle, "dataFromSearchTitle");
  console.log(data, "peeeeeeee");
  return (
    <div className="bg-black text-white">
      <div className="container flex-col">
        <p className="ms:text-[1.5vw] text-1xl font-bold lg:text-lg">Search</p>
        <div className="flex gap-6">
          <div className="flex-1">
            <SearchForm setSearchFormValues={setSearchFormValues} />
          </div>
          <div className="flex-[3]">
            <div className="flex w-full items-center rounded-lg bg-gray-800 px-3 py-1">
              <SearchTitle
                handleDataFromSearchTitle={handleDataFromSearchTitle}
              />
            </div>
            <RelatedMediaList
              mediaList={
                dataFromSearchTitle.length !== 0
                  ? dataFromSearchTitle
                  : data.results || []
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
