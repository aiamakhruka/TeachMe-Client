import React, { useEffect, useState } from "react";
import FetchVideos from "../../components/FetchVideos/FetchVideos";
import './PlaylistPage.sass';
function PlaylistPage({ playlistId }) {
  const [videos, setVideos] = useState([]);

  return (
    <div className="playlist-page">
      <h1>Playlist Videos</h1>
      <div className="video-grid">
        <FetchVideos
          playlistId={playlistId}
          apiKey={"AIzaSyDd5WSWpm_HmfC07XK25MXT8paVZHP2Vqg"}
        />
      </div>
    </div>
  );
}

export default PlaylistPage;