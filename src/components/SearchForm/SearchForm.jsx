import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs";
import GenresInput from "./GenresInput";
import RatingInput from "./RatingInput";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediaType");
  const [reset, setResset] = useState(mediaType);
  console.log(mediaType, "hhhhhhhh");

  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "All",
    },
  });

  const onSubmit = (data) => {
    console.log(data, "ppppppppppp");
  };

  const formValue = watch();

  console.log(formValue, "oooooooo");

  useEffect(() => {
    setSearchFormValues(formValue);
    setResset(reset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValue), mediaType]);

  return (
    <div className="rounded-lg border p-4 shadow-md">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />

        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />

        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />
      </form>
    </div>
  );
};

export default SearchForm;
