import './FetchVideos.scss';
import React, { useEffect, useState } from "react";

function FetchVideos({ playlistId, apiKey }) {
  const [videos, setVideos] = useState([]);

  // Fetch videos from the playlist
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playlistId}&key=${apiKey}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [playlistId, apiKey]);

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          {/* Embed YouTube Player */}
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>{video.snippet.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default FetchVideos;