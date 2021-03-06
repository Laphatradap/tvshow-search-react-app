import React from "react";
import { useSelector } from "react-redux";
import { getTVShows } from "../../store/shows/selectors";
import EpisodeListContainer from "../EpisodeListContainer";
import { useParams } from "react-router-dom";

const ShowContainer = () => {
  const params = useParams();
  const showId = parseInt(params.id);
  const tvshows = useSelector(getTVShows);

  if (!tvshows) return "Loading...";

  const showData = tvshows
    .map((show) => show.show)
    .find((item) => item.id === showId);

  return (
    <div>
      <div className="show-container">
        <div className="image-wrapper">
          {" "}
          {!showData.image ? (
            <div>No Photo!</div>
          ) : (
            <img
              src={showData.image.medium}
              alt="showposter"
            />
          )}
        </div>
        <div className="text-wrapper">
          <div className="title">{showData.name}</div>
          <div className="details" key={showData.id}>
            {showData.language}
            {" | "}
            {showData.genres.map((genre) => (
              <span key={showData.id}>{genre} </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: showData.summary }}
      ></div>
      <div>
        <EpisodeListContainer showId={showData.id} />
      </div>
    </div>
  );
};

export default ShowContainer;
