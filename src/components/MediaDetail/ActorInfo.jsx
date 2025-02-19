import ImageComponent from "@components/Image";
import { Link } from "react-router-dom";

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="transform rounded-lg border border-slate-300 bg-black shadow-sm transition-transform duration-300 hover:scale-110"
    >
      <ImageComponent
        className="rounded-lg"
        src={
          profilePath &&
          `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
        }
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && (
          <p>
            {episodeCount} {Number(episodeCount) >= 2 ? "Episodes" : "Episode"}
          </p>
        )}
      </div>
    </Link>
  );
};
export default ActorInfo;
