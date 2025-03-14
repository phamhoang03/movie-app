import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs";
import GenresInput from "./GenresInput";
import RatingInput from "./RatingInput";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediaType") || "movie"; // Mặc định là "movie"

  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: {
      mediaType: mediaType,
      genres: [],
      rating: "All",
    },
  });

  // useEffect(() => {
  //   if (handleMediaType && typeof handleMediaType === "function") {
  //     handleMediaType(mediaType);
  //   }
  // }, [mediaType, handleMediaType]);

  // Reset lại form mỗi khi mediaType thay đổi
  useEffect(() => {
    reset({
      mediaType: mediaType,
      genres: [],
      rating: "All",
    });
  }, [mediaType, reset]);

  const onSubmit = (data) => {
    console.log(data, "Submitted Data");
  };

  const formValue = watch();

  useEffect(() => {
    setSearchFormValues(formValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValue)]);

  console.log(mediaType, "hhhhhhhhhhhhhhhhhhhhhhhhh");
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
