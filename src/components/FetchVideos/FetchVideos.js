import React, { useEffect, useState } from "react";
import './FetchVideos';
function FetchVideos({ playlistId, apiKey }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`
      );
      const data = await response.json();
      setVideos(data.items);
    };

    fetchVideos();
  }, [playlistId, apiKey]);

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <h3>{video.snippet.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default FetchVideos;